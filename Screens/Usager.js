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
        medecint: 'Yamingue kingatal yamking01@gmail.com 63579240',
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
                    <Card.Title h3>Infromation personelle</Card.Title>
                    <Text>Nom complet: {this.props.usager.nom}</Text>
                    <Text>NNi : {this.props.usager.nni}</Text>
                    <Text>PERMIS DE CONDUIRE: </Text>
                    <Card.Image source={require('../Assets/permis.jpg')} />
                    <Card.Divider />
                    <Card.Title h3>Infromation Medicals :</Card.Title>
                    <Text>ANTECEDENTS CHIRURGICAUX: {this.props.usager.antecedant}</Text>
                    <Text>ALLERGIES MEDICALES: {this.props.usager.allergie} </Text>
                    <Text>MEDECIN SOIGNANT: {this.props.usager.medecint}</Text>
                    <Text>PERSONNE A CONTACTER EN CAS D’URGENCE: {this.props.usager.contacturgent}</Text>
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
            text:'',
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