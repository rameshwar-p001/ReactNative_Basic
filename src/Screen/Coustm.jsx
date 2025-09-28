import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Coustm = ({navigation}) => {
  return (
    <View>
      <Text>Coustm</Text>
            <Button title="Login" onPress={()=>navigation.navigate("Login")}/>
      
    </View>
  )
}

export default Coustm

const styles = StyleSheet.create({})