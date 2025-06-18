import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Timer, Weight, Dumbbell, Trophy, Share2, TrendingUp, Target, Zap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function WorkoutSummaryScreen() {
  const router = useRouter();
  const { totalVolume, totalReps, duration, exerciseData } = useLocalSearchParams();

  const parsedExerciseData = exerciseData ? JSON.parse(exerciseData as string) : [];

  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins > 0 ? `${mins}m ` : ''}${secs}s`;
  };

  const formatVolume = (volume: number) => {
    return `${Number(volume).toLocaleString('es-ES')} kg`;
  };

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
        `#FitnessHibrido #Fitness #Workout`;

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
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Success Header */}
        <View style={styles.successHeader}>
          <View style={styles.successIconContainer}>
            <Trophy size={48} color="#F59E0B" />
          </View>
          <Text style={styles.successTitle}>¡Entrenamiento Completado!</Text>
          <Text style={styles.successSubtitle}>
            Excelente trabajo. Has dado un paso más hacia tus objetivos.
          </Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#EEF2FF' }]}>
            <View style={[styles.statIconContainer, { backgroundColor: '#6366F1' }]}>
              <Timer size={24} color="#FFFFFF" />
            </View>
            <Text style={[styles.statValue, { color: '#6366F1' }]}>{formatDuration(Number(duration))}</Text>
            <Text style={styles.statLabel}>Duración</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#ECFDF5' }]}>
            <View style={[styles.statIconContainer, { backgroundColor: '#10B981' }]}>
              <Weight size={24} color="#FFFFFF" />
            </View>
            <Text style={[styles.statValue, { color: '#10B981' }]}>{formatVolume(Number(totalVolume))}</Text>
            <Text style={styles.statLabel}>Volumen Total</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#FFFBEB' }]}>
            <View style={[styles.statIconContainer, { backgroundColor: '#F59E0B' }]}>
              <Dumbbell size={24} color="#FFFFFF" />
            </View>
            <Text style={[styles.statValue, { color: '#F59E0B' }]}>{Number(totalReps).toLocaleString('es-ES')}</Text>
            <Text style={styles.statLabel}>Repeticiones</Text>
          </View>
        </View>

        {/* Exercise Details */}
        <View style={styles.exercisesSection}>
          <Text style={styles.sectionTitle}>Detalles del Entrenamiento</Text>

          {parsedExerciseData.map((exercise: any, index: number) => (
            <View key={index} style={styles.exerciseCard}>
              <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseVolume}>
                  {formatVolume(calculateExerciseVolume(exercise))}
                </Text>
              </View>

              <View style={styles.setsContainer}>
                {exercise.setsData.map((set: any, setIndex: number) => (
                  <View key={setIndex} style={styles.setRow}>
                    <View style={styles.setNumber}>
                      <Text style={styles.setNumberText}>{setIndex + 1}</Text>
                    </View>
                    <Text style={styles.setDetail}>{set.reps || '0'} reps</Text>
                    <Text style={styles.setDetail}>{set.weight || '0'} kg</Text>
                    <Text style={styles.setDetail}>RIR {set.rir || '0'}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Motivation Section */}
        <View style={styles.motivationSection}>
          <Zap size={32} color="#F59E0B" />
          <Text style={styles.motivationTitle}>¡Sigue así!</Text>
          <Text style={styles.motivationText}>
            Cada entrenamiento te acerca más a tus objetivos. La constancia es la clave del éxito.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleShare}
          >
            <Share2 size={20} color="#FFFFFF" />
            <Text style={styles.shareButtonText}>Compartir Progreso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.performanceButton}
            onPress={() => router.push('/train/performance')}
          >
            <TrendingUp size={20} color="#6366F1" />
            <Text style={styles.performanceButtonText}>Ver Estadísticas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => router.push('/train')}
          >
            <Text style={styles.finishButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
  },
  successHeader: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 24,
  },
  dateText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  exercisesSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
    flex: 1,
  },
  exerciseVolume: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
  },
  setsContainer: {
    gap: 8,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    gap: 16,
  },
  setNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setNumberText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  setDetail: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  motivationSection: {
    marginHorizontal: 20,
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  motivationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
    marginTop: 12,
    marginBottom: 8,
  },
  motivationText: {
    fontSize: 16,
    color: '#78350F',
    textAlign: 'center',
    lineHeight: 24,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6366F1',
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
    backgroundColor: '#EEF2FF',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  performanceButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
  },
  finishButton: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  finishButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});