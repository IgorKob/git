import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import logo from './assets/logo.png'; 

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
      <Image
        source={{ uri: 'asset:/app_icon.png' }}
        style={{ width: 40, height: 40 }}
      />
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache'
          },
          body: 'Your Body goes here'
        }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});


// 2 background-image: url();
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);