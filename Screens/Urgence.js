import React from 'react';
import {ScrollView, View, Text} from 'react-native';

const Urgence = props => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#FFF',
          elevation: 1,
          margin: 8,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
          }}>
          Numeros d'urgence
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          elevation: 1,
          margin: 4,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius:10
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textTransform:'uppercase'
          }}>
        pompier :
        </Text>
        <Text>99 99 99 99</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          elevation: 1,
          margin: 4,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius:10
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textTransform:'uppercase'
          }}>
          police :
        </Text>
        <Text>99 99 99 99</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          elevation: 1,
          margin: 4,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius:10
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textTransform:'uppercase'
          }}>
          hôpital :
        </Text>
        <Text>99 99 99 99</Text>
      </View>
    </ScrollView>
  );
};

export default Urgence;
