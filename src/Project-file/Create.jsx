import {Pressable,StyleSheet,Text,TextInput,View,FlatList,} from 'react-native';
import React, { useState } from 'react';

const Create = ({ data ,setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockamt, setstockamt] = useState('');

   const additem = ()=>{
      const newItem = {
            id: Date.now(),
            name: itemName,
            stock: stockamt,
          };
          setdata([...data, newItem]);
          setitemName('');
          setstockamt('');
    }

    const editItem=(item)=>{
      setitemName(item.name)
      setstockamt(item.stock.toString())
      deleteItem(item.id)
    }

    const deleteItem=(id)=>{
      setdata(data.filter((item)=> item.id !== id))
    }

    return (
     <View style={styles.con}>
      <TextInput
        placeholder="Enter Item Name"
        value={itemName}
        onChangeText={setitemName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter stock amount"
        value={stockamt}
        onChangeText={setstockamt}
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable style={styles.b1} onPress={()=>{additem()}}> 
        <Text style={styles.b1txt}>ADD ITEM IN STOCK</Text>
      </Pressable>

      <View >
        <View >
          <Text style={styles.ht}>All Item in stock </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.dc,
                { backgroundColor: item.stock < 100 ? '#FFCCCC' : '#D7F6BF' },
              ]}
            >
              <Text style={styles.it}>{item.name}</Text>
              
              <View style={{flexDirection:"row", gap:15}}>
              <Text style={styles.im}>{item.stock}</Text>

                <Pressable onPress={()=>{editItem(item)}}>
                <Text style={styles.it}  >Edit</Text>
                </Pressable >
                <Pressable onPress={()=>{deleteItem(item.id)}}>
                <Text style={styles.it}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 5, paddingTop: 10 }}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  con: {
    paddingVertical: '4%',
    gap: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  b1: {
    backgroundColor: '#CABFEEFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  b1txt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  ht: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dc: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 1,
    alignItems: 'center',
  },
  it: {
    fontSize: 16,
    marginVertical: 5,
  },
  im:{
   fontSize: 16,
    marginVertical: 5,
    marginRight:15,
  }
});
