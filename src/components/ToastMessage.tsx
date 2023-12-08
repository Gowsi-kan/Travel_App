import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ToastMessage = () => {
  return (
    <View style={styles.ToastContainer}> 
      <Text>ToastMessage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ToastContainer: {
        position: 'absolute',
        top: 50,
        width: '90%',
        height: 100,
        backgroundColor: 'red',
        padding: 12,
        flexDirection: 'row',
    }
})

export default ToastMessage;
