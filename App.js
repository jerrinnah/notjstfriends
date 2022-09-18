import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import CreatePostScreen from './src/screens/CreatePostScreen'
import Navigator from './src/navigation'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FeedScreen from './src/screens/FeedScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from './src/screens/ProfileScreen'
import { FontAwesome } from '@expo/vector-icons';
import UpdateProfileScreen from './src/screens/UpdateProfileScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate('Profile')}
                name="user"
                size={24}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Create Post"
          component={CreatePostScreen}
          options={{ title: 'Home ' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
