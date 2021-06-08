import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import code_data from '../Data/Code';

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
            source={item.image}
            style={{
                height:180,
                resizeMode:'contain',
                width:'100%'
            }}
            />
            <Text>
               {item.text}
            </Text>
        </View>
    );
}

export default class CodeRoutier extends React.Component {
    render(){
        return (
         <ScrollView
         style={{
             padding:10,
             flex:1
         }}
         >
             {
                 code_data.map((v,k)=><DataView item={v} key={k}/>)
             }
         </ScrollView>
        );
    }
}