//// For run the code phone via usb then use this cmd "npx react-native run-android"
////adb devices  for check the device is connected or not
////rnfes
//// npm start
//// npx react-native start
//// npx react-native run-android

//=======================================================//===============================//====================================


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
//// ScrollView

import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
     <ScrollView style={styles.sav}>
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
         <View style={styles.v} />
         <View style={styles.v1} />
         <View style={styles.v2} />
     </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
    sav:{
    flex:1,   
    backgroundColor:"lightblue",
    flexDirection:"column" ,
    },
  v:{
    width:80,
    height:80,  
    backgroundColor:"red",  
  },
  v1:{
    width:80,
    height:80,
    backgroundColor:"green", 
  },
  v2:{
    width:80,
    height:80,
    backgroundColor:"yellow",
  }
})

