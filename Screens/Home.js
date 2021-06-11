import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack'
const DATA = [
    {
        title: "Usager",
        id: 1,
        target: null,
        icon:'directions-walk'
    },
    {
        title: "Vehicule",
        id: 2,
        target: null,
        icon:'commute'
    },
    {
        title: "Code de la Route",
        id: 3,
        target: 'CodeRoutier',
        icon:'directions'
    },
    {
        title: "Premier soins",
        id: 4,
        target: 'PremierSoins',
        icon:'local-hospital'
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
            marginTop:60
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
                
                <Icon name={item.icon} size={40}/>
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
        </Stack.Navigator>
    }
}