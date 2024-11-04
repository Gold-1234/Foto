import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Cam from '@/components/camera'

const camera = () => {

    const [isCamera, setIsCamera] = useState(false)

    const openCamera = () => {
        setIsCamera(true)
    }
     
  return (
    
    <View style = {styles.container}>
        {!isCamera ? 
            <TouchableOpacity 
                style = {styles.opencam} 
                onPress={openCamera}
            >
                <Text>Open Camera</Text>
            </TouchableOpacity> : 
            <Cam/>
        }
    </View>
    
  )
}

export default camera

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    opencam:{
        backgroundColor: 'black'
    }
})