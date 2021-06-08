import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import text_soins from '../Data/Soins'


const DataView = ({ item }) =>{
    return(
        <View>
            <Text
                style={{
                    fontWeight:'bold',
                    fontSize:18,
                    textAlign:'center',
                    margin:10
                }}
            >{item.title}</Text>
            <Image
            source={require('../Assets/abacop.jpg')}
            style={{
                height:180,
                resizeMode:'contain'
            }}
            />
            <Text>
               {item.text}
            </Text>
        </View>
    );
}

export default class Soins extends React.Component {
    render(){
        return (
         <ScrollView
         style={{
             padding:10,
             flex:1
         }}
         >
             {
                 text_soins.map((v,k)=><DataView item={v} key={k}/>)
             }
         </ScrollView>
        );
    }
}