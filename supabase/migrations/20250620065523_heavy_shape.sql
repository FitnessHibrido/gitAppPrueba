/*
  # Add Achievement Trigger Functions

  1. New Trigger Functions
    - Create functions to automatically award achievements
    - Track workout completions, streaks, and milestones
    - Monitor user activity for achievement eligibility
  
  2. Security
    - Functions run with appropriate permissions
*/

-- Function to check and award workout completion achievements
CREATE OR REPLACE FUNCTION check_workout_achievements()
RETURNS TRIGGER AS $$
DECLARE
  workout_count INTEGER;
  total_volume NUMERIC;
  user_id UUID;
BEGIN
  user_id := NEW.profile_id;
  
  -- Check first workout achievement
  IF NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 101
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 101, points_value
    FROM achievements WHERE id = 101;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 101)
    WHERE id = NEW.profile_id;
  END IF;
  
  -- Check workout count achievements
  SELECT COUNT(*) INTO workout_count
  FROM workouts
  WHERE profile_id = NEW.profile_id;
  
  IF workout_count = 10 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 105
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 105, points_value
    FROM achievements WHERE id = 105;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 105)
    WHERE id = NEW.profile_id;
  END IF;
  
  -- Check volume achievements
  SELECT COALESCE(SUM(total_volume), 0) INTO total_volume
  FROM workouts
  WHERE profile_id = NEW.profile_id;
  
  IF total_volume >= 10000 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 102
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 102, points_value
    FROM achievements WHERE id = 102;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 102)
    WHERE id = NEW.profile_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for workout completion achievements
DROP TRIGGER IF EXISTS check_workout_achievements_trigger ON workouts;
CREATE TRIGGER check_workout_achievements_trigger
AFTER INSERT ON workouts
FOR EACH ROW
WHEN (NEW.end_time IS NOT NULL)
EXECUTE FUNCTION check_workout_achievements();

-- Function to check and award streak achievements
CREATE OR REPLACE FUNCTION check_streak_achievements()
RETURNS TRIGGER AS $$
DECLARE
  streak_days INTEGER;
  user_id UUID;
BEGIN
  user_id := NEW.profile_id;
  
  -- Calculate current streak (simplified version)
  WITH workout_dates AS (
    SELECT DISTINCT DATE(start_time) as workout_date
    FROM workouts
    WHERE profile_id = user_id
    ORDER BY workout_date DESC
  ),
  date_diffs AS (
    SELECT 
      workout_date,
      LAG(workout_date) OVER (ORDER BY workout_date DESC) as prev_date,
      workout_date - LAG(workout_date) OVER (ORDER BY workout_date DESC) as day_diff
    FROM workout_dates
  ),
  streaks AS (
    SELECT 
      workout_date,
      SUM(CASE WHEN day_diff = -1 THEN 0 ELSE 1 END) OVER (ORDER BY workout_date DESC) as streak_group
    FROM date_diffs
  )
  SELECT COUNT(*) INTO streak_days
  FROM streaks
  WHERE streak_group = 0;
  
  -- Check 3-day streak achievement
  IF streak_days >= 3 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 201
    AND achieved_at > (CURRENT_DATE - INTERVAL '3 days')
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 201, points_value
    FROM achievements WHERE id = 201;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 201)
    WHERE id = NEW.profile_id;
  END IF;
  
  -- Check 7-day streak achievement
  IF streak_days >= 7 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 202
    AND achieved_at > (CURRENT_DATE - INTERVAL '7 days')
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 202, points_value
    FROM achievements WHERE id = 202;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 202)
    WHERE id = NEW.profile_id;
  END IF;
  
  -- Check 30-day streak achievement
  IF streak_days >= 30 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = NEW.profile_id AND achievement_id = 203
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT NEW.profile_id, 203, points_value
    FROM achievements WHERE id = 203;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 203)
    WHERE id = NEW.profile_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for streak achievements
DROP TRIGGER IF EXISTS check_streak_achievements_trigger ON workouts;
CREATE TRIGGER check_streak_achievements_trigger
AFTER INSERT ON workouts
FOR EACH ROW
WHEN (NEW.end_time IS NOT NULL)
EXECUTE FUNCTION check_streak_achievements();

-- Function to check and award personal record achievements
CREATE OR REPLACE FUNCTION check_pr_achievements()
RETURNS TRIGGER AS $$
DECLARE
  pr_count INTEGER;
  user_id UUID;
BEGIN
  -- Get the user ID from the workout
  SELECT profile_id INTO user_id
  FROM workouts
  WHERE id = NEW.workout_id;
  
  -- Count personal records (simplified version)
  WITH exercise_history AS (
    SELECT 
      exercise_name,
      max_weight,
      ROW_NUMBER() OVER (PARTITION BY exercise_name ORDER BY created_at DESC) as row_num
    FROM workout_exercises
    WHERE workout_id IN (SELECT id FROM workouts WHERE profile_id = user_id)
  ),
  prs AS (
    SELECT e1.exercise_name
    FROM exercise_history e1
    JOIN exercise_history e2 ON e1.exercise_name = e2.exercise_name AND e2.row_num = 2
    WHERE e1.row_num = 1 AND e1.max_weight > e2.max_weight
  )
  SELECT COUNT(*) INTO pr_count FROM prs;
  
  -- Check PR achievement
  IF pr_count >= 5 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 103
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 103, points_value
    FROM achievements WHERE id = 103;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 103)
    WHERE id = user_id;
  END IF;
  
  -- Check specific lift achievements
  IF NEW.exercise_name ILIKE '%press banca%' AND NEW.max_weight >= 100 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 106
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 106, points_value
    FROM achievements WHERE id = 106;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 106)
    WHERE id = user_id;
  END IF;
  
  IF NEW.exercise_name ILIKE '%sentadilla%' AND NEW.max_weight >= 150 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 107
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 107, points_value
    FROM achievements WHERE id = 107;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 107)
    WHERE id = user_id;
  END IF;
  
  IF NEW.exercise_name ILIKE '%peso muerto%' AND NEW.max_weight >= 180 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 108
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 108, points_value
    FROM achievements WHERE id = 108;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 108)
    WHERE id = user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for PR achievements
DROP TRIGGER IF EXISTS check_pr_achievements_trigger ON workout_exercises;
CREATE TRIGGER check_pr_achievements_trigger
AFTER INSERT ON workout_exercises
FOR EACH ROW
EXECUTE FUNCTION check_pr_achievements();

-- Function to check and award tracking achievements
CREATE OR REPLACE FUNCTION check_tracking_achievements()
RETURNS TRIGGER AS $$
DECLARE
  photo_count INTEGER;
  user_id UUID;
BEGIN
  user_id := NEW.profile_id;
  
  -- Count progress photos
  SELECT COUNT(*) INTO photo_count
  FROM progress_photos
  WHERE profile_id = user_id;
  
  -- Check photo achievement
  IF photo_count >= 3 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 305
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 305, points_value
    FROM achievements WHERE id = 305;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 305)
    WHERE id = user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for tracking achievements
DROP TRIGGER IF EXISTS check_photo_achievements_trigger ON progress_photos;
CREATE TRIGGER check_photo_achievements_trigger
AFTER INSERT ON progress_photos
FOR EACH ROW
EXECUTE FUNCTION check_tracking_achievements();

-- Function to check and award special date achievements
CREATE OR REPLACE FUNCTION check_special_date_achievements()
RETURNS TRIGGER AS $$
DECLARE
  workout_date DATE;
  user_id UUID;
  user_birthday DATE;
BEGIN
  user_id := NEW.profile_id;
  workout_date := DATE(NEW.start_time);
  
  -- Get user's birthday
  SELECT birthdate INTO user_birthday
  FROM profiles
  WHERE id = user_id;
  
  -- Check Christmas achievement
  IF EXTRACT(MONTH FROM workout_date) = 12 AND EXTRACT(DAY FROM workout_date) = 25 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 801
    AND EXTRACT(YEAR FROM achieved_at) = EXTRACT(YEAR FROM workout_date)
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 801, points_value
    FROM achievements WHERE id = 801;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 801)
    WHERE id = user_id;
  END IF;
  
  -- Check New Year achievement
  IF EXTRACT(MONTH FROM workout_date) = 1 AND EXTRACT(DAY FROM workout_date) = 1 AND NOT EXISTS (
    SELECT 1 FROM user_achievements 
    WHERE user_id = user_id AND achievement_id = 802
    AND EXTRACT(YEAR FROM achieved_at) = EXTRACT(YEAR FROM workout_date)
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 802, points_value
    FROM achievements WHERE id = 802;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 802)
    WHERE id = user_id;
  END IF;
  
  -- Check birthday achievement if birthday is set
  IF user_birthday IS NOT NULL AND 
     EXTRACT(MONTH FROM workout_date) = EXTRACT(MONTH FROM user_birthday) AND 
     EXTRACT(DAY FROM workout_date) = EXTRACT(DAY FROM user_birthday) AND 
     NOT EXISTS (
      SELECT 1 FROM user_achievements 
      WHERE user_id = user_id AND achievement_id = 803
      AND EXTRACT(YEAR FROM achieved_at) = EXTRACT(YEAR FROM workout_date)
  ) THEN
    INSERT INTO user_achievements (user_id, achievement_id, points)
    SELECT user_id, 803, points_value
    FROM achievements WHERE id = 803;
    
    -- Update user's total points
    UPDATE profiles 
    SET total_points = total_points + (SELECT points_value FROM achievements WHERE id = 803)
    WHERE id = user_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for special date achievements
DROP TRIGGER IF EXISTS check_special_date_achievements_trigger ON workouts;
CREATE TRIGGER check_special_date_achievements_trigger
AFTER INSERT ON workouts
FOR EACH ROW
WHEN (NEW.end_time IS NOT NULL)
EXECUTE FUNCTION check_special_date_achievements();