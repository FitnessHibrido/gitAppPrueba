import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Clock, Dumbbell, RefreshCw, X, Plus, ChevronRight } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

// Mock exercise data
const mockExercises = [
  { id: 1, name: 'Sentadilla', muscle: 'Piernas' },
  { id: 2, name: 'Press Banca', muscle: 'Pecho' },
  { id: 3, name: 'Peso Muerto', muscle: 'Espalda' },
  { id: 4, name: 'Press Militar', muscle: 'Hombros' },
  { id: 5, name: 'Curl de Bíceps', muscle: 'Brazos' },
  { id: 6, name: 'Extensiones de Tríceps', muscle: 'Brazos' },
  { id: 7, name: 'Remo', muscle: 'Espalda' },
  { id: 8, name: 'Elevaciones Laterales', muscle: 'Hombros' },
  { id: 9, name: 'Zancadas', muscle: 'Piernas' },
  { id: 10, name: 'Crunch', muscle: 'Abdominales' },
];

export default function BuilderScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [showExerciseList, setShowExerciseList] = useState(false);

  // Timer logic would go here in a useEffect

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const addExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, { 
      ...exercise, 
      sets: [{ reps: '', weight: '', rir: '' }] 
    }]);
    setShowExerciseList(false);
  };

  const removeExercise = (index) => {
    const newExercises = [...selectedExercises];
    newExercises.splice(index, 1);
    setSelectedExercises(newExercises);
  };

  const addSet = (exerciseIndex) => {
    const newExercises = [...selectedExercises];
    newExercises[exerciseIndex].sets.push({ reps: '', weight: '', rir: '' });
    setSelectedExercises(newExercises);
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const newExercises = [...selectedExercises];
    if (newExercises[exerciseIndex].sets.length > 1) {
      newExercises[exerciseIndex].sets.splice(setIndex, 1);
      setSelectedExercises(newExercises);
    }
  };

  const updateSetData = (exerciseIndex, setIndex, field, value) => {
    const newExercises = [...selectedExercises];
    newExercises[exerciseIndex].sets[setIndex][field] = value;
    setSelectedExercises(newExercises);
  };

  const handleFinishWorkout = async () => {
    if (!user) {
      Alert.alert('Error', 'Debes iniciar sesión para guardar el entrenamiento');
      return;
    }

    if (selectedExercises.length === 0) {
      Alert.alert('Error', 'Añade al menos un ejercicio para guardar el entrenamiento');
      return;
    }

    try {
      // Calculate total volume and reps
      let totalVolume = 0;
      let totalReps = 0;

      selectedExercises.forEach(exercise => {
        exercise.sets.forEach(set => {
          const reps = parseInt(set.reps) || 0;
          const weight = parseFloat(set.weight) || 0;
          totalVolume += reps * weight;
          totalReps += reps;
        });
      });

      // Create workout record
      const { data: workout, error: workoutError } = await supabase
        .from('workouts')
        .insert({
          profile_id: user.id,
          start_time: new Date(Date.now() - duration * 1000).toISOString(),
          end_time: new Date().toISOString(),
          total_volume: totalVolume,
          total_reps: totalReps,
          notes: 'Entreno libre',
        })
        .select()
        .single();

      if (workoutError) throw workoutError;

      // Add exercises to workout
      const exercisesData = selectedExercises.map(exercise => {
        const sets = exercise.sets.map(set => ({
          reps: set.reps || '0',
          weight: set.weight || '0',
          rir: set.rir || '0',
        }));

        // Calculate exercise stats
        let exerciseVolume = 0;
        let exerciseReps = 0;
        let maxWeight = 0;

        exercise.sets.forEach(set => {
          const reps = parseInt(set.reps) || 0;
          const weight = parseFloat(set.weight) || 0;
          exerciseVolume += reps * weight;
          exerciseReps += reps;
          maxWeight = Math.max(maxWeight, weight);
        });

        return {
          workout_id: workout.id,
          exercise_name: exercise.name,
          sets: sets,
          total_volume: exerciseVolume,
          max_weight: maxWeight,
          total_reps: exerciseReps,
        };
      });

      const { error: exercisesError } = await supabase
        .from('workout_exercises')
        .insert(exercisesData);

      if (exercisesError) throw exercisesError;

      // Navigate to summary
      router.replace({
        pathname: '/train/workout-summary',
        params: {
          totalVolume: totalVolume.toString(),
          totalReps: totalReps.toString(),
          duration: duration.toString(),
          exerciseData: JSON.stringify(selectedExercises),
          workoutId: workout.id,
        }
      });
    } catch (error) {
      console.error('Error saving workout:', error);
      Alert.alert('Error', 'No se pudo guardar el entrenamiento. Inténtalo de nuevo.');
    }
  };

  const handleDiscardWorkout = () => {
    Alert.alert(
      'Descartar Entreno',
      '¿Estás seguro de que quieres descartar este entreno?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Descartar', 
          style: 'destructive',
          onPress: () => router.back()
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.headerButton}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.finishButton}
          onPress={handleFinishWorkout}
        >
          <Text style={styles.finishButtonText}>Terminar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Duración</Text>
          <Text style={styles.statValue}>{formatTime(duration)}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Volumen</Text>
          <Text style={styles.statValue}>
            {selectedExercises.reduce((total, exercise) => {
              return total + exercise.sets.reduce((setTotal, set) => {
                return setTotal + (parseInt(set.reps) || 0) * (parseFloat(set.weight) || 0);
              }, 0);
            }, 0)} kg
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Series</Text>
          <Text style={styles.statValue}>
            {selectedExercises.reduce((total, exercise) => {
              return total + exercise.sets.length;
            }, 0)}
          </Text>
        </View>
      </View>

      {showExerciseList ? (
        <View style={styles.exerciseListContainer}>
          <View style={styles.exerciseListHeader}>
            <Text style={styles.exerciseListTitle}>Seleccionar Ejercicio</Text>
            <TouchableOpacity onPress={() => setShowExerciseList(false)}>
              <X size={24} color="#111827" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={mockExercises}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.exerciseListItem}
                onPress={() => addExercise(item)}
              >
                <View>
                  <Text style={styles.exerciseListItemName}>{item.name}</Text>
                  <Text style={styles.exerciseListItemMuscle}>{item.muscle}</Text>
                </View>
                <Plus size={20} color="#3B82F6" />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.content}>
          {selectedExercises.length === 0 ? (
            <View style={styles.emptyState}>
              <Dumbbell size={32} color="#D1D5DB" />
              <Text style={styles.emptyStateText}>Empezar</Text>
              <Text style={styles.emptyStateSubtext}>
                Agrega un ejercicio para empezar tu entrenamiento
              </Text>
            </View>
          ) : (
            <FlatList
              data={selectedExercises}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item, index: exerciseIndex }) => (
                <View style={styles.exerciseCard}>
                  <View style={styles.exerciseHeader}>
                    <Text style={styles.exerciseName}>{item.name}</Text>
                    <TouchableOpacity onPress={() => removeExercise(exerciseIndex)}>
                      <X size={20} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                  
                  {item.sets.map((set, setIndex) => (
                    <View key={setIndex} style={styles.setRow}>
                      <View style={styles.setNumber}>
                        <Text style={styles.setNumberText}>{setIndex + 1}</Text>
                      </View>
                      <View style={styles.setInputs}>
                        <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>Reps</Text>
                          <TouchableOpacity 
                            style={styles.input}
                            onPress={() => {
                              Alert.prompt(
                                'Repeticiones',
                                'Ingresa el número de repeticiones',
                                [
                                  { text: 'Cancelar', style: 'cancel' },
                                  {
                                    text: 'OK',
                                    onPress: (value) => updateSetData(exerciseIndex, setIndex, 'reps', value)
                                  }
                                ],
                                'plain-text',
                                set.reps
                              );
                            }}
                          >
                            <Text style={styles.inputText}>{set.reps || '0'}</Text>
                          </TouchableOpacity>
                        </View>
                        
                        <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>Peso</Text>
                          <TouchableOpacity 
                            style={styles.input}
                            onPress={() => {
                              Alert.prompt(
                                'Peso',
                                'Ingresa el peso en kg',
                                [
                                  { text: 'Cancelar', style: 'cancel' },
                                  {
                                    text: 'OK',
                                    onPress: (value) => updateSetData(exerciseIndex, setIndex, 'weight', value)
                                  }
                                ],
                                'plain-text',
                                set.weight
                              );
                            }}
                          >
                            <Text style={styles.inputText}>{set.weight || '0'} kg</Text>
                          </TouchableOpacity>
                        </View>
                        
                        <View style={styles.inputContainer}>
                          <Text style={styles.inputLabel}>RIR</Text>
                          <TouchableOpacity 
                            style={styles.input}
                            onPress={() => {
                              Alert.prompt(
                                'RIR',
                                'Ingresa el RIR (Repeticiones en Reserva)',
                                [
                                  { text: 'Cancelar', style: 'cancel' },
                                  {
                                    text: 'OK',
                                    onPress: (value) => updateSetData(exerciseIndex, setIndex, 'rir', value)
                                  }
                                ],
                                'plain-text',
                                set.rir
                              );
                            }}
                          >
                            <Text style={styles.inputText}>{set.rir || '0'}</Text>
                          </TouchableOpacity>
                        </View>
                        
                        {item.sets.length > 1 && (
                          <TouchableOpacity 
                            style={styles.removeSetButton}
                            onPress={() => removeSet(exerciseIndex, setIndex)}
                          >
                            <X size={16} color="#EF4444" />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  ))}
                  
                  <TouchableOpacity 
                    style={styles.addSetButton}
                    onPress={() => addSet(exerciseIndex)}
                  >
                    <Plus size={16} color="#3B82F6" />
                    <Text style={styles.addSetButtonText}>Añadir Serie</Text>
                  </TouchableOpacity>
                </View>
              )}
              ListFooterComponent={
                <View style={styles.footerPadding} />
              }
            />
          )}

          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setShowExerciseList(true)}
          >
            <Plus size={20} color="#FFFFFF" />
            <Text style={styles.addButtonText}>Agregar Ejercicio</Text>
          </TouchableOpacity>

          <View style={styles.bottomButtons}>
            <TouchableOpacity 
              style={styles.discardButton}
              onPress={handleDiscardWorkout}
            >
              <Text style={styles.discardButtonText}>Descartar Entreno</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerButton: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  finishButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  stats: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  discardButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  discardButtonText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  exerciseListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  exerciseListTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  exerciseListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  exerciseListItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  exerciseListItemMuscle: {
    fontSize: 14,
    color: '#6B7280',
  },
  exerciseCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  setNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  setNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  setInputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  inputText: {
    fontSize: 14,
    color: '#111827',
  },
  removeSetButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addSetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  addSetButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
  },
  footerPadding: {
    height: 100,
  },
});