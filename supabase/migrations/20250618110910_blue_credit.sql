/*
  # Crear vista para ranking de la comunidad

  1. Nueva Vista
    - `community_ranking_view`
      - Muestra usuarios ordenados por puntos totales
      - Incluye información de perfil y logros
  
  2. Seguridad
    - Permite acceso de lectura a usuarios autenticados
*/

-- Crear vista para mostrar el ranking de la comunidad
CREATE OR REPLACE VIEW community_ranking_view AS
SELECT 
  p.id,
  p.name,
  p.avatar_url,
  p.prestige,
  p.total_points,
  COUNT(ua.id) as achievements_count,
  RANK() OVER (ORDER BY p.total_points DESC) as rank
FROM 
  profiles p
LEFT JOIN 
  user_achievements ua ON p.id = ua.user_id
GROUP BY 
  p.id, p.name, p.avatar_url, p.prestige, p.total_points
ORDER BY 
  p.total_points DESC;

-- Configurar permisos para la vista
GRANT SELECT ON community_ranking_view TO authenticated;