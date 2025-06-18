import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, Clock, Target, Dumbbell, Star, Users } from 'lucide-react-native';
import { trainingPrograms } from '@/constants/programs';
import { useState, useMemo } from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 20;
const CARD_WIDTH = width - (CARD_MARGIN * 2);

type Level = 'Todos' | 'Principiante' | 'Intermedio' | 'Avanzado';

export default function ProgramsScreen() {
  const [selectedLevel, setSelectedLevel] = useState<Level>('Todos');
  const router = useRouter();

  const filteredPrograms = useMemo(() => {
    if (selectedLevel === 'Todos') {
      return trainingPrograms;
    }
    return trainingPrograms.filter(program => program.level === selectedLevel);
  }, [selectedLevel]);

  const handleProgramDetails = (programId: string) => {
    router.push({
      pathname: '/train/program/select-week',
      params: { programId }
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return '#10B981';
      case 'Intermedio': return '#F59E0B';
      case 'Avanzado': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case 'Principiante': return '#ECFDF5';
      case 'Intermedio': return '#FFFBEB';
      case 'Avanzado': return '#FEF2F2';
      default: return '#F3F4F6';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Programas de Entrenamiento</Text>
        <Text style={styles.subtitle}>
          Encuentra el programa perfecto para alcanzar tus objetivos
        </Text>
      </View>

      <View style={styles.filtersSection}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
        >
          {(['Todos', 'Principiante', 'Intermedio', 'Avanzado'] as Level[]).map((level) => (
            <TouchableOpacity 
              key={level}
              style={[
                styles.filterChip,
                selectedLevel === level && styles.activeFilter
              ]}
              onPress={() => setSelectedLevel(level)}
            >
              <Text style={[
                styles.filterText,
                selectedLevel === level && styles.activeFilterText
              ]}>
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.programsContainer}
      >
        {filteredPrograms.map((program) => (
          <TouchableOpacity 
            key={program.id} 
            style={styles.programCard}
            activeOpacity={0.9}
            onPress={() => handleProgramDetails(program.id)}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: program.image }}
                style={styles.programImage}
                resizeMode="cover"
              />
              <View style={styles.overlay}>
                <View style={[
                  styles.levelBadge, 
                  { backgroundColor: getLevelBgColor(program.level) }
                ]}>
                  <Text style={[
                    styles.levelText, 
                    { color: getLevelColor(program.level) }
                  ]}>
                    {program.level}
                  </Text>
                </View>
                <View style={styles.programNameContainer}>
                  <Text style={styles.programName}>{program.name}</Text>
                </View>
              </View>
            </View>

            <View style={styles.programDetails}>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Clock size={16} color="#6B7280" />
                  <Text style={styles.statText}>{program.duration}</Text>
                </View>
                <View style={styles.stat}>
                  <Target size={16} color="#6B7280" />
                  <Text style={styles.statText}>{program.objectives}</Text>
                </View>
                <View style={styles.stat}>
                  <Dumbbell size={16} color="#6B7280" />
                  <Text style={styles.statText}>{program.days}</Text>
                </View>
              </View>

              <Text style={styles.description} numberOfLines={2}>
                {program.description}
              </Text>

              <View style={styles.highlightsContainer}>
                {program.highlights.slice(0, 2).map((highlight, index) => (
                  <View key={index} style={styles.highlight}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.highlightText} numberOfLines={1}>
                      {highlight}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.cardFooter}>
                <View style={styles.ratingContainer}>
                  <Star size={16} color="#F59E0B" fill="#F59E0B" />
                  <Text style={styles.ratingText}>4.8</Text>
                  <Text style={styles.ratingCount}>(124)</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={() => handleProgramDetails(program.id)}
                >
                  <Text style={styles.detailsButtonText}>Comenzar</Text>
                  <ChevronRight size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  filtersSection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  filterChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  activeFilter: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  programsContainer: {
    padding: 20,
    gap: 24,
  },
  programCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  imageContainer: {
    height: 200,
    width: '100%',
  },
  programImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    justifyContent: 'space-between',
  },
  levelBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  programNameContainer: {
    width: '100%',
  },
  programName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  programDetails: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginTop: 16,
    marginBottom: 16,
  },
  highlightsContainer: {
    gap: 8,
    marginBottom: 20,
  },
  highlight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6366F1',
    marginRight: 12,
  },
  highlightText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  ratingCount: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366F1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 6,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});