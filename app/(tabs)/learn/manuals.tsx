import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';
import { manuals } from '@/constants/manuales';


export default function ManualsScreen() {
  const router = useRouter();

  const handleOpenManual = (manualId: string, title: string) => {
    router.push(`/learn/pdf?manualId=${manualId}&title=${encodeURIComponent(title)}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {manuals.map((manual) => (
          <TouchableOpacity
            key={manual.id}
            style={styles.manualCard}
            onPress={() => handleOpenManual(manual.id, manual.title)}
          >
            <Image source={manual.image} style={styles.manualImage} />
            <View style={styles.overlay} />

            <View style={styles.content}>
              <View style={styles.header}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{manual.title}</Text>
                </View>
                <Text style={styles.description}>{manual.description}</Text>
              </View>

              <TouchableOpacity 
                style={styles.readButton}
                onPress={() => handleOpenManual(manual.id, manual.title)}
              >                 
                <Text style={styles.readButtonText}>Leer Manual</Text>
                <ChevronRight size={20} color="#3B82F6" />
              </TouchableOpacity>
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
    backgroundColor: '#F9FAFB',
  },
  manualCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  manualImage: {
    width: '100%',
    height: 200,
  },  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 200,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginRight: 12,
  },
  typeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  typeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  readButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  readButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
});
