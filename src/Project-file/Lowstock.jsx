import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const Lowstock = ({ data }) => {
  return (
    <View>
      <View style={styles.hc}>
        <Text style={styles.ht}>Items</Text>
        <Text style={styles.ht}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: '#ffcccc' }]}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Lowstock;

const styles = StyleSheet.create({
  listContainer: { 
    paddingVertical: 10
   },
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    flexDirection:"row",
     justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:15,
    borderRadius:10,
    paddingVertical:5,
  },
  name: {
      fontSize:16,
    marginVertical:5, 
    // fontWeight: 'bold',
     fontSize: 16,
      // marginBottom: 5 
    },
      ht:{
    fontSize:18,
    fontWeight:"bold"
  },
  hc: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
});
