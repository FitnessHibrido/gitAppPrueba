/*
  # Add Achievement Helper Functions

  1. New Functions
    - Create functions to help with achievement tracking
    - Add functions for awarding achievements manually
    - Add functions for checking achievement eligibility
  
  2. Security
    - Functions run with appropriate permissions
*/

-- Function to award an achievement to a user
CREATE OR REPLACE FUNCTION award_achievement(
  p_user_id UUID,
  p_achievement_id INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
  v_points INTEGER;
  v_repeatable BOOLEAN;
  v_already_awarded BOOLEAN;
BEGIN
  -- Check if achievement exists
  SELECT points_value, repeatable INTO v_points, v_repeatable
  FROM achievements
  WHERE id = p_achievement_id;
  
  IF v_points IS NULL THEN
    RAISE EXCEPTION 'Achievement with ID % does not exist', p_achievement_id;
  END IF;
  
  -- Check if already awarded for non-repeatable achievements
  SELECT EXISTS (
    SELECT 1 FROM user_achievements
    WHERE user_id = p_user_id AND achievement_id = p_achievement_id
  ) INTO v_already_awarded;
  
  IF v_already_awarded AND NOT v_repeatable THEN
    RETURN FALSE; -- Already awarded and not repeatable
  END IF;
  
  -- Award the achievement
  INSERT INTO user_achievements (user_id, achievement_id, points)
  VALUES (p_user_id, p_achievement_id, v_points);
  
  -- Update user's total points
  UPDATE profiles
  SET total_points = total_points + v_points
  WHERE id = p_user_id;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if a user has completed a specific achievement
CREATE OR REPLACE FUNCTION has_achievement(
  p_user_id UUID,
  p_achievement_id INTEGER
)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_achievements
    WHERE user_id = p_user_id AND achievement_id = p_achievement_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get a user's achievement count
CREATE OR REPLACE FUNCTION get_achievement_count(
  p_user_id UUID
)
RETURNS INTEGER AS $$
DECLARE
  v_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO v_count
  FROM user_achievements
  WHERE user_id = p_user_id;
  
  RETURN v_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get a user's total achievement points
CREATE OR REPLACE FUNCTION get_achievement_points(
  p_user_id UUID
)
RETURNS INTEGER AS $$
DECLARE
  v_points INTEGER;
BEGIN
  SELECT COALESCE(SUM(points), 0) INTO v_points
  FROM user_achievements
  WHERE user_id = p_user_id;
  
  RETURN v_points;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check and update user prestige based on points
CREATE OR REPLACE FUNCTION update_prestige()
RETURNS TRIGGER AS $$
BEGIN
  -- Update prestige based on total points
  IF NEW.total_points >= 5000 THEN
    NEW.prestige := 'Gran Maestro';
  ELSIF NEW.total_points >= 3000 THEN
    NEW.prestige := 'Maestro';
  ELSIF NEW.total_points >= 2000 THEN
    NEW.prestige := 'Diamante';
  ELSIF NEW.total_points >= 1000 THEN
    NEW.prestige := 'Platino';
  ELSIF NEW.total_points >= 500 THEN
    NEW.prestige := 'Oro';
  ELSIF NEW.total_points >= 250 THEN
    NEW.prestige := 'Plata';
  ELSIF NEW.total_points >= 100 THEN
    NEW.prestige := 'Bronce';
  ELSE
    NEW.prestige := 'Recluta';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating prestige
DROP TRIGGER IF EXISTS trigger_update_prestige ON profiles;
CREATE TRIGGER trigger_update_prestige
BEFORE UPDATE OF total_points ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_prestige();

-- Function to check and award milestone achievements based on account age
CREATE OR REPLACE FUNCTION check_milestone_achievements()
RETURNS VOID AS $$
DECLARE
  user_record RECORD;
BEGIN
  -- Check for 30-day milestone
  FOR user_record IN
    SELECT p.id, p.created_at
    FROM profiles p
    WHERE 
      p.created_at <= (CURRENT_DATE - INTERVAL '30 days') AND
      NOT EXISTS (
        SELECT 1 FROM user_achievements ua
        WHERE ua.user_id = p.id AND ua.achievement_id = 601
      )
  LOOP
    PERFORM award_achievement(user_record.id, 601);
  END LOOP;
  
  -- Check for 6-month milestone
  FOR user_record IN
    SELECT p.id, p.created_at
    FROM profiles p
    WHERE 
      p.created_at <= (CURRENT_DATE - INTERVAL '6 months') AND
      NOT EXISTS (
        SELECT 1 FROM user_achievements ua
        WHERE ua.user_id = p.id AND ua.achievement_id = 602
      )
  LOOP
    PERFORM award_achievement(user_record.id, 602);
  END LOOP;
  
  -- Check for 1-year milestone
  FOR user_record IN
    SELECT p.id, p.created_at
    FROM profiles p
    WHERE 
      p.created_at <= (CURRENT_DATE - INTERVAL '1 year') AND
      NOT EXISTS (
        SELECT 1 FROM user_achievements ua
        WHERE ua.user_id = p.id AND ua.achievement_id = 603
      )
  LOOP
    PERFORM award_achievement(user_record.id, 603);
  END LOOP;
  
  -- Check for 2-year milestone
  FOR user_record IN
    SELECT p.id, p.created_at
    FROM profiles p
    WHERE 
      p.created_at <= (CURRENT_DATE - INTERVAL '2 years') AND
      NOT EXISTS (
        SELECT 1 FROM user_achievements ua
        WHERE ua.user_id = p.id AND ua.achievement_id = 604
      )
  LOOP
    PERFORM award_achievement(user_record.id, 604);
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to check for learning achievements
CREATE OR REPLACE FUNCTION check_learning_achievements()
RETURNS TRIGGER AS $$
DECLARE
  video_count INTEGER;
  user_id UUID;
BEGIN
  -- This is a placeholder function that would be triggered when a user watches videos
  -- In a real implementation, you would track video views and award achievements accordingly
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;