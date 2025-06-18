/*
  # Crear vista para mostrar logros de usuarios

  1. Nueva Vista
    - `user_achievements_view`
      - Combina datos de `user_achievements`, `achievements` y `profiles`
      - Muestra información completa de logros por usuario
  
  2. Seguridad
    - Permite acceso de lectura a usuarios autenticados
*/

-- Crear vista para mostrar logros de usuarios con información completa
CREATE OR REPLACE VIEW user_achievements_view AS
SELECT 
  ua.id,
  ua.user_id,
  ua.achievement_id,
  ua.points,
  ua.achieved_at,
  a.name as achievement_name,
  a.condition as achievement_condition,
  a.repeatable as is_repeatable,
  a.type as achievement_type,
  p.name as user_name,
  p.avatar_url,
  p.prestige
FROM 
  user_achievements ua
JOIN 
  achievements a ON ua.achievement_id = a.id
JOIN 
  profiles p ON ua.user_id = p.id;

-- Configurar permisos para la vista
GRANT SELECT ON user_achievements_view TO authenticated;