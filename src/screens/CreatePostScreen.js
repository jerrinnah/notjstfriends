import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Jerri Meyerz N',
}

const CreatePostScreen = () => {
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const navigation = useNavigation()

//   const onPost = () => {
//     console.warn('Posting: ', description)
//     setDescription('')
//   }

  const onSubmit = () => {
    console.warn('On Submit', description)
    setDescription('')

    navigation.goBack()
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <>
      <View style={styles.container}>
        {/* <Text>Create Post Screen</Text> */}
        <View style={styles.postContainer}>
          <View style={styles.header}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <TouchableOpacity>
              <Entypo
                onPress={pickImage}
                style={styles.upload}
                name="images"
                size={24}
                color="limegreen"
              />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="What's on your mind?"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            multiline
          />
        </View>

        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onSubmit}
            title="Post"
            disabled={!description}
          >
            <Text style={styles.btnText}> Post Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    // paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  postContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: '500',
  },
  input: {
    marginBottom: 'auto',
    top: 10,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginVertical: 20,
    height: 50,
    width: '80%',
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // bottom: 30,
    left: 40,
  },
  btnText: {
    color: 'white',
  },

  upload: {
    left: 189,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
})

export default CreatePostScreen
