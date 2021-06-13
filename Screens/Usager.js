import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { SearchBar, Card } from 'react-native-elements'

const usagers = [
    {
        nom: 'NDOUNOUBA ALEXANDRE',
        tel: '66829339',
        nni: '0000111896',
        gs: "O+",
        permis: require('../Assets/permis.jpg'),
        diabete: 'O/N',
        antecedant: 'aucun',
        allergie: "aucune",
        medecint: 'Yamingue kingatal 63579240',
        contacturgent: '63579240'
    }
]

class UsagerCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Card>
                    <Card.Title h3>Informations personelles</Card.Title>
                    <Card.Title>Nom et Prenom: {this.props.usager.nom}</Card.Title>
                    <Card.Title>Téléphone: {this.props.usager.tel} </Card.Title>
                    <Card.Title>NNi : {this.props.usager.nni}</Card.Title>
                    <Card.Title>PERMIS DE CONDUIRE: </Card.Title>
                    <Card.Image source={this.props.usager.permis} />
                    <Card.Divider />
                    <Card.Title h3>Informations Medicales</Card.Title>
                    <Card.Title>GROUPE SANGUIN: {this.props.usager.gs}</Card.Title>
                    <Card.Title>ANTECEDENTS CHIRURGICAUX: {this.props.usager.antecedant}</Card.Title>
                    <Card.Title>ALLERGIES MEDICALES: {this.props.usager.allergie} </Card.Title>
                    <Card.Title>DIABETIQUE: {this.props.usager.diabete}</Card.Title>
                    <Card.Title>GROUPE SANGUIN: {this.props.usager.gs}</Card.Title>
                    <Card.Title>MEDECIN SOIGNANT: {this.props.usager.medecint}</Card.Title>
                    <Card.Title>PERSONNE A CONTACTER EN CAS D’URGENCE: {this.props.usager.contacturgent}</Card.Title>
                </Card>
            </View>
        );
    }
}

export default class Usager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            usager: null,
            text: '',
        }
        this.chercheUsager = this.chercheUsager.bind(this)
    }

    chercheUsager(text) {
        this.setState({ isLoad: true })
        let usager = usagers.find(item => {
            return item.nom.indexOf(text) != 0 || item.tel == text || item.nni == text
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
                    placeholder={'Rechercher usager'}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    onSubmitEditing={text => this.chercheUsager(text)}

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