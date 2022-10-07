import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack'
import Usager from './Usager';
import Vehicule from './Vehicule';
import Urgence from './Urgence';
const DATA = [
    {
        title: "Usager",
        id: 1,
        target: 'Usager',
        icon:'directions-walk',
        iconColor:'#8fa22e'
    },
    {
        title: "Vehicule",
        id: 2,
        target: 'Vehicule',
        icon:'commute',
        iconColor:'#000'
    },
    {
        title: "Circulation routière",
        id: 3,
        target: 'CodeRoutier',
        icon:'directions',
        iconColor:'#2e4ba2'
    },
    {
        title: "Premiers soins",
        id: 4,
        target: 'PremierSoins',
        icon:'local-hospital',
        iconColor:'green'
    },
    {
        title: "Urgences",
        id: 5,
        target: 'Urgences',
        icon:'local-hospital',
        iconColor:'red'
    }
]

const Stack = createStackNavigator()


 class Index extends React.Component {
    constructor(props){
        super(props)
        this._renderItem =this._renderItem.bind(this)
    }

    _renderItem = ({ item }) => (
        <Card containerStyle={{
            width: '42%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:20,
            borderRadius:15
        }}

        >
            <TouchableOpacity
             onPress={()=>{
                 if (item.target) {
                     console.log(this.props.navigation.navigate(item.target))
                  // this.props.navigation.navigate({name:item.targer})
                 }
             }}
            >
                
                <Icon name={item.icon} size={40} color={item.iconColor}/>
                <Text>{item.title}</Text>
                
            </TouchableOpacity>
        </Card>
    );

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent:'center',
                    alignContent:'center'

                }}
            >
                <FlatList
                    data={DATA}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={{
                        flex:1,
                    }}
                />
            </View>
        );
    }
}


export default class Home extends React.Component {
    render(){
        return<Stack.Navigator
        headerMode='none'
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Usager" component={Usager} />
            <Stack.Screen name="Vehicule" component={Vehicule} />
            <Stack.Screen name="Urgences" component={Urgence} />

        </Stack.Navigator>
    }
}