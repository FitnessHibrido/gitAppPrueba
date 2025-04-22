import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Calendar, ChevronRight, Clock, Dumbbell, Trophy } from 'lucide-react-native';

export default function SelectDayScreen() {
  const { week, weekData } = useLocalSearchParams();
  const router = useRouter();
  const parsedWeekData = JSON.parse(weekData as string);

  const handleStartWorkout = (dayNumber: number) => {
    const day = parsedWeekData.days.find((d: any) => d.number === dayNumber);
    router.push({
      pathname: '/train/program/workout',
      params: {
        week: week,
        day: dayNumber,
        program: parsedWeekData.program, // Añadido
        workoutData: JSON.stringify({
          ...day,
          program: parsedWeekData.program,
          week: week,
          muscleGroups: parsedWeekData.muscleGroups // Añadir grupos musculares si existen
        })
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.weekBadge}>
            <Calendar size={16} color="#FFFFFF" />
            <Text style={styles.weekText}>Semana {week}</Text>
          </View>
          <Text style={styles.title}>{parsedWeekData.title}</Text>
          <Text style={styles.subtitle}>{parsedWeekData.description}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {parsedWeekData.days
          .filter((day: any) => day.title !== 'Descanso') // Filtrar días con título "Descanso"
          .map((day: any) => (
            <TouchableOpacity
              key={day.number}
              style={styles.dayCard}
              onPress={() => handleStartWorkout(day.number)}
            >
              <View style={styles.cardHeader}>
                <View style={styles.dayBadge}>
                  <Text style={styles.dayNumber}>Día {day.number}</Text>
                </View>
              </View>

              <Text style={styles.dayTitle}>{day.title}</Text>
              <Text style={styles.dayDescription}>{day.description}</Text>

              <TouchableOpacity
                style={styles.startButton}
                onPress={() => handleStartWorkout(day.number)}
              >
                <Text style={styles.startButtonText}>Comenzar Entreno</Text>
                <ChevronRight size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Add these helper functions that were missing
function getDifficultyStyle(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'principiante':
      return styles.beginnerBadge;
    case 'intermedio':
      return styles.intermediateBadge;
    case 'avanzado':
      return styles.advancedBadge;
    default:
      return styles.defaultBadge;
  }
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'principiante':
      return '#22C55E';
    case 'intermedio':
      return '#F59E0B';
    case 'avanzado':
      return '#EF4444';
    default:
      return '#6B7280';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  weekBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  weekText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayBadge: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  beginnerBadge: {
    backgroundColor: '#F0FDF4',
  },
  intermediateBadge: {
    backgroundColor: '#FFFBEB',
  },
  advancedBadge: {
    backgroundColor: '#FEF2F2',
  },
  defaultBadge: {
    backgroundColor: '#F3F4F6',
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '600',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  dayDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});