import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
  const {id,name}=route.params
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:30}} >Profile</Text>
      <Text style={{fontSize:30}} >id:{id}</Text>
      <Text style={{fontSize:30}} >name:{name}</Text>
        <Button title="Go to Login" onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})