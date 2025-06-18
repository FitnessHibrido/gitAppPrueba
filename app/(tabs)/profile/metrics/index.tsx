import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, RefreshControl, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Camera, Scale, Ruler, Activity, Calendar, ChevronRight, Plus, ArrowLeft, RefreshCw, CircleAlert } from 'lucide-react-native';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LineChart } from 'react-native-chart-kit';
import { Platform } from 'react-native';
import { Modal } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;

interface BodyMetrics {
  id: string;
  date: string;
  weight?: number;
  height?: number;
  body_fat?: number;
  muscle_mass?: number;
  visceral_fat?: number;
  bone_mass?: number;
  metabolic_age?: number;
  hydration?: number;
}

interface BodyMeasurements {
  id: string;
  date: string;
  neck?: number;
  shoulders?: number;
  chest?: number;
  left_arm?: number;
  right_arm?: number;
  left_forearm?: number;
  right_forearm?: number;
  waist?: number;
  abdomen?: number;
  hips?: number;
  left_thigh?: number;
  right_thigh?: number;
  left_calf?: number;
  right_calf?: number;
}

interface ProgressPhoto {
  id: string;
  date: string;
  type: 'front' | 'back' | 'side';
  url: string;
}
  
const IOSDatePickerModal = ({
  visible,
  date,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  date: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}) => { 
  const [tempDate, setTempDate] = useState(date);

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <DateTimePicker
            value={tempDate}
            mode="date"
            display="spinner"
            textColor="black"
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                setTempDate(selectedDate);
              }
            }}            
          />
          <TouchableOpacity onPress={() => { 
              onConfirm(tempDate);
              onCancel();
            }} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function MetricsScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'metrics' | 'measurements' | 'photos'>('metrics');
  const [metrics, setMetrics] = useState<BodyMetrics[]>([]);
  const [measurements, setMeasurements] = useState<BodyMeasurements[]>([]);
  const [photos, setPhotos] = useState<ProgressPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<'weight' | 'muscle_mass' | 'body_fat'>('weight');
  const [selectedRange, setSelectedRange] = useState<'1_week' | '1_month' | '3_months' | '6_months' | '1_year'>('1_month');
  const [selectedMeasurement, setSelectedMeasurement] = useState<'neck'|'shoulders'|'chest'|'left_arm'|'right_arm'|'left_forearm'|'right_forearm'|'waist'|'abdomen'|'hips'|'left_thigh'|'right_thigh'|'left_calf'|'right_calf'>('chest');
  const [expandedCategory, setExpandedCategory] = useState<'parteSuperior'|'brazos'|'tronco'|'piernas'| null>(null);
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [filteredMetrics, setFilteredMetrics] = useState<BodyMetrics[]>([]);
  const [startDateMeasurements, setStartDateMeasurements] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [endDateMeasurements, setEndDateMeasurements] = useState(new Date());
  const [showStartPickerMeasurements, setShowStartPickerMeasurements] = useState(false);
  const [showEndPickerMeasurements, setShowEndPickerMeasurements] = useState(false);
  const [filteredMeasurements, setFilteredMeasurements] = useState<BodyMeasurements[]>([]);
  const [selectedRangeMeasurements, setSelectedRangeMeasurements] = useState<'1_week' | '1_month' | '3_months' | '6_months' | '1_year'>('1_month');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'front' | 'side' | 'back'>('all');
  const [filteredPhotos, setFilteredPhotos] = useState<ProgressPhoto[]>([]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const handleTimeRangeChange = (range: '1_week' | '1_month' | '3_months' | '6_months' | '1_year') => {
    const currentDate = new Date();
    let newStartDate = new Date();
  
    switch (range) {
      case '1_week':
        newStartDate.setDate(currentDate.getDate() - 7);
        break;
      case '1_month':
        newStartDate.setMonth(currentDate.getMonth() - 1);
        break;
      case '3_months':
        newStartDate.setMonth(currentDate.getMonth() - 3);
        break;
      case '6_months':
        newStartDate.setMonth(currentDate.getMonth() - 6);
        break;
      case '1_year':
        newStartDate.setFullYear(currentDate.getFullYear() - 1);
        break;
      default:
        newStartDate = new Date();
    }
  
    setStartDate(newStartDate);
    setEndDate(currentDate);
    setSelectedRange(range);
  };
  
  const handleTimeRangeChangeMeasurements = (range: '1_week' | '1_month' | '3_months' | '6_months' | '1_year') => {
    const endDate = new Date();
    let startDate = new Date();
  
    // Ajustamos la hora para evitar problemas de zona horaria
    endDate.setHours(23, 59, 59, 999);
    startDate.setHours(0, 0, 0, 0);
  
    switch (range) {
      case '1_week':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case '1_month':
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case '3_months':
        startDate.setMonth(endDate.getMonth() - 3);
        break;
      case '6_months':
        startDate.setMonth(endDate.getMonth() - 6);
        break;
      case '1_year':
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        startDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
    }
  
    setStartDateMeasurements(startDate);
    setEndDateMeasurements(endDate);
    setSelectedRangeMeasurements(range);
  };

  const handleWebPickerFallback = (setShow: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (Platform.OS === 'web') {
      Alert.alert('Información', 'La selección de fecha no está disponible en la versión web. Usa la app móvil.');
      setShow(false);
    }
  };
    
  useEffect(() => {
    const filterData = () => {
      if (!measurements.length) return;
      
      const filtered = measurements.filter((m) => {
        try {
          const measurementDate = new Date(m.date);
          return measurementDate >= new Date(startDateMeasurements) && 
                 measurementDate <= new Date(endDateMeasurements);
        } catch (error) {
          console.error('Error parsing date:', m.date, error);
          return false;
        }
      });
      
      setFilteredMeasurements(filtered);
    };
  
    filterData();
  }, [startDateMeasurements, endDateMeasurements, measurements]);

  useEffect(() => {
    setFilteredMetrics(
      metrics.filter((m) => {
        const metricDate = new Date(m.date);
        return metricDate >= startDate && metricDate <= endDate;
      })
    );
  }, [startDate, endDate, metrics]);
  
  useEffect(() => {
    const filterPhotos = () => {
      if (selectedFilter === 'all') {
        setFilteredPhotos(photos);
      } else {
        setFilteredPhotos(photos.filter((photo) => photo.type === selectedFilter));
      }
    };

    filterPhotos();
  }, [selectedFilter, photos]);

  useEffect(() => {
    if (showStartPicker && Platform.OS === 'web') {
      handleWebPickerFallback(setShowStartPicker);
    }
  }, [showStartPicker]);
  
  useEffect(() => {
    if (showEndPicker && Platform.OS === 'web') {
      handleWebPickerFallback(setShowEndPicker);
    }
  }, [showEndPicker]);

  const fetchData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Fetch metrics
      const { data: metricsData, error: metricsError } = await supabase
        .from('body_metrics')
        .select('*')
        .eq('profile_id', user.id)
        .order('date', { ascending: false });

      if (metricsError) {
        throw metricsError;
      }
      
      setMetrics(metricsData || []);

      // Fetch measurements
      const { data: measurementsData, error: measurementsError } = await supabase
        .from('body_measurements')
        .select('*')
        .eq('profile_id', user.id)
        .order('date', { ascending: false });

      if (measurementsError) {
        throw measurementsError;
      }
      
      setMeasurements(measurementsData || []);

      // Fetch photos
      const { data: photosData, error: photosError } = await supabase
        .from('progress_photos')
        .select('*')
        .eq('profile_id', user.id)
        .order('date', { ascending: false });

      if (photosError) {
        throw photosError;
      }
      
      setPhotos(photosData || []);

    } catch (error) {
      console.error('Error fetching data:', error);
      setError('No se pudieron cargar los datos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const chartLabels = filteredMetrics.map((m) =>
    new Date(m.date).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'})
  );
  
  const chartData = filteredMetrics.map((m) => Number(m[selectedMetric as keyof BodyMetrics]) || 0);

  const chartLabelsm = filteredMeasurements.map((m) =>
    new Date(m.date).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'})
  );
  
  const chartDatam = filteredMeasurements.map((m) => 
    Number(m[selectedMeasurement as keyof BodyMeasurements]) || 0
  );

  const getMeasurementLabel = (key: string): string => {
    const labels: Record<string, string> = {
      'neck': 'Cuello',
      'shoulders': 'Hombros',
      'chest': 'Pecho',
      'left_arm': 'Bíceps Izquierdo',
      'right_arm': 'Bíceps Derecho',
      'left_forearm': 'Antebrazo Izquierdo',
      'right_forearm': 'Antebrazo Derecho',
      'waist': 'Cintura',
      'abdomen': 'Abdomen',
      'hips': 'Cadera',
      'left_thigh': 'Muslo Izquierdo',
      'right_thigh': 'Muslo Derecho',
      'left_calf': 'Gemelo Izquierdo',
      'right_calf': 'Gemelo Derecho'
    };
    return labels[key] || key;
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noAuthContainer}>
          <CircleAlert size={48} color="#6B7280" />
          <Text style={styles.noAuthTitle}>Inicia sesión para ver tus métricas</Text>
          <Text style={styles.noAuthText}>
            Necesitas iniciar sesión para acceder a tus datos de progreso físico
          </Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Métricas Corporales</Text>
        <Text style={styles.subtitle}>Seguimiento de tu progreso físico</Text>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'metrics' && styles.activeTab]}
          onPress={() => setActiveTab('metrics')}
        >
          <Text style={[styles.tabText, activeTab === 'metrics' && styles.activeTabText]}>
            Métricas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'measurements' && styles.activeTab]}
          onPress={() => setActiveTab('measurements')}
        >
          <Text style={[styles.tabText, activeTab === 'measurements' && styles.activeTabText]}>
            Medidas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'photos' && styles.activeTab]}
          onPress={() => setActiveTab('photos')}
        >
          <Text style={[styles.tabText, activeTab === 'photos' && styles.activeTabText]}>
            Fotos
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#3B82F6']}
            tintColor="#3B82F6"
          />
        }
      >
        {loading && !refreshing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3B82F6" />
            <Text style={styles.loadingText}>Cargando tus datos...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <CircleAlert size={48} color="#EF4444" />
            <Text style={styles.errorTitle}>No pudimos cargar tus datos</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
              <RefreshCw size={20} color="#3B82F6" />
              <Text style={styles.retryButtonText}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {activeTab === 'metrics' && (
              <View style={styles.tabContent}>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => router.push('/profile/metrics/add')}
                >
                  <Plus size={20} color="#3B82F6" />
                  <Text style={styles.addButtonText}>Añadir Métricas</Text>
                </TouchableOpacity>

                <View style={styles.periodSelector}>
                  <Text style={styles.periodTitle}>Periodo de historial a comparar</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                    {(['1_week', '1_month', '3_months', '6_months', '1_year'] as const).map((range) => (
                      <TouchableOpacity
                        key={range}
                        style={[styles.rangeButton, selectedRange === range && styles.activeRangeButton]}
                        onPress={() => handleTimeRangeChange(range)}
                      >
                        <Text style={[styles.rangeButtonText, selectedRange === range && styles.activeRangeButtonText]}>
                          {range === '1_week' ? '1 Semana' :
                          range === '1_month' ? '1 Mes' :
                          range === '3_months' ? '3 Meses' :
                          range === '6_months' ? '6 Meses' : '1 Año'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.sectionLabel}>Selecciona una métrica para comparar:</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                    {(['weight', 'muscle_mass', 'body_fat'] as const).map((metric) => (
                      <TouchableOpacity
                        key={metric}
                        style={[styles.filterChip, selectedMetric === metric && styles.activeFilter]}
                        onPress={() => setSelectedMetric(metric)}
                      >
                        <Text style={[styles.filterText, selectedMetric === metric && styles.activeFilterText]}>
                          {metric === 'weight' ? 'Peso' : metric === 'muscle_mass' ? 'Masa Muscular' : 'Grasa Corporal'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  {Platform.OS === 'ios' && (
                    <>
                      <IOSDatePickerModal
                        visible={showStartPicker}
                        date={startDate}
                        onConfirm={(date) => {
                          setShowStartPicker(false);
                          setStartDate(date);
                        }}
                        onCancel={() => setShowStartPicker(false)}
                      />
                      <IOSDatePickerModal
                        visible={showEndPicker}
                        date={endDate}
                        onConfirm={(date) => {
                          setShowEndPicker(false);
                          setEndDate(date);
                        }}
                        onCancel={() => setShowEndPicker(false)}
                      />
                    </>
                  )}

                  <Text style={styles.sectionLabel}>Selecciona un rango de fechas:</Text>
                  <View style={styles.datePickerRow}>
                    <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateButton}>
                      <Text style={styles.dateButtonText}>Desde: {startDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateButton}>
                      <Text style={styles.dateButtonText}>Hasta: {endDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                  </View>

                  {filteredMetrics.length > 0 ? (
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.chartTitle}>
                        {selectedMetric === 'weight' ? 'Evolución del Peso' : 
                         selectedMetric === 'muscle_mass' ? 'Evolución de Masa Muscular' : 
                         'Evolución de Grasa Corporal'}
                      </Text>
                      <LineChart
                        data={{
                          labels: chartLabels.length > 5 ? 
                            chartLabels.filter((_, i) => i % Math.ceil(chartLabels.length / 5) === 0) : 
                            chartLabels,
                          datasets: [
                            {
                              data: chartData.length > 0 ? chartData : [0],
                              color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
                              strokeWidth: 2
                            },
                          ],
                        }}
                        width={CARD_WIDTH}
                        height={220}
                        yAxisSuffix={selectedMetric === 'body_fat' ? '%' : 'kg'}
                        chartConfig={{
                          backgroundColor: '#fff',
                          backgroundGradientFrom: '#fff',
                          backgroundGradientTo: '#fff',
                          decimalPlaces: selectedMetric === 'body_fat' ? 1 : 0,
                          color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
                          labelColor: () => '#111827',
                          style: {
                            borderRadius: 16,
                          },
                          propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#3B82F6'
                          }
                        }}
                        style={{
                          borderRadius: 16,
                          marginVertical: 8,
                          paddingRight: 16,
                        }}
                        bezier
                      />
                    </View>
                  ) : (
                    <View style={styles.noDataContainer}>
                      <Text style={styles.noDataText}>
                        No hay datos en el rango de fechas seleccionado.
                      </Text>
                    </View>
                  )}

                  {showStartPicker && Platform.OS !== 'android' && (
                    <DateTimePicker
                      value={startDate}
                      style={{ width: "100%", alignSelf: "center" }} 
                      mode="date"
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={(event, selectedDate) => {
                        setShowStartPicker(false);
                        if (selectedDate) setStartDate(selectedDate);
                      }}
                    />
                  )}

                  {showEndPicker && Platform.OS !== 'android' && (
                    <DateTimePicker
                      value={endDate}
                      style={{ width: "100%", alignSelf: "center"}} 
                      mode="date"
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={(event, selectedDate) => {
                        setShowEndPicker(false);
                        if (selectedDate) setEndDate(selectedDate);
                      }}
                    />
                  )}
                </View>

                {metrics.length === 0 ? (
                  <View style={styles.emptyState}>
                    <Scale size={48} color="#D1D5DB" />
                    <Text style={styles.emptyStateTitle}>Sin métricas registradas</Text>
                    <Text style={styles.emptyStateText}>
                      Añade tus primeras métricas para comenzar a hacer seguimiento de tu progreso
                    </Text>
                  </View>
                ) : (
                  metrics.map((metric) => (
                    <View key={metric.id} style={styles.metricCard}>
                      <View style={styles.cardHeader}>
                        <Calendar size={16} color="#6B7280" />
                        <Text style={styles.dateText}>
                          {new Date(metric.date).toLocaleDateString()}
                        </Text>
                      </View>

                      <View style={styles.metricsGrid}>
                        {metric.weight && (
                          <View style={styles.metricItem}>
                            <Scale size={20} color="#3B82F6" />
                            <Text style={styles.metricValue}>{metric.weight ? `${metric.weight} kg` : 'N/A'}</Text>
                            <Text style={styles.metricLabel}>Peso</Text>
                          </View>
                        )}

                        {metric.body_fat && (
                          <View style={styles.metricItem}>
                            <Activity size={20} color="#22C55E" />
                            <Text style={styles.metricValue}>{metric.body_fat}%</Text>
                            <Text style={styles.metricLabel}>Grasa Corporal</Text>
                          </View>
                        )}

                        {metric.muscle_mass && (
                          <View style={styles.metricItem}>
                            <Ruler size={20} color="#F59E0B" />
                            <Text style={styles.metricValue}>{metric.muscle_mass} kg</Text>
                            <Text style={styles.metricLabel}>Masa Muscular</Text>
                          </View>
                        )}
                      </View>

                      <TouchableOpacity 
                        style={styles.viewDetailsButton}
                        onPress={() => router.push({
                          pathname: '/profile/metrics/details',
                          params: { id: metric.id }
                        })}
                      >
                        <Text style={styles.viewDetailsText}>Ver Detalles</Text>
                        <ChevronRight size={16} color="#3B82F6" />
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </View>
            )}

            {activeTab === 'measurements' && (
              <View style={styles.tabContent}>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => router.push('/profile/metrics/add-measurement')}
                >
                  <Plus size={20} color="#3B82F6" />
                  <Text style={styles.addButtonText}>Añadir Medidas</Text>
                </TouchableOpacity>

                <View style={styles.periodSelector}>
                  <Text style={styles.periodTitle}>Periodo de historial a comparar</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                    {(['1_week', '1_month', '3_months', '6_months', '1_year'] as const).map((range) => (
                      <TouchableOpacity
                        key={range}
                        style={[styles.rangeButton, selectedRangeMeasurements === range && styles.activeRangeButton]}
                        onPress={() => handleTimeRangeChangeMeasurements(range)}
                      >
                        <Text style={[styles.rangeButtonText, selectedRangeMeasurements === range && styles.activeRangeButtonText]}>
                          {range === '1_week' ? '1 Semana' :
                            range === '1_month' ? '1 Mes' :
                            range === '3_months' ? '3 Meses' :
                            range === '6_months' ? '6 Meses' : '1 Año'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.sectionLabel}>Selecciona una medida para comparar:</Text>

                  {/* Filtro Parte Superior */}
                  <TouchableOpacity 
                    style={[styles.filterChip, expandedCategory === 'parteSuperior' && styles.activeFilter]} 
                    onPress={() => setExpandedCategory(expandedCategory === 'parteSuperior' ? null : 'parteSuperior')}
                  >
                    <Text style={[styles.filterText, expandedCategory === 'parteSuperior' && styles.activeFilterText]}>Parte Superior</Text>
                  </TouchableOpacity>

                  {/* Desplegar las opciones de Cuello, Hombros y Pecho si está expandido */}
                  {expandedCategory === 'parteSuperior' && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                      {(['neck', 'shoulders', 'chest'] as const).map((measurement) => (
                        <TouchableOpacity
                          key={measurement}
                          style={[styles.filterChip, selectedMeasurement === measurement && styles.activeFilter]}
                          onPress={() => setSelectedMeasurement(measurement)}
                        >
                          <Text style={[styles.filterText, selectedMeasurement === measurement && styles.activeFilterText]}>
                            {getMeasurementLabel(measurement)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  {/* Filtro Brazos */}
                  <TouchableOpacity 
                    style={[styles.filterChip, expandedCategory === 'brazos' && styles.activeFilter]} 
                    onPress={() => setExpandedCategory(expandedCategory === 'brazos' ? null : 'brazos')}
                  >
                    <Text style={[styles.filterText, expandedCategory === 'brazos' && styles.activeFilterText]}>Brazos</Text>
                  </TouchableOpacity>

                  {/* Desplegar las opciones de brazos si está expandido */}
                  {expandedCategory === 'brazos' && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                      {(['left_arm', 'right_arm', 'left_forearm','right_forearm'] as const).map((measurement) => (
                        <TouchableOpacity
                          key={measurement}
                          style={[styles.filterChip, selectedMeasurement === measurement && styles.activeFilter]}
                          onPress={() => setSelectedMeasurement(measurement)}
                        >
                          <Text style={[styles.filterText, selectedMeasurement === measurement && styles.activeFilterText]}>
                            {getMeasurementLabel(measurement)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  {/* Filtro tronco */}
                  <TouchableOpacity 
                    style={[styles.filterChip, expandedCategory === 'tronco' && styles.activeFilter]} 
                    onPress={() => setExpandedCategory(expandedCategory === 'tronco' ? null : 'tronco')}
                  >
                    <Text style={[styles.filterText, expandedCategory === 'tronco' && styles.activeFilterText]}>Tronco</Text>
                  </TouchableOpacity>

                  {/* Desplegar las opciones de tronco si está expandido */}
                  {expandedCategory === 'tronco' && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                      {(['waist', 'abdomen', 'hips'] as const).map((measurement) => (
                        <TouchableOpacity
                          key={measurement}
                          style={[styles.filterChip, selectedMeasurement === measurement && styles.activeFilter]}
                          onPress={() => setSelectedMeasurement(measurement)}
                        >
                          <Text style={[styles.filterText, selectedMeasurement === measurement && styles.activeFilterText]}>
                            {getMeasurementLabel(measurement)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  {/* Filtro piernas */}
                  <TouchableOpacity 
                    style={[styles.filterChip, expandedCategory === 'piernas' && styles.activeFilter]} 
                    onPress={() => setExpandedCategory(expandedCategory === 'piernas' ? null : 'piernas')}
                  >
                    <Text style={[styles.filterText, expandedCategory === 'piernas' && styles.activeFilterText]}>Piernas</Text>
                  </TouchableOpacity>

                  {/* Desplegar las opciones de piernas si está expandido */}
                  {expandedCategory === 'piernas' && (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                      {(['left_thigh', 'right_thigh', 'left_calf','right_calf'] as const).map((measurement) => (
                        <TouchableOpacity
                          key={measurement}
                          style={[styles.filterChip, selectedMeasurement === measurement && styles.activeFilter]}
                          onPress={() => setSelectedMeasurement(measurement)}
                        >
                          <Text style={[styles.filterText, selectedMeasurement === measurement && styles.activeFilterText]}>
                            {getMeasurementLabel(measurement)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}

                  {Platform.OS === 'ios' && (
                    <>
                      <IOSDatePickerModal
                        visible={showStartPickerMeasurements}
                        date={startDateMeasurements}
                        onConfirm={(date) => {
                          setShowStartPickerMeasurements(false);
                          setStartDateMeasurements(date);
                        }}
                        onCancel={() => setShowStartPickerMeasurements(false)}
                      />
                      <IOSDatePickerModal
                        visible={showEndPickerMeasurements}
                        date={endDateMeasurements}
                        onConfirm={(date) => {
                          setShowEndPickerMeasurements(false);
                          setEndDateMeasurements(date);
                        }}
                        onCancel={() => setShowEndPickerMeasurements(false)}
                      />
                    </>
                  )}

                  <Text style={styles.sectionLabel}>Selecciona un rango de fechas:</Text>
                  <View style={styles.datePickerRow}>
                    <TouchableOpacity onPress={() => setShowStartPickerMeasurements(true)} style={styles.dateButton}>
                      <Text style={styles.dateButtonText}>Desde: {startDateMeasurements.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowEndPickerMeasurements(true)} style={styles.dateButton}>
                      <Text style={styles.dateButtonText}>Hasta: {endDateMeasurements.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                  </View>

                  {filteredMeasurements.length > 0 ? (
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles.chartTitle}>
                        Progreso de {getMeasurementLabel(selectedMeasurement)}
                      </Text>
                      <LineChart
                        data={{
                          labels: chartLabelsm.length > 5 ? 
                            chartLabelsm.filter((_, i) => i % Math.ceil(chartLabelsm.length / 5) === 0) : 
                            chartLabelsm,
                          datasets: [
                            {
                              data: chartDatam.length > 0 ? chartDatam : [0],
                              color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
                              strokeWidth: 2
                            },
                          ],
                        }}
                        width={CARD_WIDTH}
                        height={220}
                        yAxisSuffix={'cm'}
                        chartConfig={{
                          backgroundColor: '#fff',
                          backgroundGradientFrom: '#fff',
                          backgroundGradientTo: '#fff',
                          decimalPlaces: 0,
                          color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
                          labelColor: () => '#111827',
                          style: {
                            borderRadius: 16,
                          },
                          propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#3B82F6'
                          }
                        }}
                        style={{
                          borderRadius: 16,
                          marginVertical: 8,
                          paddingRight: 16,
                        }}
                        bezier
                      />
                    </View>
                  ) : (
                    <View style={styles.noDataContainer}>
                      <Text style={styles.noDataText}>
                        No hay datos en el rango de fechas seleccionado.
                      </Text>
                    </View>
                  )}
                </View>

                {measurements.length === 0 ? (
                  <View style={styles.emptyState}>
                    <Ruler size={48} color="#D1D5DB" />
                    <Text style={styles.emptyStateTitle}>Sin medidas registradas</Text>
                    <Text style={styles.emptyStateText}>
                      Añade tus primeras medidas para comenzar a hacer seguimiento de tu progreso
                    </Text>
                  </View>
                ) : (
                  measurements.map((measurement) => (
                    <View key={measurement.id} style={styles.measurementCard}>
                      <View style={styles.cardHeader}>
                        <Calendar size={16} color="#6B7280" />
                        <Text style={styles.dateText}>
                          {new Date(measurement.date).toLocaleDateString()}
                        </Text>
                      </View>

                      <View style={styles.measurementsGrid}>
                        {measurement.chest && (
                          <View style={styles.measurementItem}>
                            <Text style={styles.measurementValue}>{measurement.chest} cm</Text>
                            <Text style={styles.measurementLabel}>Pecho</Text>
                          </View>
                        )}

                        {measurement.waist && (
                          <View style={styles.measurementItem}>
                            <Text style={styles.measurementValue}>{measurement.waist} cm</Text>
                            <Text style={styles.measurementLabel}>Cintura</Text>
                          </View>
                        )}

                        {measurement.hips && (
                          <View style={styles.measurementItem}>
                            <Text style={styles.measurementValue}>{measurement.hips} cm</Text>
                            <Text style={styles.measurementLabel}>Cadera</Text>
                          </View>
                        )}
                      </View>

                      <TouchableOpacity 
                        style={styles.viewDetailsButton}
                        onPress={() => router.push({
                          pathname: '/profile/metrics/measurement-details',
                          params: { id: measurement.id }
                        })}
                      >
                        <Text style={styles.viewDetailsText}>Ver Detalles</Text>
                        <ChevronRight size={16} color="#3B82F6" />
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </View>
            )}

            {activeTab === 'photos' && (
              <View style={styles.tabContent}>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => router.push('/profile/camera')}
                >
                  <Camera size={20} color="#3B82F6" />
                  <Text style={styles.addButtonText}>Nueva Foto</Text>
                </TouchableOpacity>

                {/* Filtro de fotos */}
                <View style={styles.filterContainer}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
                    {['all', 'front', 'side', 'back'].map((type) => (
                      <TouchableOpacity
                        key={type}
                        style={[styles.rangeButton, selectedFilter === type && styles.activeRangeButton]}
                        onPress={() => setSelectedFilter(type as 'all' | 'front' | 'side' | 'back')}
                      >
                        <Text style={[styles.rangeButtonText, selectedFilter === type && styles.activeRangeButtonText]}>
                          {type === 'all' ? 'Todos' : 
                           type === 'front' ? 'Frontal' : 
                           type === 'side' ? 'Lateral' : 'Posterior'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                {/* Mostrar fotos filtradas */}
                {photos.length === 0 ? (
                  <View style={styles.emptyState}>
                    <Camera size={48} color="#D1D5DB" />
                    <Text style={styles.emptyStateTitle}>Sin Fotos</Text>
                    <Text style={styles.emptyStateText}>
                      Añade fotos para hacer un seguimiento visual de tu progreso
                    </Text>
                  </View>
                ) : filteredPhotos.length > 0 ? (
                  <View style={styles.photosGrid}>
                    {filteredPhotos.map((photo) => (
                      <TouchableOpacity
                        key={photo.id}
                        style={styles.photoCard}
                        onPress={() => router.push({
                          pathname: '/profile/metrics/photo-compare',
                          params: { id: photo.id }
                        })}
                      >
                        <Image
                          source={{ uri: photo.url }}
                          style={styles.photoImage}
                        />
                        <View style={styles.photoOverlay}>
                          <Text style={styles.photoType}>
                            {photo.type === 'front' ? 'Frontal' : 
                             photo.type === 'side' ? 'Lateral' : 'Posterior'}
                          </Text>
                          <Text style={styles.photoDate}>
                            {new Date(photo.date).toLocaleDateString()}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : (
                  <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>
                      No hay fotos del tipo seleccionado.
                    </Text>
                  </View>
                )}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
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
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#EFF6FF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#3B82F6',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    padding: 20,
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  errorContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    color: '#6B7280',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  retryButtonText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },
  noAuthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noAuthTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  noAuthText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    gap: 8,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  metricCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 16,
  },
  metricItem: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  metricLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginTop: 16,
  },
  viewDetailsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
  measurementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  measurementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  measurementItem: {
    flex: 1,
    minWidth: '30%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
  },
  periodSelector: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 12,
  },
  periodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  measurementValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  measurementLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoCard: {
    width: (CARD_WIDTH - 12) / 2,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  photoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  photoType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  photoDate: {
    fontSize: 12,
    color: '#F3F4F6',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  noDataContainer: {
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  noDataText: {
    color: '#6B7280',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    marginTop: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  datePickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 8,
  },
  dateButton: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  filterChip: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 8,
  },
  activeFilter: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  filterText: {
    color: '#6B7280',
    fontWeight: '600',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#3B82F6',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    maxWidth: 420,
    overflow: 'hidden',
    alignItems: 'center',
  },
  modalCloseButton: {
    marginTop: 12,
    alignSelf: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  rangeButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeRangeButton: {
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
  },
  rangeButtonText: {
    color: '#6B7280',
    fontWeight: '600',
    fontSize: 14,
  },
  activeRangeButtonText: {
    color: '#3B82F6',
  },
  filterContainer: {
    marginBottom: 16,
  }
});