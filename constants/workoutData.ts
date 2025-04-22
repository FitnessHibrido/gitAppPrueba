/* export const workoutData = {
  programs: [
    {
      programId: string,
      program: string,
      weeks: [
        {
          number: number,
          title: string,
          description: string,
          difficulty: string,
          days: [
            {
              number: number,
              title: string,
              description: string,
              exercises: [
                {
                  id: number,
                  name: string,
                  sets: number,
                  targetReps: string,
                  restTime: number,
                  notes: string
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
 */
export const workoutData = {
    programs: [
        {
            programId: "zero-to-hybrid",
            program: "De 0 a Híbrido",
            weeks: [
                {
                    number: 1,
                    title: "Adaptación Inicial",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Pogo Jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Sentadiila libre con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Press banca barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 4,
                                    name: "Elevaciones laterales polea - 1 brazo",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 5,
                                    name: "Rack Chins (piernas elevadas)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 6,
                                    name: "Leg extension",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 7,
                                    name: "Extensiones de codo polea alta con barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Carrera 1. Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 8,
                                    name: "Intervalo en cinta o airbike",
                                    sets: 3,
                                    REP: "30''(90%) 2'30''(60%)",
                                    total: "90",
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 9,
                                    name: "Vuelta a la calma",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 10,
                                    name: "Truck jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 11,
                                    name: "Peso muerto barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 12,
                                    name: "Leg curl máquina",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 13,
                                    name: "Elevaciones laterales mancuernas de pie",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 14,
                                    name: "Remo T",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 15,
                                    name: "Press pecho inclinado en multipower",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 16,
                                    name: "Curl biceps mancuernas sentado",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                            number: 5,
                            title: "FullBody III",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 18,
                                    name: "Hops to step",
                                    sets: 3,
                                    targetReps: "30'",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 19,
                                    name: "Hipthrust con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 20,
                                    name: "Prensa de piernas",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 21,
                                    name: "Jalon al pecho neutro ancho",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 22,
                                    name: "Cruce de poleas de pie",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 23,
                                    name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 24,
                                    name: "Pájaros con mancuernas sentado (Superserie 1)",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento",
                                }
                            ]
                        },
                        {
                            number: 6,
                            title: "Carrera 2. Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 25,
                                    name: "Entrenamiento extensivo (zona R1)",
                                    sets: 3,
                                    time: "3'correr al 70% y 7'andar",
                                    total: "30 min"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO",
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 2,
                    title: "Intensificación",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 27,
                                    name: "Pogo Jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 28,
                                    name: "Sentadiila libre con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 29,
                                    name: "Press banca barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 30,
                                    name: "Elevaciones laterales polea - 1 brazo",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 31,
                                    name: "Rack Chins (piernas elevadas)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 32,
                                    name: "Leg extension",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 33,
                                    name: "Extensiones de codo polea alta con barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Carrera 1. Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 34,
                                    name: "Intervalo en cinta o airbike",
                                    sets: 3,
                                    REP: "30''(90%) 2'30''(60%)",
                                    total: "90",
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 35,
                                    name: "Vuelta a la calma",
                                    sets: 3,
                                    targetReps: "",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 36,
                                    name: "Truck jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 37,
                                    name: "Peso muerto barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 38,
                                    name: "Leg curl máquina",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 39,
                                    name: "Elevaciones laterales mancuernas de pie",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 40,
                                    name: "Remo T",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 41,
                                    name: "Press pecho inclinado en multipower",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 42,
                                    name: "Curl biceps mancuernas sentado",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                            number: 5,
                            title: "FullBody III",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 43,
                                    name: "Hops to step",
                                    sets: 3,
                                    targetReps: "30'",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 44,
                                    name: "Hipthrust con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 45,
                                    name: "Prensa de piernas",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 46,
                                    name: "Jalon al pecho neutro ancho",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 47,
                                    name: "Cruce de poleas de pie",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 48,
                                    name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 49,
                                    name: "Pájaros con mancuernas sentado (Superserie 1)",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                }                               
                            ]
                        },
                        {
                            number: 6,
                            title: "Carrera 2. Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 50,
                                    name: "Entrenamiento extensivo (zona R1)",
                                    sets: 3,
                                    time: "3'correr al 70% y 7'andar",
                                    total: "30 min"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO",
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 3,
                    title: "Adaptación 2",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 51,
                                    name: "Pogo Jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 52,
                                    name: "Sentadiila libre con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 53,
                                    name: "Press banca barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 54,
                                    name: "Elevaciones laterales polea - 1 brazo",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 55,
                                    name: "Rack Chins (piernas elevadas)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 56,
                                    name: "Leg extension",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 57,
                                    name: "Extensiones de codo polea alta con barra",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Carrera 1. Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 58,
                                    name: "Intervalo en cinta o airbike",
                                    sets: 3,
                                    REP: "30''(90%) 2'30''(60%)",
                                    total: "90",
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 59,
                                    name: "Vuelta a la calma",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 60,
                                    name: "Truck jumps",
                                    sets: 3,
                                    targetReps: "8",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 61,
                                    name: "Peso muerto barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 62,
                                    name: "Leg curl máquina",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 63,
                                    name: "Elevaciones laterales mancuernas de pie",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 64,
                                    name: "Remo T",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 65,
                                    name: "Press pecho inclinado en multipower",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 66,
                                    name: "Curl biceps mancuernas sentado",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                            number: 5,
                            title: "FullBody III",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 67,
                                    name: "Hops to step",
                                    sets: 3,
                                    targetReps: "30'",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 68,
                                    name: "Hipthrust con barra",
                                    sets: 3,
                                    targetReps: "8-10",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 69,
                                    name: "Prensa de piernas",
                                    sets: 3,
                                    targetReps: "15-20",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 70,
                                    name: "Jalon al pecho neutro ancho",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 71,
                                    name: "Cruce de poleas de pie",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 72,
                                    name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                    sets: 4,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                },
                                {
                                    id: 73,
                                    name: "Pájaros con mancuernas sentado (Superserie 1)",
                                    sets: 3,
                                    targetReps: "20-25",
                                    restTime: 45,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 6,
                            title: "Carrera 2. Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 74,
                                    name: "Entrenamiento extensivo (zona R1)",
                                    sets: 3,
                                    time: "3'correr al 70% y 7'andar",
                                    total: "30 min"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO",
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 4,
                    title: "Intensificación",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Sentadilla con Peso Corporal",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "Press de Hombros"
                                }
                            ]
                        },
                        {
                          number: 5,
                          title: "FullBody III",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 67,
                                  name: "Hops to step",
                                  sets: 3,
                                  targetReps: "30'",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 68,
                                  name: "Hipthrust con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 69,
                                  name: "Prensa de piernas",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 70,
                                  name: "Jalon al pecho neutro ancho",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 71,
                                  name: "Cruce de poleas de pie",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 72,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 4,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 73,
                                  name: "Pájaros con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              }
                          ]
                      },
                        {
                            number: 6,
                            title: "Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
        
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 5,
                    title: "Adaptación 3",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Sentadilla con Peso Corporal",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                          number: 5,
                          title: "FullBody III",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 67,
                                  name: "Hops to step",
                                  sets: 3,
                                  targetReps: "30'",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 68,
                                  name: "Hipthrust con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 69,
                                  name: "Prensa de piernas",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 70,
                                  name: "Jalon al pecho neutro ancho",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 71,
                                  name: "Cruce de poleas de pie",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 72,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 4,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 73,
                                  name: "Pájaros con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              }
                          ]
                      },
                        {
                            number: 6,
                            title: "Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "Press de Hombros"
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 6,
                    title: "Intensificación Y Acumulación",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Sentadilla con Peso Corporal",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                          number: 5,
                          title: "FullBody III",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 67,
                                  name: "Hops to step",
                                  sets: 3,
                                  targetReps: "30'",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 68,
                                  name: "Hipthrust con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 69,
                                  name: "Prensa de piernas",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 70,
                                  name: "Jalon al pecho neutro ancho",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 71,
                                  name: "Cruce de poleas de pie",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 72,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 4,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 73,
                                  name: "Pájaros con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              }
                          ]
                      },
                        {
                            number: 6,
                            title: "Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 7,
                    title: "Adaptación 4",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Sentadilla con Peso Corporal",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        },
                        {
                          number: 5,
                          title: "FullBody III",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 67,
                                  name: "Hops to step",
                                  sets: 3,
                                  targetReps: "30'",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 68,
                                  name: "Hipthrust con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 69,
                                  name: "Prensa de piernas",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 70,
                                  name: "Jalon al pecho neutro ancho",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 71,
                                  name: "Cruce de poleas de pie",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 72,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 4,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 73,
                                  name: "Pájaros con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              }
                          ]
                      },
                        {
                            number: 6,
                            title: "Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 8,
                    title: "Consolidación",
                    description: "Introducción a los movimientos básicos",
                    difficulty: "Principiante",
                    days: [
                        {
                            number: 1,
                            title: "FullBody I",
                            description: "Enfoque en movimientos compuestos",
                            exercises: [
                                {
                                    id: 1,
                                    name: "Sentadilla con Peso Corporal",
                                    sets: 3,
                                    targetReps: "12-15",
                                    restTime: 90,
                                    notes: "Mantén la espalda recta"
                                },
                                {
                                    id: 2,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                },
                                {
                                    id: 3,
                                    name: "Flexiones Modificadas",
                                    sets: 3,
                                    targetReps: "8-12",
                                    restTime: 90,
                                    notes: "Rodillas apoyadas"
                                }
                            ]
                        },
                        {
                            number: 2,
                            title: "Hiit Largo",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 3,
                            title: "FullBody II",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 4,
                            title: "Descanso",
        
                            exercises: [
                                {
                                    name: "DESCANSO",
                                }
                            ]
                        },
                        {
                          number: 5,
                          title: "FullBody III",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 67,
                                  name: "Hops to step",
                                  sets: 3,
                                  targetReps: "30'",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 68,
                                  name: "Hipthrust con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 69,
                                  name: "Prensa de piernas",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 70,
                                  name: "Jalon al pecho neutro ancho",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 71,
                                  name: "Cruce de poleas de pie",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 72,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 4,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Controla el movimiento"
                              },
                              {
                                  id: 73,
                                  name: "Pájaros con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 45,
                                  notes: "Controla el movimiento"
                              }
                          ]
                      },
                        {
                            number: 6,
                            title: "Continuo Variable",
                            description: "Enfoque en empujes y tracciones",
                            exercises: [
                                {
                                    id: 3,
                                    name: "Press de Hombros",
                                    sets: 3,
                                    targetReps: "10-12",
                                    restTime: 90,
                                    notes: "Controla el movimiento"
                                }
                            ]
                        },
                        {
                            number: 7,
                            title: "Descanso",
                            exercises: [
                                {
                                    name: "DESCANSO"
                                }
        
                            ]
                        }
                    ]
                }
            ]
        },
        {
            programId: "hybrid-trophy",
            program: "Hybrid Trophy",
            weeks: [
              {
                  number: 1,
                  title: "Adaptación Inicial",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                      {
                          number: 1,
                          title: "Pierna (Básicos)",
                          description: "Enfoque en la fuerza y resistencia de las piernas",
                          exercises: [
                              {
                                  id: 1,
                                  name: "Crunch abdominal",
                                  sets: 3,
                                  targetReps: "20-25",
                                  restTime: 90,
                                  notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                              },
                              {
                                  id: 2,
                                  name: "Pogo jumps",
                                  sets: 3,
                                  targetReps: "8",
                                  restTime: 180,
                                  notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                              },
                              {
                                  id: 3,
                                  name: "Peso muerto tradicional",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 180,
                                  notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                              },
                              {
                                  id: 4,
                                  name: "Sentadilla búlgara",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 180,
                                  notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                              },
                              {
                                  id: 5,
                                  name: "Lunges jumps peso corporal",
                                  sets: 3,
                                  targetReps: "8 por lado",
                                  restTime: 180,
                                  notes: "Rodillas apoyadas"
                              },
                              {
                                  id: 6,
                                  name: "Leg extension",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 90,
                                  notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                              },
                              {
                                  id: 7,
                                  name: "Elevación de talón en multipower (/TABATA)",
                                  sets: 4,
                                  targetReps: "20 segundos",
                                  restTime: 10,
                                  notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                              }
                          ]
                      },
                      {
                          number: 2,
                          title: "FullBody",
                          description: "Enfoque en empujes y tracciones",
                          exercises: [
                              {
                                  id: 8,
                                  name: "Pogo jumps",
                                  sets: 3,
                                  targetReps: "30 segundos",
                                  restTime: 180,
                                  notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                              },
                              {
                                  id: 9,
                                  name: "Sentadilla libre con barra",
                                  sets: 3,
                                  targetReps: "8-10",
                                  restTime: 180,
                                  notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                              },
                              {
                                id: 10,
                                name: "Leg curl máquina",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 180,
                                notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                            },
                            {
                                id: 11,
                                name: "Remo gironda unilateral en polea",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 180,
                                notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                            },
                            {
                              id: 12,
                              name: "Press pecho inclinado en multipower",
                              sets: 4,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                          },
                          {
                              id: 13,
                              name: "Elevaciones laterales con mancuernas de pie",
                              sets: 3,
                              targetReps: "20-25",
                              restTime: 90,
                              notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                          },
                          {
                            id: 14,
                            name: "Extensión de codo unilateral en polea",
                            sets: 3,
                            targetReps: "10-12",
                            restTime: 90,
                            notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                        },
        
                          ]
                      },
                      {
                        number: 3,
                        title: "Descanso",
                        exercises: [
                            {
                                name: "DESCANSO"
                            }
                        ]
                      },
                      {
                          number: 4,
                          title: "Carrera Extensiva",
                          description: "Carrera continua a ritmo medio-alto",
                          exercises: [
                              {
                                  id: 15,
                                  name: "Entrenamiento extensivo (zona R1)",
                                  sets: 1,
                                  targetReps: "30 minutos al 70%",
                                  restTime: "",
                                  notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                              }
                          ]
                      },               
                      {
                          number: 5,
                          title: "Torso + (HIIT opcional)",
                          description: "Enfoque en el tronco superior y la parte posterior",
                          exercises: [
                              {
                                  id: 16,
                                  name: "Rueda abdominal",
                                  sets: 2,
                                  targetReps: "10-12",
                                  restTime: 90,
                                  notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                              },
                              {
                                  id: 17,
                                  name: "Press banca plano",
                                  sets: 3,
                                  targetReps: "10-12",
                                  restTime: 180,
                                  notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                              },
                              {
                                  id: 18,
                                  name: "Cruce de poleas de pie",
                                  sets: 2,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                              },
                              {
                                  id: 19,
                                  name: "Jalón al pecho",
                                  sets: 3,
                                  targetReps: "10-12",
                                  restTime: 90,
                                  notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                              },
                              {
                                  id: 20,
                                  name: "Remo unilateral en banco con mancuerna",
                                  sets: 2,
                                  targetReps: "10-12",
                                  restTime: 180,
                                  notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                              },
                              {
                                  id: 21,
                                  name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                              },
                              {
                                  id: 22,
                                  name: "Pájaros con mancuernas (superserie con el anterior)",
                                  sets: 3,
                                  targetReps: "15-20",
                                  restTime: 90,
                                  notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                              },
                              {
                                  id: 23,
                                  name: "Curl de bíceps araña",
                                  sets: 3,
                                  targetReps: "12-15",
                                  restTime: 90,
                                  notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                              },
                              {
                                id: 24,
                                name: "HIIT corto (opcional)",
                                sets: 1,
                                targetReps: "8 de 20 segundos a RPE 9/10",
                                restTime: "",
                                notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                            },
                            {
                                id: 25,
                                name: "Vuelta a la calma (opcional)",
                                sets: 1,
                                targetReps: "12-15",
                                restTime: "",
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            }
                          ]
                      },
                      {
                        number: 6,
                        title: "Fullbody II (Opcional)",
                        description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                        exercises: [
                          {
                            id: 26,
                            name: "CMJ jumps",
                            sets: 3,
                            targetReps: "6",
                            restTime: 180,
                            notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                        },
                        {
                            id: 27,
                            name: "Prensa de piernas",
                            sets: 3,
                            targetReps: "8-10",
                            restTime: 180,
                            notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                        },
                        {
                          id: 28,
                          name: "Elevaciones laterales en polea baja a una mano",
                          sets: 3,
                          targetReps: "12-15",
                          restTime: 90,
                          notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                      },
                      {
                          id: 29,
                          name: "Press banca mancuernas",
                          sets: 3,
                          targetReps: "15-20",
                          restTime: 90,
                          notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                      },
                      {
                          id: 30,
                          name: "Remo 90º con barra",
                          sets: 2,
                          targetReps: "12-15",
                          restTime: 180,
                          notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                      },
                      {
                          id: 31,
                          name: "Patadas laterales en polea",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                      },
                      ]
                    },
                    {
                      number: 7,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    }              
                  ]
              },
              {
                  number: 2,
                  title: "Intensificación",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 70%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 1,
                              targetReps: "8 de 20 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 3,
                  title: "Adaptación 2",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 1,
                              targetReps: "8 de 20 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 4,
                  title: "Intensificación",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 1,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 5,
                  title: "Adaptación 3",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 1,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 6,
                  title: "Intensificación Y Acumulación",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 7,
                  title: "Adaptación 4",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 8,
                  title: "Consolidación",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 9,
                  title: "Día 9",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                            },
                            {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },
      
                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 10,
                  title: "Día 10",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },

                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                  number: 11,
                  title: "Día 11",
                  description: "Introducción a los movimientos básicos",
                  difficulty: "Intermedio",
                  days: [
                    {
                        number: 1,
                        title: "Pierna (Básicos)",
                        description: "Enfoque en la fuerza y resistencia de las piernas",
                        exercises: [
                            {
                                id: 1,
                                name: "Crunch abdominal",
                                sets: 3,
                                targetReps: "20-25",
                                restTime: 90,
                                notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                            },
                            {
                                id: 2,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "8",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 3,
                                name: "Peso muerto tradicional",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                            },
                            {
                                id: 4,
                                name: "Sentadilla búlgara",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                            },
                            {
                                id: 5,
                                name: "Lunges jumps peso corporal",
                                sets: 3,
                                targetReps: "8 por lado",
                                restTime: 180,
                                notes: "Rodillas apoyadas"
                            },
                            {
                                id: 6,
                                name: "Leg extension",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 90,
                                notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                            },
                            {
                                id: 7,
                                name: "Elevación de talón en multipower (/TABATA)",
                                sets: 4,
                                targetReps: "20 segundos",
                                restTime: 10,
                                notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                            }
                        ]
                    },
                    {
                        number: 2,
                        title: "FullBody",
                        description: "Enfoque en empujes y tracciones",
                        exercises: [
                            {
                                id: 8,
                                name: "Pogo jumps",
                                sets: 3,
                                targetReps: "30 segundos",
                                restTime: 180,
                                notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                            },
                            {
                                id: 9,
                                name: "Sentadilla libre con barra",
                                sets: 3,
                                targetReps: "8-10",
                                restTime: 180,
                                notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                            },
                            {
                              id: 10,
                              name: "Leg curl máquina",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 180,
                              notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                          },
                          {
                              id: 11,
                              name: "Remo gironda unilateral en polea",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 180,
                              notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                          },
                          {
                            id: 12,
                            name: "Press pecho inclinado en multipower",
                            sets: 2,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                        },
                        {
                            id: 13,
                            name: "Elevaciones laterales con mancuernas de pie",
                            sets: 3,
                            targetReps: "20-25",
                            restTime: 90,
                            notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                        },
                        {
                          id: 14,
                          name: "Extensión de codo unilateral en polea",
                          sets: 3,
                          targetReps: "10-12",
                          restTime: 90,
                          notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                      },

                        ]
                    },
                    {
                      number: 3,
                      title: "Descanso",
                      exercises: [
                          {
                              name: "DESCANSO"
                          }
                      ]
                    },
                    {
                        number: 4,
                        title: "Carrera Extensiva",
                        description: "Carrera continua a ritmo medio-alto",
                        exercises: [
                            {
                                id: 15,
                                name: "Entrenamiento extensivo (zona R1)",
                                sets: 1,
                                targetReps: "30 minutos al 75%",
                                restTime: "",
                                notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                            }
                        ]
                    },               
                    {
                        number: 5,
                        title: "Torso + (HIIT opcional)",
                        description: "Enfoque en el tronco superior y la parte posterior",
                        exercises: [
                            {
                                id: 16,
                                name: "Rueda abdominal",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                            },
                            {
                                id: 17,
                                name: "Press banca plano",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                            },
                            {
                                id: 18,
                                name: "Cruce de poleas de pie",
                                sets: 2,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                            },
                            {
                                id: 19,
                                name: "Jalón al pecho",
                                sets: 3,
                                targetReps: "10-12",
                                restTime: 90,
                                notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                            },
                            {
                                id: 20,
                                name: "Remo unilateral en banco con mancuerna",
                                sets: 2,
                                targetReps: "10-12",
                                restTime: 180,
                                notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                            },
                            {
                                id: 21,
                                name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                            },
                            {
                                id: 22,
                                name: "Pájaros con mancuernas (superserie con el anterior)",
                                sets: 3,
                                targetReps: "15-20",
                                restTime: 90,
                                notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                            },
                            {
                                id: 23,
                                name: "Curl de bíceps araña",
                                sets: 3,
                                targetReps: "12-15",
                                restTime: 90,
                                notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                            },
                            {
                              id: 24,
                              name: "HIIT corto (opcional)",
                              sets: 2,
                              targetReps: "8 de 30 segundos a RPE 9/10",
                              restTime: "",
                              notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                          },
                          {
                              id: 25,
                              name: "Vuelta a la calma (opcional)",
                              sets: 1,
                              targetReps: "12-15",
                              restTime: "",
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          }
                        ]
                    },
                    {
                      number: 6,
                      title: "Fullbody II (Opcional)",
                      description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                      exercises: [
                        {
                          id: 26,
                          name: "CMJ jumps",
                          sets: 3,
                          targetReps: "6",
                          restTime: 180,
                          notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                      },
                      {
                          id: 27,
                          name: "Prensa de piernas",
                          sets: 2,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                      },
                      {
                        id: 28,
                        name: "Elevaciones laterales en polea baja a una mano",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                    },
                    {
                        id: 29,
                        name: "Press banca mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                    },
                    {
                        id: 30,
                        name: "Remo 90º con barra",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                    },
                    {
                        id: 31,
                        name: "Patadas laterales en polea",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                    },
                    ]
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  }              
                ]
              },
              {
                number: 12,
                title: "Día 12",
                description: "Introducción a los movimientos básicos",
                difficulty: "Intermedio",
                days: [
                  {
                      number: 1,
                      title: "Pierna (Básicos)",
                      description: "Enfoque en la fuerza y resistencia de las piernas",
                      exercises: [
                          {
                              id: 1,
                              name: "Crunch abdominal",
                              sets: 3,
                              targetReps: "20-25",
                              restTime: 90,
                              notes: "Acostado boca arriba, flexiona las rodillas y apoya los pies en el suelo. Eleva el torso contrayendo el abdomen y baja controlado sin apoyar completamente la espalda."
                          },
                          {
                              id: 2,
                              name: "Pogo jumps",
                              sets: 3,
                              targetReps: "8",
                              restTime: 180,
                              notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                          },
                          {
                              id: 3,
                              name: "Peso muerto tradicional",
                              sets: 3,
                              targetReps: "8-10",
                              restTime: 180,
                              notes: "Coloca la barra frente a ti, pies a la altura de las caderas. Flexiona caderas y rodillas para agarrarla con un agarre firme. Mantén la espalda recta y extiende caderas y rodillas hasta ponerte de pie. Baja controlado hasta la posición inicial."
                          },
                          {
                              id: 4,
                              name: "Sentadilla búlgara",
                              sets: 3,
                              targetReps: "8-10",
                              restTime: 180,
                              notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial."
                          },
                          {
                              id: 5,
                              name: "Lunges jumps peso corporal",
                              sets: 3,
                              targetReps: "8 por lado",
                              restTime: 180,
                              notes: "Rodillas apoyadas"
                          },
                          {
                              id: 6,
                              name: "Leg extension",
                              sets: 3,
                              targetReps: "8-10",
                              restTime: 90,
                              notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial."
                          },
                          {
                              id: 7,
                              name: "Elevación de talón en multipower (/TABATA)",
                              sets: 4,
                              targetReps: "20 segundos",
                              restTime: 10,
                              notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos."
                          }
                      ]
                  },
                  {
                      number: 2,
                      title: "FullBody",
                      description: "Enfoque en empujes y tracciones",
                      exercises: [
                          {
                              id: 8,
                              name: "Pogo jumps",
                              sets: 3,
                              targetReps: "30 segundos",
                              restTime: 180,
                              notes: "Salta de forma explosiva solo con los tobillos, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y velocidad del rebote."
                          },
                          {
                              id: 9,
                              name: "Sentadilla libre con barra",
                              sets: 3,
                              targetReps: "8-10",
                              restTime: 180,
                              notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial."
                          },
                          {
                            id: 10,
                            name: "Leg curl máquina",
                            sets: 2,
                            targetReps: "15-20",
                            restTime: 180,
                            notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial."
                        },
                        {
                            id: 11,
                            name: "Remo gironda unilateral en polea",
                            sets: 3,
                            targetReps: "12-15",
                            restTime: 180,
                            notes: "Con agarre neutro, tira de la polea hacia la cintura manteniendo el torso firme. Aprieta la espalda y controla el regreso."
                        },
                        {
                          id: 12,
                          name: "Press pecho inclinado en multipower",
                          sets: 2,
                          targetReps: "12-15",
                          restTime: 180,
                          notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros."
                      },
                      {
                          id: 13,
                          name: "Elevaciones laterales con mancuernas de pie",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo."
                      },
                      {
                        id: 14,
                        name: "Extensión de codo unilateral en polea",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el agarre con una mano, mantén el codo fijo y cerca del cuerpo. Extiende el brazo completamente y baja controlado a la posición inicial."
                    },

                      ]
                  },
                  {
                    number: 3,
                    title: "Descanso",
                    exercises: [
                        {
                            name: "DESCANSO"
                        }
                    ]
                  },
                  {
                      number: 4,
                      title: "Carrera Extensiva",
                      description: "Carrera continua a ritmo medio-alto",
                      exercises: [
                          {
                              id: 15,
                              name: "Entrenamiento extensivo (zona R1)",
                              sets: 1,
                              targetReps: "30 minutos al 75%",
                              restTime: "",
                              notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada."
                          }
                      ]
                  },               
                  {
                      number: 5,
                      title: "Torso + (HIIT opcional)",
                      description: "Enfoque en el tronco superior y la parte posterior",
                      exercises: [
                          {
                              id: 16,
                              name: "Rueda abdominal",
                              sets: 2,
                              targetReps: "10-12",
                              restTime: 90,
                              notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda."
                          },
                          {
                              id: 17,
                              name: "Press banca plano",
                              sets: 3,
                              targetReps: "10-12",
                              restTime: 180,
                              notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros."
                          },
                          {
                              id: 18,
                              name: "Cruce de poleas de pie",
                              sets: 2,
                              targetReps: "15-20",
                              restTime: 90,
                              notes: "Sujeta las poleas y junta los brazos al frente manteniendo los codos semiflexionados. Regresa lentamente controlando el movimiento."
                          },
                          {
                              id: 19,
                              name: "Jalón al pecho",
                              sets: 3,
                              targetReps: "10-12",
                              restTime: 90,
                              notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial."
                          },
                          {
                              id: 20,
                              name: "Remo unilateral en banco con mancuerna",
                              sets: 2,
                              targetReps: "10-12",
                              restTime: 180,
                              notes: "Apoya una rodilla en un banco y tira de la mancuerna hacia el torso. Mantén el codo pegado al cuerpo y baja lentamente."
                          },
                          {
                              id: 21,
                              name: "Elevaciones laterales con mancuernas sentado (Superserie 1)",
                              sets: 3,
                              targetReps: "15-20",
                              restTime: 90,
                              notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión."
                          },
                          {
                              id: 22,
                              name: "Pájaros con mancuernas (superserie con el anterior)",
                              sets: 3,
                              targetReps: "15-20",
                              restTime: 90,
                              notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                          },
                          {
                              id: 23,
                              name: "Curl de bíceps araña",
                              sets: 3,
                              targetReps: "12-15",
                              restTime: 90,
                              notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                          },
                          {
                            id: 24,
                            name: "HIIT corto (opcional)",
                            sets: 2,
                            targetReps: "8 de 30 segundos a RPE 9/10",
                            restTime: "",
                            notes: "1 minuto y 30 segundos al trote. 3 minutos andando entre series",
                        },
                        {
                            id: 25,
                            name: "Vuelta a la calma (opcional)",
                            sets: 1,
                            targetReps: "12-15",
                            restTime: "",
                            notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps."
                        }
                      ]
                  },
                  {
                    number: 6,
                    title: "Fullbody II (Opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 26,
                        name: "CMJ jumps",
                        sets: 3,
                        targetReps: "6",
                        restTime: 180,
                        notes: "Desde posición erguida, flexiona rápidamente las rodillas y caderas en un contramovimiento, luego salta explosivamente lo más alto posible. Aterriza suavemente y repite manteniendo la técnica. Mejora la potencia y la explosividad."
                    },
                    {
                        id: 27,
                        name: "Prensa de piernas",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado."
                    },
                    {
                      id: 28,
                      name: "Elevaciones laterales en polea baja a una mano",
                      sets: 3,
                      targetReps: "20-25",
                      restTime: 90,
                      notes: "Sujeta la polea baja con un brazo y eleva lateralmente hasta la altura del hombro. Controla la bajada sin perder tensión."
                  },
                  {
                      id: 29,
                      name: "Press banca mancuernas",
                      sets: 2,
                      targetReps: "15-20",
                      restTime: 90,
                      notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas."
                  },
                  {
                      id: 30,
                      name: "Remo 90º con barra",
                      sets: 2,
                      targetReps: "12-15",
                      restTime: 180,
                      notes: "Inclina el torso a 90°, sujeta la barra con agarre prono y tira hacia el abdomen. Aprieta los omóplatos y baja de manera controlada."
                  },
                  {
                      id: 31,
                      name: "Patadas laterales en polea",
                      sets: 3,
                      targetReps: "20-25",
                      restTime: 90,
                      notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial."
                  },
                  ]
                },
                {
                  number: 7,
                  title: "Descanso",
                  exercises: [
                      {
                          name: "DESCANSO"
                      }
                  ]
                }              
              ]
            },
              
            ]
        },
        {
            programId: "fat-burner",
            program: "Fat Burner",
            weeks: [
              {
                number: 1,
                title: "Adaptación Inicial",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 1,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 3,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 4,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 6,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 7,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 8,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 9,
                        name: "Sprint interval trainning",
                        sets: 1,
                        targetReps: "6 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 2/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 10,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 12,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 13,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 14,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 15,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 16,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 17,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 18,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 19,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 70%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 20,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 21,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 22,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 23,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 24,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 25,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 26,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 27,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle una vuelta a este circuito: Correr 10 minutos en la cinta al 65%. Luego hacer 2km en el remo. Seguir con 3 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 28,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 2,
                title: "Intensificación",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 29,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 30,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 31,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 32,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 33,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 34,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 35,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 36,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 37,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "6 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 2/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 38,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 39,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 40,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 41,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 42,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 42,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 43,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 44,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 45,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 70%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 46,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 47,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 48,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 49,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 50,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 51,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 52,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 53,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle una vuelta a este circuito: Correr 10 minutos en la cinta al 70%. Luego hacer 2km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 54,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 3,
                title: "Adaptación 2",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 55,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 56,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 57,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 58,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 59,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 60,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 61,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 62,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 63,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "6 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 64,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 65,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 66,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 67,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 68,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 69,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 70,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 71,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 72,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 73,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 74,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 75,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 76,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 77,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 78,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 79,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 80,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle una vuelta a este circuito: Correr 10 minutos en la cinta al 70%. Luego hacer 2km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 81,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 4,
                title: "Intensificación",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 82,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 83,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 84,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 85,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 86,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 87,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 88,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 89,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 90,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "7 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 91,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 92,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 93,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 94,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 95,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 96,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 97,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 98,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 99,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 100,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 101,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 102,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 103,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 104,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 105,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 106,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 107,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle una vuelta a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 108,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 5,
                title: "Adaptación 3",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 82,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 83,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 84,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 85,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 86,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 87,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 88,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 89,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 90,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "7 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 91,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 92,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 93,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 94,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 95,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 96,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 97,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 98,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 99,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 100,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 101,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 102,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 103,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 104,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 105,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 106,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 107,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle una vuelta a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 108,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 6,
                title: "Intensificación y acumulación",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 109,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 110,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 111,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 112,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 113,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 114,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 115,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 116,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 117,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "8 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 118,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 119,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 120,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 121,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 122,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 123,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 124,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 125,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 126,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 127,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 128,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 129,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 130,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 131,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 132,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 133,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 134,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 135,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 7,
                title: "Intensificación y acumulación",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 136,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 137,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 138,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 139,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 140,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 141,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 142,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 143,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 144,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "8 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 145,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 146,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 147,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 148,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 149,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 150,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 151,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 152,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 153,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 154,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 155,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 156,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 157,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 158,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 159,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 160,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 161,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 162,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 8,
                title: "Adaptación 4",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 163,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 164,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 165,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 166,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 167,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 168,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 169,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 170,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 171,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "8 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 172,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 173,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 174,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 175,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 176,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 177,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 178,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 179,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 180,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 181,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 182,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 183,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 184,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 185,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 186,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 187,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 188,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 189,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 9,
                title: "Semana 9",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 190,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 191,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 192,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 193,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 194,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 195,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 196,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 197,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 198,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "8 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 199,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 200,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 201,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 202,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 203,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 204,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 205,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 206,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 207,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "40 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 208,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 209,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 210,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 211,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 212,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 213,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 214,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 215,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 216,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 10,
                title: "Semana 10",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 217,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 218,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 219,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 220,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 221,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 222,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 223,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 224,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 225,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "8 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 226,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 227,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 228,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 229,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 230,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 231,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 232,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 233,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 234,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 235,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 236,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 237,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 238,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 239,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 240,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 241,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 242,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 243,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 11,
                title: "Semana 11",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 244,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 245,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 246,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 247,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 248,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 249,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 250,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 251,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 252,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "10 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 253,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 254,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 255,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 256,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 257,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 258,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 259,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 260,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 261,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "35 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 262,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 263,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 264,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 265,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 266,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 267,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 268,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 269,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 270,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
              {
                number: 12,
                title: "Semana 12",
                difficulty: "Intermedio",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 271,
                        name: "Elevaciones de prensa tumbado",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acuéstate en la máquina de prensa con los pies en la plataforma. Empuja la carga extendiendo las piernas sin bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 272,
                        name: "Press banca plano",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 273,
                        name: "Press inclinado con mancuernas",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 274,
                        name: "Jalón al pecho unilateral",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta el mango de la polea alta con una mano, siéntate y bloquea el muslo bajo el soporte. Tira del mango hacia el pecho contrayendo la espalda y vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 275,
                        name: "Seal row con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Acuéstate en un banco plano elevado y rema con las mancuernas hasta el torso. Aprieta la espalda en la parte superior y baja controladamente.",
                      },
                      {
                        id: 276,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 277,
                        name: "Pájaros con mancuernas (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Inclina el torso hacia adelante y abre los brazos lateralmente con codos semiflexionados. Contrae los omóplatos y regresa lentamente.",
                      },
                      {
                        id: 278,
                        name: "Bayesian curl",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra un mango en polea baja y da un paso adelante con el torso ligeramente inclinado. Mantén el codo atrás y flexiona el brazo llevando el agarre hacia el hombro. Baja controlado y repite. Ideal para enfatizar la tensión en el bíceps en todo el recorrido.",
                      }
                    ]
                  },
                  {
                    number: 2,
                    title: "Cardio I SIT",
                    description: "Entrenamiento de intervalos de alta intensidad para mejorar la resistencia cardiovascular",
                    exercises: [
                      {
                        id: 279,
                        name: "Sprint interval trainning",  
                        sets: 1,
                        targetReps: "10 sets de 20 segundos a máxima velocidad",
                        restTime: "70 segundos a RPE 3/10",
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 280,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "Realiza un trote suave o caminata para recuperar el ritmo cardíaco y la respiración.",
                      },
                    ],
                  },
                  {
                    number: 3,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 281,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                      {
                        id: 282,
                        name: "Pogo jumps to step",
                        sets: 3,
                        targetReps: "30s",
                        restTime: 180,
                        notes: "Salta explosivamente solo con los tobillos sobre un step o caja baja, manteniendo las rodillas casi extendidas. Aterriza suavemente y repite sin pausa, enfocándote en la reactividad y control del rebote.",
                      },
                      {
                        id: 283,
                        name: "Peso muerto rumano",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono, pies a la altura de las caderas. Mantén la espalda recta y desciende la barra deslizando las caderas hacia atrás hasta sentir el estiramiento en los isquios. Vuelve a la posición inicial contrayendo los glúteos.",
                      },
                      {
                          id: 284,
                          name: "Sentadilla búlgara",
                          sets: 3,
                          targetReps: "8-10",
                          restTime: 180,
                          notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                          id: 285,
                          name: "Saltos al cajón",
                          sets: 3,
                          targetReps: "8",
                          restTime: 180,
                          notes: "SDesde una posición atlética, flexiona las rodillas y salta explosivamente sobre un cajón. Aterriza suavemente con ambos pies y extiende las caderas para estabilizar. Baja controlado y repite.",
                      },
                      {
                          id: 286,
                          name: "Leg extension unilateral",
                          sets: 3,
                          targetReps: "20-25",
                          restTime: 90,
                          notes: "Siéntate en la máquina con la espalda apoyada y un pie bajo el rodillo. Extiende la pierna completamente y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                          id: 287,
                          name: "Elevaciones de talones en prensa (TABATA)",
                          sets: 8,
                          targetReps: "20 segundos",
                          restTime: 10,
                          notes: "Coloca la punta de los pies en la parte baja de la plataforma con las rodillas extendidas. Eleva los talones al máximo contrayendo los gemelos y baja controlado. 20 segundos de elevaciones rápidas, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Cardio II Extensivo", 
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 288,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "35 minutos al 75%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Fullbody (+ Cardio III Fat Burner opcional)",
                    description: "Entrenamiento de cuerpo completo con énfasis en la quema de grasa",
                    exercises: [
                      {
                        id: 289,
                        name: "Drop jump",
                        sets: 3,
                        targetReps: "3",
                        restTime: 180,
                        notes: "Colócate sobre un cajón o plataforma, da un paso al frente y deja que tu cuerpo caiga de forma natural. Al tocar el suelo, realiza un salto explosivo inmediato manteniendo una rápida reacción y aterriza con control. Mejora la potencia y la reactividad del tren inferior.",
                      },
                      {
                        id: 290,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 291,
                        name: "Leg curl unilateral",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Ajusta la máquina y coloca un pie bajo el rodillo. Flexiona la rodilla llevando el talón hacia los glúteos y baja controlado hasta la posición inicial. Repite con la otra pierna.",
                      },
                      {
                        id: 292,
                        name: "Remo con mancuerna unilateral",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite.",
                      },
                      {
                        id: 293,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 294,
                        name: "Elevaciones laterales con mancuernas de pie",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 90,
                        notes: "De pie, eleva las mancuernas hasta la altura de los hombros. Controla la bajada sin balancear el cuerpo.",
                      },
                      {
                        id: 295,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 296,
                        name: "Cardio III Fat Burner (opcional)",
                        sets: 1,
                        targetReps: "Circuito",
                        restTime: "",
                        notes: "Debes darle 2 vueltas a este circuito: Correr 10 minutos en la cinta al 75%. Luego hacer 2,5km en el remo. Seguir con 4 repeticiones de 1 minuto fuerte, 2 minutos suave en la bici",
                      },
                      {
                        id: 297,
                        name: "Vuelta a la calma: Bici/Airbike",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Descanso",
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                ],
              },
            ],
        },
        {
            programId: "hybrid-xxl",
            program: "Híbrido XXL",
            weeks: [
              {
                number: 1,
                title: "Adaptación Inicial",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 6,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 2,
                title: "Intensificación",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "30 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 6,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 3,
                title: "Adaptación 2",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "35 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 6,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 4,
                title: "Intensificación",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "35 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 7,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 5,
                title: "Adaptación 3",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "35 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 7,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 6,
                title: "Intensificación y acumulación",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "40 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 7,
                title: "Intensificación y acumulación",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "40 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ]
              },
              {
                number: 8,
                title: "Adaptación 4",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 2,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "40 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 3,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 3,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 2,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "20 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 2,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 3,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 9,
                title: "Semana 9",
                difficulty: "Avanzado",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 10,
                title: "Semana 10",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 11,
                title: "Semana 11",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 12,
                title: "Semana 12",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 13,
                title: "Semana 13",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 14,
                title: "Semana 14",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 15,
                title: "Semana 15",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
              {
                number: 16,
                title: "Semana 16",
                difficulty: "Avanzado",
                description: "Introducción a los movimientos básicos",
                days: [
                  {
                    number: 1,
                    title: "Pierna",
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 1,
                        name: "Sentadilla libre con barra",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "Coloca la barra sobre la parte alta de la espalda, pies a la altura de los hombros. Desciende flexionando caderas y rodillas hasta que los muslos estén paralelos al suelo. Empuja con los talones para volver a la posición inicial.",
                      },
                      {
                        id: 2,
                        name: "Sentadilla búlgara",
                        sets: 3,
                        targetReps: "(2-4)8-10",
                        restTime: 180,
                        notes: "Coloca un pie en un banco detrás de ti y el otro en el suelo. Flexiona la rodilla delantera hasta que el muslo quede paralelo al suelo. Empuja con el talón para volver a la posición inicial.",
                      },
                      {
                        id: 3,
                        name: "Leg curl máquina",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 4,
                        name: "Leg extension",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 5,
                        name: "Elevación de talón en multipower (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Coloca la barra sobre los trapecios y ubica los pies a la anchura de los hombros. Eleva los talones contrayendo los gemelos y baja controlado hasta apoyar nuevamente. 20 segundos de trabajo, 10 segundos de descanso, repitiendo durante 4 minutos.",
                      },
                      {
                        id: 6,
                        name: "Press militar con mancuernas sentado (/TABATA)",
                        sets: 4,
                        targetReps: "20 segundos",
                        restTime: "",
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros. 4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                      {
                        id: 7,
                        name: "Rueda abdominal",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Agarra la rueda con ambas manos y apoya las rodillas en el suelo. Rueda lentamente hacia adelante manteniendo el core contraído, luego regresa controlado a la posición inicial sin arquear la espalda.",
                      },
                    ]
                  },
                  {
                    number: 2,
                    title: "Torso I",
                    description: "Enfoque en el tronco superior y la parte posterior",
                    exercises: [
                      {
                        id: 9,
                        name: "Press banco plano",
                        sets: 3,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "Acuéstate en el banco, baja la barra controladamente hasta el pecho y empújala explosivamente hacia arriba. Mantén los codos a 45° del cuerpo para proteger los hombros.",
                      },
                      {
                        id: 9,
                        name: "Press pecho inclinado en multipower",
                        sets: "3 + dropset",
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Ajusta el respaldo inclinado y baja la barra hasta la parte superior del pecho. Empuja hacia arriba de manera controlada manteniendo estabilidad en los hombros.",
                      },
                      {
                        id: 9,
                        name: "Dominadas con lastre",
                        sets: 4,
                        targetReps: "(3-5)10-12",
                        restTime: "180",
                        notes: "La primera serie a 3-5 repeticiones y las siguientes a 10-12",
                      },
                      {
                        id: 9,
                        name: "Remo unilateral con mancuernas",
                        sets: 2,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Apoya una mano y rodilla en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia el torso manteniendo el codo pegado al cuerpo y la espalda recta. Baja controlado y repite con la otra mano.",
                      },
                      {
                        id: 9,
                        name: "Elevaciones laterales con mancuernas sentado (superserie con el siguiente)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Sentado, eleva las mancuernas lateralmente sin mover el torso. Controla el descenso para mantener la tensión.",
                      },
                      {
                        id: 9,
                        name: "Pájaros con mancuerna (superserie con el anterior)",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: "90",
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 9,
                        name: "Curl de bíceps en banco inclinado con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: "90",
                        notes: "Siéntate en un banco inclinado a 45°, con una mancuerna en cada mano y los brazos extendidos. Flexiona los codos levantando las mancuernas hacia los hombros sin mover los codos. Baja controlado hasta la posición inicial y repite.",
                      },
                      
                    ],
                  },
                  {
                    number: 3,
                    title: "Carrera extensiva",
                    description: "Entrenamiento de resistencia cardiovascular de larga duración",
                    exercises: [
                      {
                        id: 12,
                        name: "Entrenamiento extensivo (zona R1)",
                        sets: 1,
                        targetReps: "50 minutos al 65%",
                        restTime: "",
                        notes: "Consiste en trabajo aeróbico de baja intensidad y larga duración, manteniendo un ritmo cómodo en Zona R1 (50-60% de la FC máx.). Ideal para mejorar la base aeróbica y la recuperación activa, se puede realizar con carrera suave, ciclismo o remo a intensidad moderada.",
                      }
                    ],
                  },
                  {
                    number: 4,
                    title: "Descanso", 
                    description: "Un día de reposo para permitir la recuperación muscular y evitar el sobreentrenamiento.",
                  },
                  {
                    number: 5,
                    title: "Pierna atletica", 
                    description: "Enfoque en la fuerza y resistencia de las piernas",
                    exercises: [
                      {
                        id: 19,
                        name: "Tuck jumps",
                        sets: 3,
                        targetReps: "30 segundos",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Drop jumps",
                        sets: 3,
                        targetReps: "4",
                        restTime: 180,
                        notes: "Salta explosivamente llevando las rodillas al pecho mientras mantienes el tronco estable. Aterriza suavemente y repite con control.",
                      },
                      {
                        id: 19,
                        name: "Peso muerto tradicional (superserie complex con el siguiente)",
                        sets: 4,
                        targetReps: "3-5",
                        restTime: 180,
                        notes: "",
                      },
                      {
                        id: 19,
                        name: "CMJ jumps con mancuernas (superserie complex con el anterior)",
                        sets: 3,
                        targetReps: "8",
                        restTime: 180,
                        notes: "Este ejercicio es en superserie con el anterior, 1 serie del anterior, seguido de otra serie de este. Y así sucesivamente",
                      },
                      {
                        id: 19,
                        name: "Prensa de piernas",
                        sets: 4,
                        targetReps: "(3-5)8-10",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 19,
                        name: "Hip Thrust con barra",
                        sets: 4,
                        targetReps: "10-12",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 19,
                        name: "Leg curl máquina",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 19,
                        name: "Patada lateral polea con tobillera",
                        sets: 3,
                        targetReps: "15-20",
                        restTime: 90,
                        notes: "Coloca la tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, sintiendo la activación del glúteo medio, y regresa lentamente a la posición inicial. Repite con la otra pierna.",
                      },
                    ],
                  },
                  {
                    number: 6,
                    title: "Torso II + HIIT SIT",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Dominadas con peso corporal",
                        sets: 3,
                        targetReps: "8-10",
                        restTime: 180,
                        notes: "Sujeta la barra con agarre prono y manos a la altura de los hombros. Activa la espalda y tira del cuerpo hacia arriba hasta que la barbilla supere la barra. Desciende controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 21,
                        name: "Jalón al pecho",
                        sets: 4,
                        targetReps: "8-10",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre amplio, siéntate y bloquea los muslos bajo el soporte. Tira de la barra hacia la parte superior del pecho contrayendo la espalda, luego vuelve controlado a la posición inicial.",
                      },
                      {
                        id: 22,
                        name: "Press inclinado con mancuernas",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Con un banco inclinado, baja las mancuernas hasta el nivel del pecho. Empuja con fuerza mientras contraes el pectoral en la parte superior.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Press militar sentado con mancuernas",
                        sets: 3,
                        targetReps: "6-8",
                        restTime: 90,
                        notes: "Con la espalda recta, empuja las mancuernas por encima de la cabeza. Baja controladamente hasta la altura de los hombros.",
                      },
                      {
                        id: 25,
                        name: "Press francés con mancuernas",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Acostado en un banco, sujeta una mancuerna en cada mano con los brazos extendidos. Flexiona los codos bajando las mancuernas hacia la cabeza y extiende nuevamente hasta la posición inicial. Mantén control y estabilidad en todo el movimiento.",
                      },
                      {
                        id: 26,
                        name: "Sprint interval trainning",
                        sets: 8,
                        targetReps: "30 segundos a máxima velocidad",
                        restTime: 70,
                        notes: "Alterna sprints de alta intensidad con periodos de descanso caminando o trote suave",
                      },
                      {
                        id: 27,
                        name: "Vuelta a la calma",
                        sets: 1,
                        targetReps: "180 segundos al 50%",
                        restTime: "",
                        notes: "",
                      },
                    ],
                  },
                  {
                    number: 7,
                    title: "Destroying Aesthetics Express (Opcional 1 o 2)",
                    description: "",
                    exercises: [
                      {
                        id: 20,
                        name: "Elevaciones laterales con mancuernas sentado (superserie)(1)",
                        sets: 3,
                        targetReps: "100",
                        restTime: 90,
                        notes: "Siéntate en un banco con una mancuerna en cada mano y los brazos relajados a los lados. Eleva los brazos lateralmente hasta la altura de los hombros sin encogerlos, luego baja controlado.",
                      },
                      {
                        id: 21,
                        name: "Remo gironda agarre a elegir (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Sujeta la barra con agarre prono, supino o neutro, con el torso inclinado hacia adelante. Tira de la barra hacia el abdomen manteniendo los codos cerca del cuerpo y la espalda recta. Baja controlado hasta la posición inicial y repite.",
                      },
                      {
                        id: 22,
                        name: "Press banca plano con mancuernas (1)",
                        sets: 3,
                        targetReps: "20-25",
                        restTime: 180,
                        notes: "Baja las mancuernas controladamente hasta el pecho con los codos a 45°. Empuja explosivamente hacia arriba sin chocar las mancuernas.",
                      },
                      {
                        id: 23,
                        name: "Cruce de poleas sentado (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Siéntate en un banco entre dos poleas altas, sujeta los agarres con los brazos extendidos. Junta las manos al frente en un movimiento controlado, contrayendo el pecho, y regresa lentamente a la posición inicial.",
                      },
                      {
                        id: 24,
                        name: "Curl de bíceps araña (1)",
                        sets: 3,
                        targetReps: "12-15",
                        restTime: 90,
                        notes: "Apoya el pecho en un banco inclinado y flexiona los codos elevando las mancuernas. Baja lentamente sin perder la tensión en los bíceps.",
                      },
                      {
                        id: 25,
                        name: "Tríceps katana en polea (1)",
                        sets: 3,
                        targetReps: "10-12",
                        restTime: 90,
                        notes: "Sujeta la cuerda en polea alta con agarre neutral. Lleva los codos a los lados de la cabeza y extiende los brazos en diagonal hacia adelante, como si desenfundaras una katana. Regresa controlado a la posición inicial y repite.",
                      },
                      {
                        id: 26,
                        name: "Hip Thrust con barra (2)",
                        sets: 4,
                        targetReps: "12-15",
                        restTime: 180,
                        notes: "Apoya la parte superior de la espalda en un banco, con la barra sobre la cadera. Empuja con los talones y eleva la cadera hasta alinear el torso con los muslos. Baja controlado y repite, manteniendo el core activo y el glúteo contraído.",
                      },
                      {
                        id: 26,
                        name: "Prensa de piernas (2)",
                        sets: 4,
                        targetReps: "18-20",
                        restTime: 180,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies en la plataforma. Empuja hasta extender las piernas sin bloquear las rodillas y baja controlado hasta el ángulo deseado.",
                      },
                      {
                        id: 26,
                        name: "Patada lateral en polea (2)",
                        sets: 4,
                        targetReps: "15-20",
                        restTime: 180,
                        notes: "Coloca una tobillera en la polea baja y sujétate para mantener el equilibrio. Eleva la pierna lateralmente con control, activando el glúteo medio, y baja lentamente a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg extension (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Siéntate en la máquina con la espalda apoyada y pies bajo los rodillos. Extiende las piernas hasta bloquear las rodillas y baja controlado hasta la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Leg curl máquina (2)",
                        sets: 4,
                        targetReps: "25",
                        restTime: 90,
                        notes: "Ajusta la máquina y coloca los tobillos bajo el rodillo. Flexiona las rodillas llevando los talones hacia los glúteos y regresa controlado a la posición inicial.",
                      },
                      {
                        id: 26,
                        name: "Elevación de talón en multipower (1/2TABATA) (2)",
                        sets: 4,
                        targetReps: "Las que entren",
                        restTime: "",
                        notes: "4 series de 20 segundos cada una a las maximas repetciones posibles en ese tiempo (medio TABATA)",
                      },
                    ],
                  },
                ],
              },
            ],
      },
    ]
};