import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})