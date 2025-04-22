export const imagenes = {
    hipertrofia: require('../assets/images/manuales/10-mandamientos-de-la-hipertrofia.png'),
    frecuencia : require('../assets/images/manuales/como-calcular-tu-frecuencia-cardiaca.png'),
    entrenamiento : require('../assets/images/manuales/manual-de-entrenamiento.png')
}

export const manuals = [
  {
    id: 'hipertrofia',
    title: 'Hipertrofia',
    description: 'Guía completa sobre el crecimiento muscular.',
    image: imagenes.hipertrofia,
  },
  {
    id: 'frecuencia',
    title: 'Frecuencia Cardíaca',
    description: 'Aprende a controlar tu ritmo cardíaco para entrenar mejor.',
    image: imagenes.frecuencia,
  },
  {
    id: 'entrenamiento',
    title: 'Manual de Entrenamiento',
    description: 'Rutinas, progresión y consejos para avanzar con seguridad.',
    image: imagenes.entrenamiento,
  },
];

