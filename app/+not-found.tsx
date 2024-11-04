import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const NotFoundScreen = () => {
  return (
    <>
      <View style={styles.container}>
      <Text style = {styles.text}>OOPS! NOT FOUND</Text>
      <Link href={"/"} style = {styles.lowerText}>Go to home screen</Link>
      </View>
    </>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F8EDE3',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color: '#664343',
    fontWeight: 'bold',
    fontSize: 40,
  },
  lowerText:{
    padding: 20,
    textDecorationLine:'underline',
    color:'#664343'
  }
})