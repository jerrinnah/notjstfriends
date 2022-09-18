import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LikeImage from '../../assets/images/like.png'
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const post1 = {
  id: 'p1',
  createdAt: '19 m',
  User: {
    id: 'u1',
    image:
      'https://media-exp1.licdn.com/dms/image/D4E35AQGeDylqf9rGHg/profile-framedphoto-shrink_400_400/0/1628194277294?e=1664107200&v=beta&t=tv_95_LFRaK9e93_ZEQ20qIgwWlJoklUso4Nkghbb9E',
    name: 'Jerri N',
  },
  description:
    "Mhi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  numberOfLikes: 11,
  numberOfShares: 2,
}

const post2 = {
  id: 'p2',
  createdAt: '10 m',
  User: {
    id: 'u2',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    name: 'Elon Musk',
  },
  description: 'Today we launched another rocket 🚀',
  numberOfLikes: 11,
  numberOfShares: 2,
}
const post3 = {
  id: 'p2',
  createdAt: '10 m',
  User: {
    id: 'u2',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
    name: 'Jeff',
  },
  description: 'View from my office 😍',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/5.jpeg',
  numberOfLikes: 11,
  numberOfShares: 2,
}

const FeedPost = ({ post }) => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Post Header with details about the author */}
        <View style={styles.header}>
          <Image source={{ uri: post.image }} style={styles.profileimage} />
        </View>

        {/* Post Header with details about the author */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile", { id: post.postUserId })}>
          <View style={styles.header}>
            <Image
              source={{ uri: post.User.image }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.name}>{post.User.name}</Text>
              <Text style={styles.subtitle}>{post.createdAt}</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={18}
              color="gray"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        {/* Post body with description and image */}
        <Text style={styles.description}>{post.description}</Text>
        {post.image && (
          <Image
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        {/* Post footer with likes and button */}
        <View style={styles.footer}>
          {/* Stats row */}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Elon Musk and {post.numberOfLikes} others
            </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>

          {/* Buttons row */}
          <View style={styles.buttonsRow}>
            {/* Like button */}
            <View style={styles.iconButton}>
              <AntDesign name="like2" size={18} color="gray" />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            {/* Comment button */}
            <View style={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={16} color="gray" />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            {/* Share button */}
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color="gray"
              />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default FeedPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:100,
  },
  post: {
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    height: 50,
    width: 50,
    marginLeft: 'auto',
  },

  //Body
  description: {
    lineHeight: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },

  // Footer
  footer: {
    paddingHorizontal: 10,
  },

  // Stats Row
  statsRow: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'lightgray',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: 'gray',
  },
  shares: {
    color: 'gray',
    marginLeft: 'auto',
  },

  // Buttons Row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
})
