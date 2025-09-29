import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button
        title="Go to coustom"
          onPress={() =>
          navigation.navigate('Profile', { id: 10, name: 'rameshwar' })    // it was use for pass data between screens
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
