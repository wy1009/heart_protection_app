import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CommentView from '../CommentView'

const { Navigator, Screen } = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Comment" component={CommentView}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default App
