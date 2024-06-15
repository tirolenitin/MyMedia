import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/Navigation/AppNavigation'
import { NativeBaseProvider } from 'native-base'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <NativeBaseProvider>
        <PaperProvider>
        <AppNavigation/>
        </PaperProvider>
    </NativeBaseProvider>
  )
}

export default App