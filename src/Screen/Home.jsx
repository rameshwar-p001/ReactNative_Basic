import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}}>Home</Text>
      <Button title="coustom" onPress={()=>navigation.navigate("Coustm")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})