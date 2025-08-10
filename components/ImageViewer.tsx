import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet } from 'react-native'
type Props = {
  PlaceholderImage : string,
  selectedImage: string

}
const ImageViewer = ({selectedImage}: Props) => {
  const PlaceholderImage = selectedImage ? {uri : selectedImage} : require("../assets/images/background-image.png")
  return  <Image style={styles.image} source={PlaceholderImage} />
}

export default ImageViewer


const styles = StyleSheet.create({
      image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})