import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import FeedPost from '../components/FeedPost'
import posts from '../../assets/data/posts.json'
import { FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png'

const FeedScreen = () => {
  const navigation = useNavigation()

  const createPost = () => {
    navigation.navigate('Create Post')
  }
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
          showsVerticalScrollIndicator={false}
          
          
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  )
}

export default FeedScreen

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
})
