//// For run the code phone via usb then use this cmd "npx react-native run-android"
////adb devices  for check the device is connected or not
////rnfes


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

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>App</Text>
    </SafeAreaView>

    
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic"
  },  
})