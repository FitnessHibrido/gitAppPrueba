import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Timer, Weight, Dumbbell, Trophy, Share2 } from 'lucide-react-native';

export default function WorkoutSummaryScreen() {
  const router = useRouter();
  const { totalVolume, totalReps, duration, exerciseData } = useLocalSearchParams();

  const parsedExerciseData = exerciseData ? JSON.parse(exerciseData as string) : [];



  // Formatear duración de segundos a formato legible
  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins > 0 ? `${mins}m ` : ''}${secs}s`;
  };

  // Formatear volumen total
  const formatVolume = (volume: number) => {
    return `${Number(volume).toLocaleString('es-ES')} kg`;
  };

  // Calcular volumen por ejercicio
  const calculateExerciseVolume = (exercise: any) => {
    return exercise.setsData.reduce((sum: number, set: any) => {
      return sum + ((Number(set.weight) || 0) * (Number(set.reps) || 0));
    }, 0);
  };

  const handleShare = async () => {
    try {
      let exerciseDetails = '';
      parsedExerciseData.forEach((exercise: any) => {
        exerciseDetails += `\n${exercise.name}:\n`;
        exercise.setsData.forEach((set: any, index: number) => {
          exerciseDetails += `  Serie ${index + 1}: ${set.reps || 0} reps × ${set.weight || 0} kg (RIR: ${set.rir || 0})\n`;
        });
      });

      const message = `¡He completado mi entrenamiento! 💪\n\n` +
        `🕒 Duración: ${formatDuration(Number(duration))}\n` +
        `🏋️‍♂️ Volumen total: ${formatVolume(Number(totalVolume))}\n` +
        `🔄 Repeticiones: ${Number(totalReps).toLocaleString('es-ES')}\n\n` +
        `Detalles:\n${exerciseDetails}\n` +
        `#BoltApp #Fitness #Workout`;

      await Share.share({
        title: '¡Entrenamiento Completado!',
        message,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Trophy size={48} color="#22C55E" />
            <Text style={styles.cardTitle}>¡Entrenamiento Completado!</Text>
            <Text style={styles.cardDate}>
              {new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Timer size={32} color="#3B82F6" />
              <Text style={styles.statValue}>{formatDuration(Number(duration))}</Text>
              <Text style={styles.statLabel}>Duración</Text>
            </View>

            <View style={styles.statCard}>
              <Weight size={32} color="#22C55E" />
              <Text style={styles.statValue}>{formatVolume(Number(totalVolume))}</Text>
              <Text style={styles.statLabel}>Volumen Total</Text>
            </View>

            <View style={styles.statCard}>
              <Dumbbell size={32} color="#F59E0B" />
              <Text style={styles.statValue}>{Number(totalReps).toLocaleString('es-ES')}</Text>
              <Text style={styles.statLabel}>Repeticiones</Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <TouchableOpacity onPress={() => router.push('https://www.instagram.com/fitnesshibridoesp/?hl=es')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.appName}>@fitnesshibridoesp</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.hashtags}>#Fitness #Workout #Progress</Text>
          </View>
        </View>

        {/* Sección de detalles de ejercicios */}
        <View style={styles.exercisesContainer}>
          <Text style={styles.exercisesTitle}>Detalles del Entrenamiento</Text>

          {parsedExerciseData.map((exercise: any, index: number) => (
            <View key={index} style={styles.exerciseCard}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>

              <View style={styles.setsContainer}>
                {exercise.setsData.map((set: any, setIndex: number) => (
                  <View key={setIndex} style={styles.setRow}>
                    <Text style={styles.setNumber}>Serie {setIndex + 1}</Text>
                    <Text style={styles.setDetail}>Reps: {set.reps || '0'}</Text>
                    <Text style={styles.setDetail}>Peso: {set.weight || '0'} kg</Text>
                    <Text style={styles.setDetail}>RIR: {set.rir || '0'}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.exerciseVolume}>
                Volumen: {formatVolume(calculateExerciseVolume(exercise))}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Share2 size={20} color="#FFFFFF" />
          <Text style={styles.shareButtonText}>Compartir Entrenamiento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.performanceButton}
          onPress={() => router.push('/train/performance')}
        >
          <Text style={styles.performanceButtonText}>Ver Estadísticas Completas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.finishButton}
          onPress={() => router.push('/train')}
        >
          <Text style={styles.finishButtonText}>Volver al Inicio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDate: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  cardFooter: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  appName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 4,
  },
  hashtags: {
    fontSize: 14,
    color: '#6B7280',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  performanceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  performanceButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  finishButton: {
    backgroundColor: '#22C55E',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  finishButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Nuevos estilos para la sección de ejercicios
  exercisesContainer: {
    margin: 20,
    marginTop: 0,
  },
  exercisesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  exerciseCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  setsContainer: {
    marginBottom: 12,
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  setNumber: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  setDetail: {
    fontSize: 14,
    color: '#6B7280',
  },
  exerciseVolume: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
    textAlign: 'right',
  },
});