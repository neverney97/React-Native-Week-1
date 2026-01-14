import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>This is my first App</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
 container:{
  backgroundColor:"red",
  borderRadius:50,
 },
 text:{
  color:"white",
  fontSize:20,
  fontWeight:"bold",
  textAlign:"center",
  margin:50,
  textDecorationLine:"underline",
 }
})