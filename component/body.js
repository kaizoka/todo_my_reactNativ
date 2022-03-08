import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Button } from 'react-native';
import PopupTime from './popupTime';

export default function Body() {
  let HIDDEN_POPUP = false

  const [hiddenTime, setHiddenTime] = useState(HIDDEN_POPUP)

  const clickHiddenTime = () => {
    if(hiddenTime) {
      setHiddenTime(false)
    } else {
      setHiddenTime(true)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Time</Text>
        <TouchableOpacity
          onPress={clickHiddenTime}
        >
          <Text>12 : 30</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input} 
          
          placeholder='write your title'
        />
        <TextInput 
          style={styles.input}
          placeholder='your body plan'
        />
        <Button 
          title='ADD'
        />
      </View>
      <PopupTime />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  text: {
      fontSize: 24,
  },
  input: {

  },
});
