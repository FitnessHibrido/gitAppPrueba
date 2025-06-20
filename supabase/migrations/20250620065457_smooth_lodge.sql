/*
  # Add New User Achievements

  1. New Achievements
    - Add various achievement types to enhance user engagement
    - Create achievements for different fitness activities and milestones
    - Support social, workout, nutrition, and consistency achievements
  
  2. Security
    - Maintain existing security policies
*/

-- Add new workout-related achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (101, 'Primer Entrenamiento', 'Completa tu primer entrenamiento', 50, 'workout', false),
  (102, 'Maestro del Volumen', 'Alcanza 10,000kg de volumen total', 100, 'volume', false),
  (103, 'Superación Personal', 'Establece 5 nuevos récords personales', 75, 'workout', false),
  (104, 'Atleta Completo', 'Entrena todos los grupos musculares principales', 80, 'workout', false),
  (105, 'Entrenador Constante', 'Completa 10 entrenamientos', 60, 'streak', false),
  (106, 'Experto en Fuerza', 'Alcanza 100kg en press de banca', 120, 'volume', false),
  (107, 'Rey de la Sentadilla', 'Alcanza 150kg en sentadilla', 120, 'volume', false),
  (108, 'Maestro del Peso Muerto', 'Alcanza 180kg en peso muerto', 120, 'volume', false);

-- Add consistency and streak achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (201, 'Hábito Saludable', 'Entrena 3 días seguidos', 40, 'streak', true),
  (202, 'Disciplina de Hierro', 'Entrena 7 días seguidos', 80, 'streak', true),
  (203, 'Inquebrantable', 'Entrena 30 días seguidos', 200, 'streak', false),
  (204, 'Entrenamiento Matutino', 'Completa 5 entrenamientos antes de las 9am', 50, 'streak', false),
  (205, 'Guerrero Nocturno', 'Completa 5 entrenamientos después de las 8pm', 50, 'streak', false),
  (206, 'Fin de Semana Activo', 'Entrena 4 fines de semana consecutivos', 70, 'streak', false);

-- Add nutrition and tracking achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (301, 'Nutrición Consciente', 'Registra tus comidas durante 7 días seguidos', 60, 'nutrition', false),
  (302, 'Maestro de Macros', 'Alcanza tus objetivos de macronutrientes 5 días seguidos', 80, 'nutrition', false),
  (303, 'Hidratación Perfecta', 'Registra tu consumo de agua durante 10 días', 50, 'nutrition', false),
  (304, 'Seguimiento Corporal', 'Registra tus métricas corporales 4 semanas seguidas', 70, 'tracking', false),
  (305, 'Fotógrafo del Progreso', 'Sube 3 fotos de progreso', 40, 'tracking', false),
  (306, 'Analista de Datos', 'Revisa tus estadísticas de rendimiento 10 veces', 30, 'tracking', false);

-- Add social and community achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (401, 'Conexión Social', 'Sigue a 5 usuarios', 30, 'social', false),
  (402, 'Influencer Fitness', 'Consigue 10 seguidores', 50, 'social', false),
  (403, 'Motivador', 'Comparte 5 entrenamientos en redes sociales', 40, 'social', false),
  (404, 'Compañero de Entrenamiento', 'Comenta en 10 publicaciones de la comunidad', 35, 'social', false),
  (405, 'Inspiración', 'Recibe 20 likes en tus publicaciones', 60, 'social', false),
  (406, 'Miembro Activo', 'Visita la sección de comunidad 30 días', 45, 'social', true);

-- Add learning and education achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (501, 'Estudiante Fitness', 'Ve 5 videos educativos', 40, 'learning', false),
  (502, 'Maestro Teórico', 'Lee 3 manuales completos', 60, 'learning', false),
  (503, 'Experto en Técnica', 'Completa todos los videos de técnica de un grupo muscular', 70, 'learning', false),
  (504, 'Conocimiento Completo', 'Accede a todo el contenido educativo', 100, 'learning', false);

-- Add milestone achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (601, 'Primer Mes', 'Miembro activo durante 30 días', 50, 'milestone', false),
  (602, 'Medio Año', 'Miembro activo durante 6 meses', 100, 'milestone', false),
  (603, 'Aniversario', 'Miembro activo durante 1 año', 200, 'milestone', false),
  (604, 'Veterano', 'Miembro activo durante 2 años', 300, 'milestone', false);

-- Add challenge achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (701, 'Desafío de Sentadillas', 'Completa 100 sentadillas en un día', 80, 'challenge', true),
  (702, 'Desafío de Flexiones', 'Completa 50 flexiones en un día', 80, 'challenge', true),
  (703, 'Desafío de Abdominales', 'Completa 200 abdominales en un día', 80, 'challenge', true),
  (704, 'Desafío de Volumen', 'Alcanza 5000kg de volumen en una semana', 120, 'challenge', true),
  (705, 'Desafío de Variedad', 'Realiza 15 ejercicios diferentes en una semana', 90, 'challenge', true);

-- Add special event achievements
INSERT INTO achievements (id, name, condition, points_value, type, repeatable)
VALUES
  (801, 'Entrenamiento Navideño', 'Entrena el 25 de diciembre', 50, 'special', true),
  (802, 'Año Nuevo Activo', 'Entrena el 1 de enero', 50, 'special', true),
  (803, 'Entrenamiento de Cumpleaños', 'Entrena en tu cumpleaños', 50, 'special', true);