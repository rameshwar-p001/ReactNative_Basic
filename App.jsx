//// For run the code phone via usb then use this cmd "npx react-native run-android"
////adb devices  for check the device is connected or not
////rnfes
//// npm start
//// npx react-native start
//// npx react-native run-android

//=======================================================//===============================//====================================
//// day 1

// // text display

// // import React from "react";
// import { View, Text, StyleSheet ,Image} from "react-native";

// const App = () => {
//   return (
//     <View>
//       <Text >done  </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

// });

// export default App;

//=======================================================//===============================//====================================

// // image from url

// import { StyleSheet, View, Image, Text } from 'react-native'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Image 
//         style={{ width: 450, height: 1000 }}
//         source={{ uri: "https://i.pinimg.com/736x/6e/fd/46/6efd46d9e838154cc665a51334ebfcdf.jpg" }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
// });

// export default App;

//=======================================================//===============================//====================================

////` Button , TouchableOpacity , TouchableHighlight , Pressable


// import { StyleSheet, Text, View ,Button, TouchableOpacity,TouchableHighlight, Pressable} from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       {/* <Button title='Press Me'></Button> */}

//       {/* <TouchableOpacity style={{padding:10,backgroundColor:"skyblue",marginTop:70}} 
//                                 onPress={()=>alert("Hello World")}>
//         <Text>Press Me</Text>`
//       </TouchableOpacity> */}

//       {/* <TouchableHighlight style={{padding:10,backgroundColor:"skyblue",marginTop:70}} 
//                                 onPress={()=>alert("Hello World")}>
//         <Text>Press Me</Text>
//       </TouchableHighlight> */}

//         {/* Pressable is more advance than TouchableOpacity , TouchableHighlight , Button*/}
//       <Pressable style={{padding:10,backgroundColor:"skyblue",marginTop:70}} 
//                                 onPress={()=>alert("Hello World")}>
//         <Text>Press Me</Text>
//       </Pressable>

//     </View>
//   );
// };


// const styles = StyleSheet.create({});
// export default App; 


//=======================================================//===============================//====================================
//// day 2

//// SafeAreaView for avoid notch area in mobiles

// import { StyleSheet, Text ,Pressable} from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <SafeAreaView>
//        <Pressable style={{padding:10,backgroundColor:"skyblue"}} 
//                                 onPress={()=>alert("Hello World")}>
//          <Text>Press Me</Text>
//        </Pressable>
//     </SafeAreaView>  
//   )
// }

// export default App

// const styles = StyleSheet.create({})



// //Styling start ..
//=======================================================//===============================//====================================
////` day 3
// // inline styling


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <SafeAreaView style={{height:"100%",width:"100%",backgroundColor:"lightblue"}}>
//       <Text >
//         Hello World
//       </Text>
//     </SafeAreaView>
//   )
// }

// export default App


//=======================================================//===============================//====================================

//// StyleSheet Styling 

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <SafeAreaView style={styles.sav}>     
//                                           {/* style={styles.sav} it was the object name where we was do styleSheet styling object called */}
//       <Text style={styles.Text}>          
//                                           {/* style={styles.Text} it was the object name where we was do styleSheet styling object called */}
//         Hello World
//       </Text>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({          // object was created object name styles 
//   sav:{
//     height:"100%",
//     width:"100%",
//     backgroundColor:"lightblue"
//   },
//   Text:{
//     color:"black",
//     fontSize:30,
//     fontWeight:"bold"
//   }
// })

//=======================================================//===============================//====================================
//// external and global StyleSheet Styling

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import style from './Styling/style'     // import the style.js file here

// const App = () => {
//   return (
//     <SafeAreaView style={style.sav}>     
                                         
//       <Text style={style.Text}>                                        
//         Hello World
//       </Text>
//     </SafeAreaView>
//   )
// }

// export default App

////======================================//===============================//====================================
////day 4

//// StyleSheet Styling with some more properties for text button etc or more are in notes file

// import {Pressable, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {



//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>hello world</Text>

//       <Pressable style={styles.btn} >
//         <Text style={styles.btn_name}>  Press Me </Text>
//       </Pressable>
//     </SafeAreaView>

    
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#a268c4",
//     height: "100%",
//     width: "100%",  
//     gap:30,
  
//   },  

//   text: {
//     color: "#FFC29B",
//     fontSize: 30,
//     fontWeight: "bold",
//     fontStyle: "italic"
//   },  
//   btn:{
//     paading:10,
//     backgroundColor:"skyblue",
//     marginTop:70,
//     alignItems:"center",
//     width:200,
//     marginLeft:100,
//     borderRadius:10,
//   },
//   btn_name:{
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// })


//=======================================================//===============================//====================================

//// Theam based styling (dark mode and light mode)

// import React from 'react';
// import { View, Text, StyleSheet ,useColorScheme} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {

//   const theme = useColorScheme()
//   const isDarkMode = theme === 'dark';

//   const backgroundColor = isDarkMode ? 'black' : 'white';
//   const textcolor = isDarkMode ? 'white' : 'black';


//   return (
//     <SafeAreaView style={[styles.sav ,{backgroundColor: backgroundColor}]} >
//       <Text style={[styles.tx,{color:textcolor}]}>Hello World!</Text>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   sav: {
//     height: "100%",
//     width: "100%",
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   tx: {
//     fontSize: 30,
//     fontWeight: "bold",
//   }
// });


//=======================================================//===============================//====================================
//// styling unit (px , dp , pt , % , em , rem)

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text style={styles.tx}>App</Text>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   tx:{
//     fontSize:30,          // pt
//     // fontSize:30px,      // px
//     // fontSize:30dp,     // dp
//     // fontSize:30%,      // %  (not work in text)
//     // fontSize:3em,     // em  (not work in text)
//     // fontSize:3rem,    // rem  (not work in text)
//   }
// })


//=======================================================//===============================//====================================
//// Flex

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// // import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <View style={styles.sav}>
//       <View style={styles.v} />
//       <View style={styles.v1} />
//       <View style={styles.v2} />
//     </View>
//   )
// }  

// export default App

// //// flex:1 means full screen
// //// flex:1/2 means half screen
// //// flex:1/3 means one third screen
// //// flex:2 means two part of full screen
// //// flex:3 means three part of full screen
// //// flex:2 and flex:3 means 2+3=5 parts of full screen so 2 part is for flex:2 and 3 part is for flex:3
// ////1+2+3=6  
// ////1/6 , 2/6 , 3/6


// const styles = StyleSheet.create({
//   sav:{
//     flex:1,      // for full screen  
//     // flex:1/2,  // for half screen
//     backgroundColor:"lightblue"
  
//   },
//   v:{
//     flex:1,
//     backgroundColor:"red",
//   },
//   v1:{
//     flex:2,
//     backgroundColor:"green",
//   },
//   v2:{
//     flex:3,
//     backgroundColor:"yellow",
//   }
// })


//=======================================================//===============================//====================================
//// Flex Direction (row , column , row-reverse , column-reverse)

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.sav}>
//       <View style={styles.v} />
//       <View style={styles.v1} />
//       <View style={styles.v2} />
//     </View>
//   )
// }  

// export default App

// const styles = StyleSheet.create({
//   sav:{
//     flex:1,   
//     backgroundColor:"lightblue",
//     flexDirection:"row-reverse" // row , column , row-reverse , column-reverse
//   },
//   v:{
//     width:80,
//     height:80,
//     backgroundColor:"red",
//   },
//   v1:{
//     width:80,
//     height:80,
//     backgroundColor:"green",
//   },
//   v2:{
//     width:80,
//     height:80,
//     backgroundColor:"yellow",
//   }
// })

////=======================================================//===============================//====================================
// //day 5
//// Justify , align items  , aling self  

//// Justify Content (flex-start , flex-end , center , space-between , space-around , space-evenly)

//// Justify content is used for main axis (primary axis) in flexbox

//// align Items (flex-start , flex-end , center , stretch , baseline)

//// align items is used for cross axis (secondary axis) in flexbox

//// align self it was work on child 

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={styles.sav}>
//       <View style={styles.v} />
//       <View style={styles.v1} />
//       <View style={styles.v2} />
//     </View>
//   )
// }  

// export default App

// const styles = StyleSheet.create({
//   sav:{
//     flex:1,   
//     backgroundColor:"lightblue",
//     flexDirection:"row" ,
//     justifyContent:"space-evenly",  // flex-start , flex-end , center , space-between , space-around , space-evenly
//     alignItems:"stretch"        // flex-start , flex-end , center , stretch , baseline
//   },
//   v:{
//     width:80,
//     height:80,  
//     backgroundColor:"red",
//     alignSelf:"flex-end"   // alignSelf is used for single item (flex-start , flex-end , center , stretch , baseline)
//   },
//   v1:{
//     width:80,
//     height:80,
//     backgroundColor:"green",
//   },
//   v2:{
//     width:80,
//     height:80,
//     backgroundColor:"yellow",
//   }
// })

//=======================================================//===============================//====================================  

//// wraping (wrap , nowrap , wrap-reverse)
//// align content (flex-start , flex-end , center , space-between , space-around , space-evenly)

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//      <View style={styles.sav}>
//          <View style={styles.v} />
//          <View style={styles.v1} />
//          <View style={styles.v2} />
//          <View style={styles.v} />
//          <View style={styles.v1} />
//          <View style={styles.v2} />
//          <View style={styles.v} />
//          <View style={styles.v1} />
//          <View style={styles.v2} />
//          <View style={styles.v} />
//          <View style={styles.v1} />
//          <View style={styles.v2} />
//          <View style={styles.v} />
//          <View style={styles.v1} />
//          <View style={[styles.v2 , {backgroundColor:"blue"}]} />

//      </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     sav:{
//     flex:1,   
//     backgroundColor:"lightblue",
//     flexDirection:"column" ,
//     // justifyContent:"center",  
//     alignItems:"center",    
//     alignContent:"center",  // flex-start , flex-end , center , space-between , space-around , space-evenly
//     flexWrap:"wrap"   // wrap , nowrap , wrap-reverse    
//     },
//   v:{
//     width:80,
//     height:80,  
//     backgroundColor:"red",  
//   },
//   v1:{
//     width:80,
//     height:80,
//     backgroundColor:"green",
//   },
//   v2:{
//     width:80,
//     height:80,
//     backgroundColor:"yellow",
//   }
// })


////=======================================================//===============================//====================================
//// day 6
//// flexgrow


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <SafeAreaView style={styles.sav}>
//         <View style={styles.v} />
//         <View style={styles.v1} />
//         <View style={styles.v2} />
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     sav:{
//     flex:1,   
//     backgroundColor:"lightblue",
//     flexDirection:"row" ,
//     justifyContent:"center",   
//     },
//   v:{
//     width:80,
//     height:80,  
//     backgroundColor:"red",  
//   },
//   v1:{
//     width:80,
//     height:80,
//     backgroundColor:"green",
//     flexGrow:1,   // flexGrow is used for increase the size of the item
//   },
//   v2:{
//     width:80,
//     height:80,
//     backgroundColor:"yellow",
//   }
// })

////=======================================================//===============================//====================================
//// Day 7
//// ScrollView
//// contentContainerStyle

// import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
//       <ScrollView 
//         contentContainerStyle={{ gap: 10, paddingVertical: 20 }}
//         horizontal={true}
//         style={styles.scrollView}>
//           <View style={styles.v01} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v2} />
//           <View style={styles.v} />
//           <View style={styles.v1} />
//           <View style={styles.v002} />
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//     scrollView: {
//       flex: 1,
//       padding: 10,
//     },
//     v: {
//       width: 80,
//       height: 80,  
//       backgroundColor: "red",  
//       borderRadius: 50,
//     },
//     v1: {
//       width: 80,
//       height: 80,
//       backgroundColor: "green", 
//       borderRadius: 50,
//     },
//     v2: {
//       width: 80,
//       height: 80,
//       backgroundColor: "yellow",
//       borderRadius: 50,
//     },
//     v01: {
//       width: 80,
//       height: 80,
//       backgroundColor: "black",
//       borderRadius: 50,
//     },
//     v002: {
//       width: 80,
//       height: 80,
//       backgroundColor: "purple",
//       borderRadius: 50,
//     }
// })

////=======================================================//===============================//====================================
//// FlatList

// import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
// // import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// const dummyData = [
//   { id: '1', name: 'John Doe', email: 'johndoe@gmail.com', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
//   { id: '2', name: 'Jane Smith', email: 'janesmith@gmail.com', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
//   { id: '3', name: 'Michael Johnson', email: 'michaelj@gmail.com', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
//   { id: '4', name: 'Emily Davis', email: 'emilydavis@gmail.com', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
//   { id: '5', name: 'David Wilson', email: 'davidwilson@gmail.com', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
//   { id: '6', name: 'Sophia Brown', email: 'sophiabrown@gmail.com', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
//   { id: '7', name: 'Daniel Miller', email: 'danielmiller@gmail.com', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
//   { id: '8', name: 'Olivia Taylor', email: 'oliviataylor@gmail.com', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
//   { id: '9', name: 'James Anderson', email: 'jamesanderson@gmail.com', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
//   { id: '10', name: 'Isabella Thomas', email: 'isabellathomas@gmail.com', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
//   { id: '11', name: 'Ethan Martinez', email: 'ethanmartinez@gmail.com', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
//   { id: '12', name: 'Mia Garcia', email: 'miagarcia@gmail.com', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
//   { id: '13', name: 'Alexander Lee', email: 'alexlee@gmail.com', image: 'https://randomuser.me/api/portraits/men/13.jpg' },
//   { id: '14', name: 'Charlotte Harris', email: 'charlotteharris@gmail.com', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
//   { id: '15', name: 'Benjamin Clark', email: 'benjaminclark@gmail.com', image: 'https://randomuser.me/api/portraits/men/15.jpg' },
//   { id: '16', name: 'Lucas Walker', email: 'lucaswalker@gmail.com', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
//   { id: '17', name: 'Amelia Hall', email: 'ameliahall@gmail.com', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
//   { id: '18', name: 'Henry Allen', email: 'henryallen@gmail.com', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
//   { id: '19', name: 'Ella Young', email: 'ellayoung@gmail.com', image: 'https://randomuser.me/api/portraits/women/19.jpg' },
//   { id: '20', name: 'Matthew King', email: 'matthewking@gmail.com', image: 'https://randomuser.me/api/portraits/men/20.jpg' },
//   { id: '21', name: 'Avery Wright', email: 'averywright@gmail.com', image: 'https://randomuser.me/api/portraits/women/21.jpg' },
//   { id: '22', name: 'Joseph Scott', email: 'josephscott@gmail.com', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
//   { id: '23', name: 'Grace Adams', email: 'graceadams@gmail.com', image: 'https://randomuser.me/api/portraits/women/23.jpg' },
//   { id: '24', name: 'Samuel Baker', email: 'samuelbaker@gmail.com', image: 'https://randomuser.me/api/portraits/men/24.jpg' },
//   { id: '25', name: 'Harper Nelson', email: 'harpernelson@gmail.com', image: 'https://randomuser.me/api/portraits/women/25.jpg' },
//   { id: '26', name: 'Andrew Carter', email: 'andrewcarter@gmail.com', image: 'https://randomuser.me/api/portraits/men/26.jpg' },
//   { id: '27', name: 'Evelyn Mitchell', email: 'evelynmitchell@gmail.com', image: 'https://randomuser.me/api/portraits/women/27.jpg' },
//   { id: '28', name: 'Christopher Perez', email: 'chrisperez@gmail.com', image: 'https://randomuser.me/api/portraits/men/28.jpg' },
//   { id: '29', name: 'Abigail Roberts', email: 'abigailroberts@gmail.com', image: 'https://randomuser.me/api/portraits/women/29.jpg' },
//   { id: '30', name: 'Logan Turner', email: 'loganturner@gmail.com', image: 'https://randomuser.me/api/portraits/men/30.jpg' },
// ];


// const App = () => {
//   return (
//     <SafeAreaView style={styles.sav}>

//     <FlatList
    
//         data={dummyData}
//         renderItem={({item})=>(
//           <View style={styles.v}>
//         <Image
//           style={{ width: 50, height: 50 , borderRadius:50}}
//           source={{uri:"https://images.unsplash.com/photo-1741332966044-513c26163864?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"}} />
//         <Text>App</Text>
//         <Text>App</Text>
//       </View>
//         )}
//         keyExtractor={item=>item.id}
//         numColumns={3}
//         columnWrapperStyle={{gap:10}}
//         ItemSeparatorComponent={<View style={{height:10}}/>}
//     />
     
  
//     </SafeAreaView>
    
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   sav:{
//     width:"100%",
//     height:"100%",
//     backgroundColor:"lightblue",
//     paddingHorizontal:5,
//     paddingVertical:10,
//   },
//   v:{
//     width:100,
//     height:100,
//     backgroundColor:"white",
//     borderRadius:10,
//     padding:5,
//     alignItems:"center",
//   },

// })

////=======================================================//===============================//====================================
//// Handling user input 
////Day 8

// import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// // import { TextInput } from 'react-native/types_generated/index'

// const App = () => {
// const [text, setText] = useState("")
// const[submitText, setSubmitText] = useState("")

// const handleSubmit =()=>{
//   setSubmitText(text)
//   setText("")
// }

// console.log(text)
//   return (
//     <SafeAreaView style={styles.sav}>
//       <Text style={styles.Text}>Kay re bhai kya cahlu he </Text>
//       <TextInput 
//       style={styles.input}
//       value={text}
//       onChangeText={(text)=>setText(text)}             // two way binding
//       placeholder='Enter your name'



//       //Propertys
//       // multiline
//       // numberOfLines={4}
//       // keyboardType='numeric'  // email-address , phone-pad , number-pad , decimal-pad
//       // secureTextEntry={true}  // for password
//       />
//       <Button title='Submit' onPress={handleSubmit} />
//         {submitText? (<Text>Result: {submitText}</Text>): null}
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   sav:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
//     padding:20,
//     backgroundColor:"lightblue",
//     gap:15,
//   },
//   Text:{
//     fontSize:30,
//     fontWeight:"500",
//   },
//   input:{
//     width:"100%",
//     borderWidth:1,
//     borderRadius:5,
//     padding:10
//   }
// })



////=======================================================//===============================//====================================
//// Day 9

//// Navigation in React Native

//// Stack Navigation
//// React Navigation library use for navigation in react native
////run in cmd
//// npm install @react-navigation/native
//// npm install react-native-screens react-native-safe-area-context
//// npm install @react-navigation/stack

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/Screen/Home';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/Screen/Login';
import Coustm from './src/Screen/Coustm';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Coustm" component={Coustm} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({});

export default App;