import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Allitem = ({data}) => {
  return (
    <View>
      <View style={styles.hc}>
        <Text style={styles.ht}>Items</Text>
        <Text style={styles.ht}>Quantity</Text>
      </View>

      <FlatList 
        data={data}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
          <View style={[styles.dc ,{backgroundColor:item.stock < 100 ? "#FFCCCC" : "#D7F6BFFF"}]}>
            <Text style={styles.it}>{item.name}</Text>
            <Text style={styles.it}>{item.stock} {item.unit}</Text>
          </View>
        )}
        contentContainerStyle={{gap:5,paddingTop:10}}
      />
    </View>
  );
};

export default Allitem;

const styles = StyleSheet.create({
  hc:{
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:15,
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"black",
    paddingBottom:5
  },
  ht:{
    fontSize:18,
    fontWeight:"bold"
  },
  dc:{
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:15,
    borderRadius:10,
    paddingVertical:5,
  },
  it:{
    fontSize:16,
    marginVertical:5,
  }
});