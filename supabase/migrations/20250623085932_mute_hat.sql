/*
  # Community Features

  1. New Tables
    - `community_posts` - For user posts in the community feed
    - `community_likes` - For tracking likes on posts
    - `community_comments` - For comments on posts
    - `follows` - For user follow relationships

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for CRUD operations
    - Set up foreign key relationships

  3. Social Achievement Tracking
    - Add function to track social achievements
    - Create triggers for achievement tracking
*/

-- Create community posts table if it doesn't exist
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

-- Policies for community_posts - check if they exist first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_posts' AND policyname = 'Anyone can read posts'
  ) THEN
    CREATE POLICY "Anyone can read posts" 
      ON community_posts FOR SELECT 
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_posts' AND policyname = 'Users can insert their own posts'
  ) THEN
    CREATE POLICY "Users can insert their own posts" 
      ON community_posts FOR INSERT 
      WITH CHECK (uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_posts' AND policyname = 'Can own post'
  ) THEN
    CREATE POLICY "Can own post" 
      ON community_posts FOR UPDATE 
      USING (user_id = uid())
      WITH CHECK (user_id = uid());
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_posts' AND policyname = 'allow delete own posts'
  ) THEN
    CREATE POLICY "allow delete own posts" 
      ON community_posts FOR DELETE 
      USING (user_id = uid());
  END IF;
END
$$;

-- Create community likes table if it doesn't exist
CREATE TABLE IF NOT EXISTS community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now()),
  UNIQUE(post_id, user_id)
);

-- Enable RLS on community_likes
ALTER TABLE community_likes ENABLE ROW LEVEL SECURITY;

-- Policies for community_likes - check if they exist first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_likes' AND policyname = 'Users can read likes'
  ) THEN
    CREATE POLICY "Users can read likes" 
      ON community_likes FOR SELECT 
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_likes' AND policyname = 'Users can like posts'
  ) THEN
    CREATE POLICY "Users can like posts" 
      ON community_likes FOR INSERT 
      WITH CHECK (uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_likes' AND policyname = 'Admins o autores pueden eliminar likes'
  ) THEN
    CREATE POLICY "Admins o autores pueden eliminar likes" 
      ON community_likes FOR DELETE 
      USING ((uid() = user_id) OR (jwt() ->> 'role'::text) = 'admin'::text);
  END IF;
END
$$;

-- Create community comments table if it doesn't exist
CREATE TABLE IF NOT EXISTS community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now())
);

-- Enable RLS on community_comments
ALTER TABLE community_comments ENABLE ROW LEVEL SECURITY;

-- Policies for community_comments - check if they exist first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_comments' AND policyname = 'Anyone can read comments'
  ) THEN
    CREATE POLICY "Anyone can read comments" 
      ON community_comments FOR SELECT 
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_comments' AND policyname = 'Users can comment on posts'
  ) THEN
    CREATE POLICY "Users can comment on posts" 
      ON community_comments FOR INSERT 
      WITH CHECK (uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_comments' AND policyname = 'Allow delete if owner or post owner'
  ) THEN
    CREATE POLICY "Allow delete if owner or post owner" 
      ON community_comments FOR DELETE 
      USING ((uid() = user_id) OR EXISTS (
        SELECT 1 FROM community_posts
        WHERE community_posts.id = community_comments.post_id
        AND community_posts.user_id = uid()
      ));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'community_comments' AND policyname = 'delete own comments'
  ) THEN
    CREATE POLICY "delete own comments" 
      ON community_comments FOR DELETE 
      USING (user_id = uid());
  END IF;
END
$$;

-- Create follows table if it doesn't exist
CREATE TABLE IF NOT EXISTS follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL,
  following_id UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc', now()),
  UNIQUE(follower_id, following_id)
);

-- Enable RLS on follows
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

-- Policies for follows - check if they exist first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'follows' AND policyname = 'Enable read access for all users'
  ) THEN
    CREATE POLICY "Enable read access for all users" 
      ON follows FOR SELECT 
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'follows' AND policyname = 'Enable insert for authenticated users only'
  ) THEN
    CREATE POLICY "Enable insert for authenticated users only" 
      ON follows FOR INSERT 
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'follows' AND policyname = 'Enable delete for users based on user_id'
  ) THEN
    CREATE POLICY "Enable delete for users based on user_id" 
      ON follows FOR DELETE 
      USING ((SELECT uid()) = follower_id);
  END IF;
END
$$;

-- Add foreign key constraints if they don't exist
DO $$
BEGIN
  -- Check if the constraint already exists before adding it
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_follower'
  ) THEN
    ALTER TABLE follows ADD CONSTRAINT fk_follower 
      FOREIGN KEY (follower_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_following'
  ) THEN
    ALTER TABLE follows ADD CONSTRAINT fk_following 
      FOREIGN KEY (following_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'follows_follower_id_fkey'
  ) AND NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_follower'
  ) THEN
    ALTER TABLE follows ADD CONSTRAINT follows_follower_id_fkey 
      FOREIGN KEY (follower_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'follows_following_id_fkey'
  ) AND NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_following'
  ) THEN
    ALTER TABLE follows ADD CONSTRAINT follows_following_id_fkey 
      FOREIGN KEY (following_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_posts_user'
  ) THEN
    ALTER TABLE community_posts ADD CONSTRAINT fk_posts_user 
      FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'fk_comments_user'
  ) THEN
    ALTER TABLE community_comments ADD CONSTRAINT fk_comments_user 
      FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;
  END IF;
END
$$;

-- Create or replace function for social achievements
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

-- Create triggers for social achievements if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'check_follows_achievements_trigger'
  ) THEN
    CREATE TRIGGER check_follows_achievements_trigger
    AFTER INSERT ON follows
    FOR EACH ROW
    EXECUTE FUNCTION check_social_achievements();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'check_posts_achievements_trigger'
  ) THEN
    CREATE TRIGGER check_posts_achievements_trigger
    AFTER INSERT ON community_posts
    FOR EACH ROW
    EXECUTE FUNCTION check_social_achievements();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'check_comments_achievements_trigger'
  ) THEN
    CREATE TRIGGER check_comments_achievements_trigger
    AFTER INSERT ON community_comments
    FOR EACH ROW
    EXECUTE FUNCTION check_social_achievements();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'check_likes_achievements_trigger'
  ) THEN
    CREATE TRIGGER check_likes_achievements_trigger
    AFTER INSERT ON community_likes
    FOR EACH ROW
    EXECUTE FUNCTION check_social_achievements();
  END IF;
END
$$;