import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Allitem from './Allitem'
import Lowstock from './Lowstock'
import Create from './Create'






const Home = () => {

    const [view, setview] = useState(0)
    const [data, setdata] = useState([
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
])
  return (
   <SafeAreaView style={styles.contenner}>
    <Text style={styles.text}>DashBoard</Text>
    <View style={styles.buttoncontainer}>
        <Pressable style={[styles.button , view=== 0 ? {backgroundColor:"#72C37AFF"} : null]} onPress={()=>setview(0)}>
            <Text style={[styles.btntxt ,view=== 0 ? {color:"white"} : null]}>All Item </Text>
        </Pressable>
        <Pressable style={[styles.button , view=== 1 ? {backgroundColor:"#72C37AFF"} : null]} onPress={()=>setview(1)}>
            <Text style={[styles.btntxt,view=== 1 ? {color:"white"} : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button , view=== 2 ? {backgroundColor:"#72C37AFF"} : null]} onPress={()=>setview(2)}>
            <Text style={[styles.btntxt,view=== 2 ? {color:"white"} : null]}>Create</Text>
        </Pressable>
    </View>

    {view===0 && <Allitem data={data} />}
    {view===1 && <Lowstock data={data.filter((item)=> item.stock<100)}/>}
    {view === 2 && <Create data={data} setdata={setdata} />}
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
        marginHorizontal:10,
        gap:20,
        flexDirection:"row",
        marginTop:20
    },
    button:{
        borderColor:"#72C37AFF",
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

