// import { useEffect, useState } from 'react';
// import { View, ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { Asset } from 'expo-asset';
// import { WebView } from 'react-native-webview';
// import { Ionicons } from '@expo/vector-icons';

// const manualMap: Record<string, any> = {
//   hipertrofia: require('../../../assets/pdfs/10-mandamientos-de-la-hipertrofia.pdf'),
//   frecuencia: require('../../../assets/pdfs/Como-calcular-tu-frecuencia-cardiaca.pdf'),
//   entrenamiento: require('../../../assets/pdfs/Manual-de-entrenamiento.pdf'),
// };

// export default function PdfScreen() {
//   const { manualId } = useLocalSearchParams();
//   const router = useRouter();
//   const [pdfUri, setPdfUri] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadPdf = async () => {
//       if (typeof manualId !== 'string' || !(manualId in manualMap)) {
//         setPdfUri(null);
//         setLoading(false);
//         return;
//       }

//       try {
//         const asset = Asset.fromModule(manualMap[manualId]);
//         await asset.downloadAsync(); // Se asegura de que esté disponible localmente
//         setPdfUri(asset.localUri ?? null);
//       } catch (error) {
//         console.error('Error cargando PDF:', error);
//         setPdfUri(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPdf();
//   }, [manualId]);

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (!pdfUri) {
//     return (
//       <View style={styles.centered}>
//         <Text style={{ color: 'red' }}>PDF no encontrado</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.wrapper}>
//       <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="arrow-back" size={24} color="#007AFF" />
//         <Text style={styles.backText}>Volver</Text>
//       </TouchableOpacity>

//       <WebView
//         source={{ uri: pdfUri }}
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         useWebKit
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     paddingBottom: 0,
//   },
//   backText: {
//     fontSize: 16,
//     color: '#007AFF',
//     marginLeft: 8,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Ionicons } from '@expo/vector-icons';
// import { useState } from 'react';

// const manualMap: Record<string, string> = {
//   hipertrofia: 'https://drive.google.com/uc?export=download&id=1AZ1bUCFL33MUXkkIeohGy09G8qRfrcU4',
//   frecuencia: 'https://drive.google.com/uc?export=download&id=1MI9oYftyzO57EV5h8NyHg8fTcRzT-V9I',
//   entrenamiento: 'https://drive.google.com/uc?export=download&id=1bd8i6a5IIvF_JZjZqGq4LNFAT3IYbSDJ',
// };

// export default function PdfScreen() {
//   const { manualId } = useLocalSearchParams();
//   const router = useRouter();
  
//   const [isPdfLoaded, setIsPdfLoaded] = useState(false);  // Estado para controlar la visibilidad de la "X"

//   if (typeof manualId !== 'string' || !(manualId in manualMap)) {
//     return (
//       <View style={styles.centered}>
//         <Text style={{ color: 'red' }}>Manual no encontrado</Text>
//       </View>
//     );
//   }

//   const pdfUrl = manualMap[manualId];
//   const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

//   return (
//     <View style={styles.wrapper}>
//       {/* Mostrar la "X" solo cuando el PDF esté cargado */}
//       {isPdfLoaded && (
//         <TouchableOpacity style={styles.closeButton} onPress={() => router.replace('/learn/manuals')}>
//           <Ionicons name="close" size={26} color="black" />
//         </TouchableOpacity>
//       )}

//       {/* WebView para visualizar el PDF */}
//       <WebView
//         source={{ uri: viewerUrl }}
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         startInLoadingState
//         onLoad={() => setIsPdfLoaded(true)}  // Cuando el PDF se haya cargado, mostramos la "X"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 40,
//     right: 16,
//     zIndex: 10,
//     backgroundColor: '#D3D3D3', // Color de fondo gris
//     padding: 5, // Aumenté el padding para hacerlo más grande
//     borderRadius: 20,
//     elevation: 10,  // Sombra para Android (usando `elevation`)
//     shadowColor: '#D0DF00', // Sombra negra
//     shadowOffset: { width: 0, height: 0 }, // Desplazamiento de la sombra
//     shadowOpacity: 1, // Opacidad de la sombra
//     shadowRadius: 2,  // Radio de la sombra
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });








// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Ionicons } from '@expo/vector-icons';
// import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase';

// const manualMap: Record<string, string> = {
//   hipertrofia: '10-mandamientos-de-la-hipertrofia.pdf',
//   frecuencia: 'Como-calcular-tu-frecuencia-cardiaca.pdf',
//   entrenamiento: 'Manual-de-entrenamiento.pdf',
// };

// export default function PdfScreen() {
//   const { manualId } = useLocalSearchParams();
//   const router = useRouter();
//   const [pdfUrl, setPdfUrl] = useState<string | null>(null);

//   // Si el ID del manual no existe, mostramos un error
//   if (typeof manualId !== 'string' || !(manualId in manualMap)) {
//     return (
//       <View style={styles.centered}>
//         <Text style={{ color: 'red' }}>Manual no encontrado</Text>
//       </View>
//     );
//   }

//   // Obtener el nombre del archivo PDF basado en el ID del manual
//   const fileName = manualMap[manualId];

//   useEffect(() => {
//     const getPdfUrl = async () => {
//       // Construir la URL pública del archivo en Supabase Storage
//       const { data } = supabase.storage
//         .from('manuals') // Nombre del bucket 'manuals' en Supabase
//         .getPublicUrl(fileName);

//       if (!data || !data.publicUrl) {
//         console.log('Error al obtener URL del PDF');
//         return;
//       }

//       setPdfUrl(data.publicUrl); // Guardar la URL pública del archivo
//     };

//     getPdfUrl();
//   }, [fileName]);

//   // Si no tenemos la URL, mostramos un texto de carga
//   if (!pdfUrl) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.wrapper}>
     

//       {/* WebView para visualizar el PDF */}
//       <WebView
//         source={{ uri: pdfUrl }}
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         startInLoadingState
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 40,
//     right: 16,
//     zIndex: 10,
//     backgroundColor: '#D3D3D3', // Color de fondo gris
//     padding: 5, // Aumenté el padding para hacerlo más grande
//     borderRadius: 20,
//     elevation: 10,  // Sombra para Android (usando `elevation`)
//     shadowColor: '#D0DF00', // Sombra negra
//     shadowOffset: { width: 0, height: 0 }, // Desplazamiento de la sombra
//     shadowOpacity: 1, // Opacidad de la sombra
//     shadowRadius: 2,  // Radio de la sombra
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });









import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';  // Asegúrate de importar tu cliente de Supabase

const manualMap: Record<string, string> = {
  hipertrofia: '10-mandamientos-de-la-hipertrofia.pdf',
  frecuencia: 'Como-calcular-tu-frecuencia-cardiaca.pdf',
  entrenamiento: 'Manual-de-entrenamiento.pdf',
};

export default function PdfScreen() {
  const { manualId } = useLocalSearchParams();
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Si el ID del manual no existe, mostramos un error
  if (typeof manualId !== 'string' || !(manualId in manualMap)) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>Manual no encontrado</Text>
      </View>
    );
  }

  // Obtener el nombre del archivo PDF basado en el ID del manual
  const fileName = manualMap[manualId];

  useEffect(() => {
    const getPdfUrl = async () => {
      // Construir la URL pública del archivo en Supabase Storage
      const { data } = supabase.storage
        .from('manuals') // Nombre del bucket 'manuals' en Supabase
        .getPublicUrl(fileName);

      if (!data?.publicUrl) {
        console.log('Error al obtener URL del PDF');
        return;
      }

      // Modificar la URL para usar Google Docs Viewer (asegurando que funcione en Android e iOS)
      const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(data.publicUrl)}`;
      
      setPdfUrl(viewerUrl); // Guardar la URL modificada
    };

    getPdfUrl();
  }, [fileName]);

  // Si no tenemos la URL, mostramos un texto de carga
  if (!pdfUrl) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.wrapper}>
      {/* WebView para visualizar el PDF */}
      <WebView
        source={{ uri: pdfUrl }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});






// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Ionicons } from '@expo/vector-icons';
// import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase';  // Importamos el cliente de Supabase

// const manualMap: Record<string, string> = {
//   hipertrofia: '10-mandamientos-de-la-hipertrofia.pdf',
//   frecuencia: 'Como-calcular-tu-frecuencia-cardiaca.pdf',
//   entrenamiento: 'Manual-de-entrenamiento.pdf',
// };

// export default function PdfScreen() {
//   const { manualId } = useLocalSearchParams();
//   const router = useRouter();
//   const [pdfUrl, setPdfUrl] = useState<string | null>(null);
//   const [key, setKey] = useState(0);  // Clave para forzar la recarga del WebView

//   // Si el ID del manual no existe, mostramos un error
//   if (typeof manualId !== 'string' || !(manualId in manualMap)) {
//     return (
//       <View style={styles.centered}>
//         <Text style={{ color: 'red' }}>Manual no encontrado</Text>
//       </View>
//     );
//   }

//   const fileName = manualMap[manualId];

//   useEffect(() => {
//     const getPdfUrl = async () => {
//       const { data } = supabase.storage
//         .from('manuals') // Nombre del bucket 'manuals' en Supabase
//         .getPublicUrl(fileName);

//       if (!data?.publicUrl) {
//         console.log('Error al obtener URL del PDF');
//         return;
//       }

//       // Modificar la URL para usar Google Docs Viewer (asegurando que funcione en Android e iOS)
//       const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(data.publicUrl)}`;
//       setPdfUrl(viewerUrl);

//       // Aumentar la clave para forzar la recarga del WebView
//       setKey(prevKey => prevKey + 1);
//     };

//     getPdfUrl();
//   }, [fileName]);  // Se vuelve a ejecutar si cambia el `fileName`

//   // Si no tenemos la URL, mostramos un texto de carga
//   if (!pdfUrl) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.wrapper}>
//       {/* WebView para visualizar el PDF */}
//       <WebView
//         key={key}  // Cambiar la clave cada vez que la URL cambie
//         source={{ uri: pdfUrl }}
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         startInLoadingState
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 40,
//     right: 16,
//     zIndex: 10,
//     backgroundColor: '#D3D3D3', // Color de fondo gris
//     padding: 5, // Aumenté el padding para hacerlo más grande
//     borderRadius: 20,
//     elevation: 10,  // Sombra para Android (usando `elevation`)
//     shadowColor: '#D0DF00', // Sombra negra
//     shadowOffset: { width: 0, height: 0 }, // Desplazamiento de la sombra
//     shadowOpacity: 1, // Opacidad de la sombra
//     shadowRadius: 2,  // Radio de la sombra
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
