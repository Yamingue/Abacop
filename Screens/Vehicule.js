import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { SearchBar, Card } from 'react-native-elements'

const vehicules = [
    {
        matricule: '18C1980D',
        grise: '',
        proprio: 'ARNAUD TAMKIMADJI',
        FICHE_TECHNIQUE:''
    }
]

class VehiculeCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Card>
                    <Card.Title>Matricule: {this.props.vehicule.matricule}</Card.Title>
                    <Card.Title>CARTE GRISE: </Card.Title>
                    <Card.Image source={require('../Assets/grise.jpg')} />
                    <Card.Title>FICHE TECHNIQUE</Card.Title>
                    <Card.Title>NOM DU PROPRIETAIRE :{this.props.vehicule.proprio}</Card.Title>                  
                </Card>
            </View>
        );
    }
}

export default class Vehicule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            vehicule: null,
            text:'',
        }
        this.chercheVehicule = this.chercheVehicule.bind(this)
    }

    chercheVehicule(text) {
        this.setState({ isLoad: true })
        let usager = vehicules.find(item => {
            return item.proprio.indexOf(text) != 0 || item.matricule == text
        })

        this.setState({ usager })
        this.setState({ isLoad: false })
    }

    render() {
        return (
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <SearchBar
                    lightTheme
                    containerStyle={{
                        backgroundColor: '#FFF',
                        marginTop: 5,
                        marginRight: 15,
                        marginLeft: 15
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#fff',
                    }}
                    placeholder={'Rechercher'}
                    value={this.state.text}
                    onChangeText={text=>this.setState({text})}
                    onSubmitEditing={text=>this.chercheVehicule(text)}

                />
                {
                    this.state.usager != null ? <VehiculeCard vehicule={this.state.usager} /> : null
                }
                {
                    this.state.isLoad ? <ActivityIndicator size="large" color="#0000ff" /> : null
                }
            </ScrollView>
        );
    }
}