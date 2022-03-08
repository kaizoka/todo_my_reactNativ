import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './component/main';

export default function App() {
  return (
    <View style={styles.wrapp}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
  },
});
