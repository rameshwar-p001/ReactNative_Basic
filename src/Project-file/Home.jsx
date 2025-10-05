import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Allitem from './Allitem'
import Lowstock from './Lowstock'
import Create from './Create'



const products = [
  { id: 1, name: "Apple", stock: 120, unit: "kg" },
  { id: 2, name: "Banana", stock: 85, unit: "dozen" },
  { id: 3, name: "Rice", stock: 500, unit: "kg" },
  { id: 4, name: "Milk", stock: 200, unit: "litre" },
  { id: 5, name: "Sugar", stock: 150, unit: "kg" },
  { id: 6, name: "Eggs", stock: 60, unit: "dozen" },
  { id: 7, name: "Bread", stock: 40, unit: "pack" },
  { id: 8, name: "Salt", stock: 300, unit: "kg" },
  { id: 9, name: "Tea", stock: 90, unit: "box" },
  { id: 10, name: "Oil", stock: 75, unit: "litre" },
];


const Home = () => {

    const [view, setview] = useState(0)
  return (
   <SafeAreaView style={styles.contenner}>
    <Text style={styles.text}>DashBoard</Text>
    <View style={styles.buttoncontainer}>
        <Pressable style={[styles.button , view=== 0 ? {backgroundColor:"red"} : null]} onPress={()=>setview(0)}>
            <Text style={styles.btntxt}>All Item </Text>
        </Pressable>
        <Pressable style={[styles.button , view=== 1 ? {backgroundColor:"red"} : null]} onPress={()=>setview(1)}>
            <Text style={styles.btntxt}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button , view=== 2 ? {backgroundColor:"red"} : null]} onPress={()=>setview(2)}>
            <Text style={styles.btntxt}>Create</Text>
        </Pressable>
    </View>

    {view===0 && <Allitem/>}
    {view===1 && <Lowstock/>}
    {view===2 && <Create/>}
   </SafeAreaView>


  )
}

export default Home

const styles = StyleSheet.create({
    contenner:{
        height:'100%',
        width:"100%",
        backgroundColor:"lightblue",
    },
    text:{
        fontSize:20,
        // fontWeight:"bold",
        // textAlign:"center",
        marginTop:50,   
    },
    buttoncontainer:{
        gap:20,
        flexDirection:"row",
        marginTop:20
    },
    button:{
        borderColor:"black",
        borderWidth:0.8,
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    btntxt:{
        fontWeight:"bold",
        fontSize:13
    }
})