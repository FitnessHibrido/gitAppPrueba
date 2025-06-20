/*
  # Add Social Features for Community

  1. New Tables
    - `community_posts` - For user posts in the community feed
    - `community_likes` - For tracking likes on posts
    - `community_comments` - For comments on posts
    - `follows` - For user follow relationships
  
  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for CRUD operations
*/

-- Create community posts table
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT,
  caption TEXT,
  image_url TEXT,
  images_url TEXT[],
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now())
);

-- Enable RLS on community_posts
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

-- Policies for community_posts
CREATE POLICY "Anyone can read posts" 
  ON community_posts FOR SELECT 
  USING (true);

CREATE POLICY "Users can insert their own posts" 
  ON community_posts FOR INSERT 
  WITH CHECK (uid() = user_id);

CREATE POLICY "Can own post" 
  ON community_posts FOR UPDATE 
  USING (user_id = uid())
  WITH CHECK (user_id = uid());

CREATE POLICY "allow delete own posts" 
  ON community_posts FOR DELETE 
  USING (user_id = uid());

-- Create community likes table
CREATE TABLE IF NOT EXISTS community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now()),
  UNIQUE(post_id, user_id)
);

-- Enable RLS on community_likes
ALTER TABLE community_likes ENABLE ROW LEVEL SECURITY;

-- Policies for community_likes
CREATE POLICY "Users can read likes" 
  ON community_likes FOR SELECT 
  USING (true);

CREATE POLICY "Users can like posts" 
  ON community_likes FOR INSERT 
  WITH CHECK (uid() = user_id);

CREATE POLICY "Admins o autores pueden eliminar likes" 
  ON community_likes FOR DELETE 
  USING ((uid() = user_id) OR (jwt() ->> 'role'::text) = 'admin'::text);

-- Create community comments table
CREATE TABLE IF NOT EXISTS community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now())
);

-- Enable RLS on community_comments
ALTER TABLE community_comments ENABLE ROW LEVEL SECURITY;

-- Policies for community_comments
CREATE POLICY "Anyone can read comments" 
  ON community_comments FOR SELECT 
  USING (true);

CREATE POLICY "Users can comment on posts" 
  ON community_comments FOR INSERT 
  WITH CHECK (uid() = user_id);

CREATE POLICY "Allow delete if owner or post owner" 
  ON community_comments FOR DELETE 
  USING ((uid() = user_id) OR EXISTS (
    SELECT 1 FROM community_posts
    WHERE community_posts.id = community_comments.post_id
    AND community_posts.user_id = uid()
  ));

CREATE POLICY "delete own comments" 
  ON community_comments FOR DELETE 
  USING (user_id = uid());

-- Create follows table
CREATE TABLE IF NOT EXISTS follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now()),
  UNIQUE(follower_id, following_id)
);

-- Enable RLS on follows
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

-- Policies for follows
CREATE POLICY "Enable read access for all users" 
  ON follows FOR SELECT 
  USING (true);

CREATE POLICY "Enable insert for authenticated users only" 
  ON follows FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Enable delete for users based on user_id" 
  ON follows FOR DELETE 
  USING ((SELECT uid()) = follower_id);

-- Add foreign key constraints
ALTER TABLE follows ADD CONSTRAINT fk_follower 
  FOREIGN KEY (follower_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE follows ADD CONSTRAINT fk_following 
  FOREIGN KEY (following_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE community_posts ADD CONSTRAINT fk_posts_user 
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE community_comments ADD CONSTRAINT fk_comments_user 
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Create functions for social achievements
CREATE OR REPLACE FUNCTION check_social_achievements()
RETURNS TRIGGER AS $$
DECLARE
  follower_count INTEGER;
  following_count INTEGER;
  user_id UUID;
  post_count INTEGER;
  comment_count INTEGER;
  like_count INTEGER;
BEGIN
  -- Determine which user to check based on the table being triggered
  IF TG_TABLE_NAME = 'follows' THEN
    IF TG_OP = 'INSERT' THEN
      -- For new follows, check both follower and following
      
      -- Check if user has followed 5 people (Conexión Social)
      SELECT COUNT(*) INTO following_count
      FROM follows
      WHERE follower_id = NEW.follower_id;
      
      IF following_count = 5 AND NOT EXISTS (
        SELECT 1 FROM user_achievements 
        WHERE user_id = NEW.follower_id AND achievement_id = 401
      ) THEN
        PERFORM award_achievement(NEW.follower_id, 401);
      END IF;
      
      -- Check if user has 10 followers (Influencer Fitness)
      SELECT COUNT(*) INTO follower_count
      FROM follows
      WHERE following_id = NEW.following_id;
      
      IF follower_count = 10 AND NOT EXISTS (
        SELECT 1 FROM user_achievements 
        WHERE user_id = NEW.following_id AND achievement_id = 402
      ) THEN
        PERFORM award_achievement(NEW.following_id, 402);
      END IF;
    END IF;
  ELSIF TG_TABLE_NAME = 'community_posts' THEN
    IF TG_OP = 'INSERT' THEN
      -- Check if user has shared 5 posts (Motivador)
      SELECT COUNT(*) INTO post_count
      FROM community_posts
      WHERE user_id = NEW.user_id;
      
      IF post_count = 5 AND NOT EXISTS (
        SELECT 1 FROM user_achievements 
        WHERE user_id = NEW.user_id AND achievement_id = 403
      ) THEN
        PERFORM award_achievement(NEW.user_id, 403);
      END IF;
    END IF;
  ELSIF TG_TABLE_NAME = 'community_comments' THEN
    IF TG_OP = 'INSERT' THEN
      -- Check if user has commented on 10 posts (Compañero de Entrenamiento)
      SELECT COUNT(*) INTO comment_count
      FROM community_comments
      WHERE user_id = NEW.user_id;
      
      IF comment_count = 10 AND NOT EXISTS (
        SELECT 1 FROM user_achievements 
        WHERE user_id = NEW.user_id AND achievement_id = 404
      ) THEN
        PERFORM award_achievement(NEW.user_id, 404);
      END IF;
    END IF;
  ELSIF TG_TABLE_NAME = 'community_likes' THEN
    IF TG_OP = 'INSERT' THEN
      -- Check if user's posts have received 20 likes (Inspiración)
      SELECT COUNT(*) INTO like_count
      FROM community_likes
      JOIN community_posts ON community_likes.post_id = community_posts.id
      WHERE community_posts.user_id = (
        SELECT user_id FROM community_posts WHERE id = NEW.post_id
      );
      
      IF like_count = 20 AND NOT EXISTS (
        SELECT 1 FROM user_achievements 
        WHERE user_id = (SELECT user_id FROM community_posts WHERE id = NEW.post_id)
        AND achievement_id = 405
      ) THEN
        PERFORM award_achievement(
          (SELECT user_id FROM community_posts WHERE id = NEW.post_id),
          405
        );
      END IF;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for social achievements
CREATE TRIGGER check_follows_achievements_trigger
AFTER INSERT ON follows
FOR EACH ROW
EXECUTE FUNCTION check_social_achievements();

CREATE TRIGGER check_posts_achievements_trigger
AFTER INSERT ON community_posts
FOR EACH ROW
EXECUTE FUNCTION check_social_achievements();

CREATE TRIGGER check_comments_achievements_trigger
AFTER INSERT ON community_comments
FOR EACH ROW
EXECUTE FUNCTION check_social_achievements();

CREATE TRIGGER check_likes_achievements_trigger
AFTER INSERT ON community_likes
FOR EACH ROW
EXECUTE FUNCTION check_social_achievements();