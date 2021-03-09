// https://www.reactnative.express/app/persistence/asyncstorage




// 1
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import Input from './Input'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

export default function App() {
  const [name, setName] = useState('World')

  async function loadName() {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)

      if (name === null) return

      setName(name)
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  async function saveName(name) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)
      setName(name)
    } catch (e) {
      console.error('Failed to save name.')
    }
  }

  useEffect(() => {
    loadName()
  }, [])

  return (
    <View>
      <Input
        placeholder={'Type your name, hit enter, and refresh!'}
        onSubmitEditing={(value) => {
          saveName(value)
        }}
      />
      <Text style={styles.text}>Hello {name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: '#EEB',
  },
})

// 11
import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input({ placeholder, onSubmitEditing }) {
  const [text, setText] = useState('')

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={(value) => setText(value)}
      onSubmitEditing={() => {
        if (!text) return // Don't submit if empty

        onSubmitEditing(text)
        setText('')
      }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})