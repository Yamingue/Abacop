import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { SearchBar, Card } from 'react-native-elements'

const vehicules = [
    {
        matricule: '18C1980D',
        grise: '66829339',
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
                    <Text>Nom complet: NOM_complet</Text>
                    <Text>NNi :</Text>
                    <Text>PERMIS DE CONDUIRE: </Text>
                    <Card.Image source={require('../Assets/permis.jpg')} />
                    <Card.Divider />
                    <Card.Title h3>Infromation Medicals :</Card.Title>
                    <Text>ANTECEDENTS CHIRURGICAUX: </Text>
                    <Text>ALLERGIES MEDICALES: </Text>
                    <Text>MEDECIN SOIGNANT: </Text>
                    <Text>PERSONNE A CONTACTER EN CAS D’URGENCE: </Text>
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
            usager: null,
            text:'',
        }
        this.chercheUsager = this.chercheUsager.bind(this)
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
                    onSubmitEditing={text=>this.chercheUsager(text)}

                />
                {
                    this.state.usager != null ? <UsagerCard usager={this.state.usager} /> : null
                }
                {
                    this.state.isLoad ? <ActivityIndicator size="large" color="#0000ff" /> : null
                }
            </ScrollView>
        );
    }
}