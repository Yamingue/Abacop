import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
const DATA = [
    {
        title: "Usager",
        id: 1,
        target: null
    },
    {
        title: "Vehicule",
        id: 2,
        target: null
    },
    {
        title: "Code de la Route",
        id: 3,
        target: 'CodeRoutier'
    },
    {
        title: "Premier soins",
        id: 4,
        target: 'PremierSoins'
    }
]
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this._renderItem =this._renderItem.bind(this)
    }

    _renderItem = ({ item }) => (
        <Card containerStyle={{
            width: '42%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
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
                <Card.Title
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}
                >{item.title}</Card.Title>
            </TouchableOpacity>
        </Card>
    );

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',

                }}
            >
                <FlatList
                    data={DATA}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={{
                        backgroundColor: 'bleu'
                    }}
                />
            </View>
        );
    }
}