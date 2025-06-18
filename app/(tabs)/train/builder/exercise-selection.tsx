import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Search, Plus, Dumbbell, RefreshCw } from 'lucide-react-native';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// Fallback exercise data in case the database fetch fails
const fallbackExercises = [
  { id: '1', name: 'Sentadilla', muscle: 'Piernas' },
  { id: '2', name: 'Press Banca', muscle: 'Pecho' },
  { id: '3', name: 'Peso Muerto', muscle: 'Espalda' },
  { id: '4', name: 'Press Militar', muscle: 'Hombros' },
  { id: '5', name: 'Curl de Bíceps', muscle: 'Brazos' },
  { id: '6', name: 'Extensiones de Tríceps', muscle: 'Brazos' },
  { id: '7', name: 'Remo', muscle: 'Espalda' },
  { id: '8', name: 'Elevaciones Laterales', muscle: 'Hombros' },
  { id: '9', name: 'Zancadas', muscle: 'Piernas' },
  { id: '10', name: 'Crunch', muscle: 'Abdominales' },
];

export default function ExerciseSelectionScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [exercises, setExercises] = useState(fallbackExercises);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch from program_exercises table
      const { data, error } = await supabase
        .from('program_exercises')
        .select('id, name, modality, muscle, submuscle, equipment')
        .order('name');

      if (error) throw error;

      // Transform data to match our expected format
      const formattedExercises = data.map(exercise => ({
        id: exercise.id,
        name: exercise.name,
        muscle: exercise.muscle || exercise.modality || 'General',
        equipment: exercise.equipment,
        submuscle: exercise.submuscle,
      }));

      // Remove duplicates by name
      const uniqueExercises = Array.from(
        new Map(formattedExercises.map(item => [item.name, item])).values()
      );

      setExercises(uniqueExercises.length > 0 ? uniqueExercises : fallbackExercises);
    } catch (err) {
      console.error('Error fetching exercises:', err);
      setError('No se pudieron cargar los ejercicios');
      setExercises(fallbackExercises);
    } finally {
      setLoading(false);
    }
  };

  const filteredExercises = exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (exercise.muscle && exercise.muscle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelectExercise = (exercise) => {
    // Pass the selected exercise back to the builder screen
    router.push({
      pathname: '/train/builder',
      params: { selectedExercise: JSON.stringify(exercise) }
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ejercicios..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize="none"
          />
        </View>
      </View>

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchExercises}>
            <RefreshCw size={16} color="#3B82F6" />
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.exerciseItem}
              onPress={() => handleSelectExercise(item)}
            >
              <View style={styles.exerciseInfo}>
                <View style={styles.exerciseIconContainer}>
                  <Dumbbell size={20} color="#3B82F6" />
                </View>
                <View>
                  <Text style={styles.exerciseName}>{item.name}</Text>
                  <Text style={styles.exerciseMuscle}>{item.muscle}</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => handleSelectExercise(item)}
              >
                <Plus size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No se encontraron ejercicios que coincidan con tu búsqueda
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#111827',
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  exerciseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  exerciseIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  exerciseMuscle: {
    fontSize: 14,
    color: '#6B7280',
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#EF4444',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 8,
  },
  retryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
  },
});