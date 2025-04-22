import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Play, Pause, Clock, ChevronRight, X, Info, Timer, Video, Dumbbell, Activity, Target } from 'lucide-react-native';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

function ExerciseVideo({ videoUrl, visible, onClose }: { videoUrl?: string; visible: boolean; onClose: () => void }) {
  if (!videoUrl) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
      statusBarTranslucent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <WebView
            source={{ uri: videoUrl }}
            style={styles.video}
            allowsFullscreenVideo={true}
            javaScriptEnabled={true}
          />
        </View>
      </View>
    </Modal>
  );
}

export default function WorkoutScreen() {
  const { week, day, workoutData: workoutDataStr } = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();

  // Parse workout data
  const parsedWorkoutData = workoutDataStr ? JSON.parse(workoutDataStr as string) : {
    program: "Entreno no disponible",
    week: week || 1,
    day: "Día no disponible",
    description: "",
    exercises: [],
    muscleGroups: []
  };

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [exerciseData, setExerciseData] = useState(() => {
    return parsedWorkoutData.exercises.map((exercise: any) => ({
      ...exercise,
      setsData: Array(exercise.sets || 1).fill(null).map(() => ({
        reps: '',
        weight: '',
        rir: '',
      }))
    }));
  });

  // Check if it's a cardio day
  /* const isCardioDay = parsedWorkoutData.title?.toLowerCase()?.includes('hiit') ||
    parsedWorkoutData.title?.toLowerCase()?.includes('carrera') ||
    parsedWorkoutData.title?.toLowerCase()?.includes('cardio') ||
    parsedWorkoutData.exercises.some((ex: any) => ex.REP || ex.time);
 */
  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const updateSetData = (exerciseIndex: number, setIndex: number, field: 'reps' | 'weight' | 'rir', value: string) => {
    setExerciseData(prevData => {
      const newData = [...prevData];
      newData[exerciseIndex].setsData[setIndex][field] = value;
      return newData;
    });
  };

  const handleFinishWorkout = async () => {
    try {
      const totalReps = exerciseData.reduce((sum, exercise) => {
        return sum + exercise.setsData.reduce((exerciseSum: number, set: any) => {
          return exerciseSum + (Number(set.reps) || 0);
        }, 0);
      }, 0);
  
      const totalVolume = exerciseData.reduce((sum, exercise) => {
        return sum + exercise.setsData.reduce((exerciseSum: number, set: any) => {
          const weight = Number(set.weight) || 0;
          const reps = Number(set.reps) || 0;
          return exerciseSum + (weight * reps);
        }, 0);
      }, 0);
  
      const { data: workout, error } = await supabase
        .from('workouts')
        .insert([{
          profile_id: user?.id,
          program_id: parsedWorkoutData.program,
          week_number: parsedWorkoutData.week,
          day_number: day,
          start_time: new Date(),
          end_time: new Date(),
          total_volume: totalVolume,
          total_reps: totalReps,
          notes: parsedWorkoutData.description || '',
        }])
        .select()
        .single();
  
      if (error) throw error;
  
      const exercisesToInsert = exerciseData.map(exercise => ({
        workout_id: workout.id,
        exercise_name: exercise.name,
        sets: exercise.setsData.map(set => ({
          reps: set.reps,
          weight: set.weight,
          rir: set.rir,
        })),
        max_weight: Math.max(...exercise.setsData.map(set => Number(set.weight) || 0)),
      }));
  
      const { error: exercisesError } = await supabase
        .from('workout_exercises')
        .insert(exercisesToInsert);
  
      if (exercisesError) throw exercisesError;
  
      router.replace({
        pathname: '../workout-summary',
        params: {
          totalVolume: totalVolume.toString(),
          totalReps: totalReps.toString(),
          duration: time.toString(),
          exerciseData: JSON.stringify(exerciseData),
          workoutId: workout.id,
        }
      });
  
    } catch (err) {
      console.error('Error guardando entrenamiento:', err);
      Alert.alert('Error', 'Hubo un problema guardando el entrenamiento. Revisa tu conexión e intenta nuevamente.');
    }
  };
  

  const renderExercise = (exercise: any, exerciseIndex: number) => {
    return (
      <View key={exerciseIndex} style={styles.exerciseContainer}>
        <View style={styles.exerciseHeader}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>

          {exercise.video && (
            <TouchableOpacity
              style={styles.videoButton}
              onPress={() => setSelectedVideo(exercise.video)}
            >
              <Video size={16} color="#3B82F6" />
              <Text style={styles.videoButtonText}>Ver demostración</Text>
            </TouchableOpacity>
          )}

          {exercise.targetReps && (
            <View style={styles.targetContainer}>
              <Target size={16} color="#6B7280" />
              <Text style={styles.targetLabel}>Repeticiones:</Text>
              <Text style={styles.targetValue}>{exercise.targetReps}</Text>
            </View>
          )}
        </View>

        {exercise.notes && (
          <View style={styles.notesContainer}>
            <Info size={16} color="#6B7280" />
            <Text style={styles.notesText}>{exercise.notes}</Text>
            <Text>{'\n'}</Text>
          </View>
        )}

        <View style={styles.setsContainer}>
          <View style={styles.setsHeader}>
            <Text style={styles.setsHeaderText}>Serie</Text>
            <Text style={styles.setsHeaderText}>Reps</Text>
            <Text style={styles.setsHeaderText}>Peso (kg)</Text>
            <Text style={styles.setsHeaderText}>RIR</Text>
          </View>

          {exercise.setsData.map((set: any, setIndex: number) => (
            <View key={setIndex} style={styles.setRow}>
              <View style={styles.setNumberContainer}>
                <Text style={styles.setNumber}>{setIndex + 1}</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={set.reps}
                  onChangeText={(text) => updateSetData(exerciseIndex, setIndex, 'reps', text)}
                  placeholder="0"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={set.weight}
                  onChangeText={(text) => updateSetData(exerciseIndex, setIndex, 'weight', text)}
                  placeholder="0"
                />
                <Text style={styles.unit}>kg</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={set.rir}
                  onChangeText={(text) => updateSetData(exerciseIndex, setIndex, 'rir', text)}
                  placeholder="0"
                />
              </View>
            </View>
          ))}
        </View>

        {exercise.restTime && (
          <View style={styles.restTime}>
            <Clock size={16} color="#3B82F6" />
            <Text style={styles.restTimeText}>Descanso: {exercise.restTime}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Timer */}
        <View style={styles.timerContainer}>
          <View style={styles.timer}>
            <Timer size={20} color="#3B82F6" />
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <TouchableOpacity
              style={styles.timerButton}
              onPress={() => setIsRunning(!isRunning)}
            >
              {isRunning ? (
                <Pause size={20} color="#FFFFFF" />
              ) : (
                <Play size={20} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Workout Header */}
          <View style={styles.header}>
            <View style={styles.programInfo}>
              <Text style={styles.programName}>{parsedWorkoutData.program}</Text>
              <Text style={styles.weekInfo}>Semana {parsedWorkoutData.week}</Text>
            </View>
            <Text style={styles.dayTitle}>{parsedWorkoutData.day}</Text>

            {parsedWorkoutData.description && (
              <Text style={styles.description}>{parsedWorkoutData.description}</Text>
            )}

            {parsedWorkoutData.muscleGroups && parsedWorkoutData.muscleGroups.length > 0 && (
              <View style={styles.muscleGroups}>
                {parsedWorkoutData.muscleGroups.map((group: string, index: number) => (
                  <View key={index} style={styles.muscleGroupTag}>
                    <Activity size={16} color="#3B82F6" />
                    <Text style={styles.muscleGroupText}>{group}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Exercises */}
          {/* {isCardioDay ? (
            <View style={styles.cardioContainer}>
              <Text style={styles.cardioTitle}>Ejercicios de Cardio</Text>
              {parsedWorkoutData.exercises.map((exercise: any, index: number) => (
                <View key={index} style={styles.cardioExercise}>
                  <Text style={styles.cardioExerciseName}>{exercise.name}</Text>
                  <View style={styles.cardioDetails}>
                    {exercise.time && (
                      <View style={styles.cardioDetail}>
                        <Clock size={16} color="#3B82F6" />
                        <Text style={styles.cardioDetailText}>{exercise.time}</Text>
                      </View>
                    )}
                    {exercise.REP && (
                      <View style={styles.cardioDetail}>
                        <Dumbbell size={16} color="#3B82F6" />
                        <Text style={styles.cardioDetailText}>{exercise.REP}</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ) : (
            exerciseData.map((exercise: any, index: number) => renderExercise(exercise, index))
          )} */}

          {exerciseData.map((exercise: any, index: number) => renderExercise(exercise, index))}

        </ScrollView>

        {/* Video Modal */}
        <ExerciseVideo
          videoUrl={selectedVideo || undefined}
          visible={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />

        {/* Action Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <X size={20} color="#DC2626" />
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinishWorkout}
          >
            <Text style={styles.finishButtonText}>Finalizar Entreno</Text>
            <ChevronRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  timerContainer: {
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  timerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  timerButton: {
    backgroundColor: '#3B82F6',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  programInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  programName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  weekInfo: {
    fontSize: 16,
    color: '#6B7280',
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  muscleGroups: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  muscleGroupTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  muscleGroupText: {
    fontSize: 14,
    color: '#3B82F6',
  },
  exerciseContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  exerciseHeader: {
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
    gap: 4,
  },
  videoButtonText: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
  },
  targetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  targetLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  targetValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  notesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    marginTop: 8,
  },
  notesText: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  setsContainer: {
    marginBottom: 12,
  },
  setsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  setsHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    width: '25%',
    textAlign: 'center',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  setNumberContainer: {
    width: '25%',
    alignItems: 'center',
  },
  setNumber: {
    fontSize: 14,
    color: '#6B7280',
  },
  inputContainer: {
    width: '25%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 8,
    width: 50,
    textAlign: 'center',
    fontSize: 14,
    color: '#111827',
  },
  unit: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  restTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EFF6FF',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  restTimeText: {
    fontSize: 14,
    color: '#3B82F6',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 12,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#DC2626',
  },
  finishButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 4,
  },
  finishButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  video: {
    flex: 1,
    backgroundColor: '#000000',
  },
  cardioContainer: {
    marginTop: 16,
  },
  cardioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  cardioExercise: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardioExerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  cardioDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 8,
  },
  cardioDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardioDetailText: {
    fontSize: 14,
    color: '#3B82F6',
  },
});