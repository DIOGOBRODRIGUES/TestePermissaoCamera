import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {Camera} from 'expo-camera'
import { useEffect, useState } from 'react';

export default function App() {

  const [hasCameraPermession, setHasCameraPermission] = useState(null)

  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status==='granted');
    })();
  }, []);

  if(hasCameraPermession === null){
    return <View style={styles.container}>
      <Text>Requesting camera Permission...</Text>
    </View>
  }

  if (hasCameraPermession === false ){
    return <View style={styles.container}>
      <Text> No acess to Camera</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      <Text>Camera Permission granted !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
