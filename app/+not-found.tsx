
import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const NotFoundScreen = () => {
  return (
    <View style={styles.conatainer}>
      <Text>+not-found</Text>
      <Link href='/' asChild>
        <Pressable style={styles.button}>Go to Home</Pressable>
      </Link>
    </View>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'crimson',
        paddingHorizontal: 40,
        paddingVertical: 20,
        color: 'white'

    }
})