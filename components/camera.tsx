import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";


const Cam = () => {

    const [facing, setFacing] = useState<CameraType>('back')
    const [permission, requestPermission] = useCameraPermissions()

    if(!permission){
        return (
            <View>
                <Text>Loading..</Text>
            </View>
        )
    }
    if(!permission.granted) {
        return (
            <View>
                <Text>We need access to your camera so you can take photos directly in the app. This feature is essential for using Foto effectively. You can change this permission anytime in your device settings. </Text>
                <Button onPress={requestPermission} title="Allow"></Button>
            </View>
        )    
    }

    function toggleCameraFacing() {
        setFacing((current: string) => (current === 'back' ? 'front' : 'back'))
    }

    return(
        <View style = {styles.container}>
            <CameraView style = {styles.camera}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    )
}

export default Cam

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      message: {
        textAlign: 'center',
        paddingBottom: 10,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
})