import profile from '@/assets/images/emma.jpeg'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      {/* profile picture */}
      <View>
        <Image source={profile} className="w-[15rem] h-[15rem] rounded-full" />
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