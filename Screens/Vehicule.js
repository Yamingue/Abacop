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
                    <Text>Matricule: {this.props.vehicule.matricule}</Text>
                    <Text>NOM DU PROPRIETAIRE :{this.props.vehicule.proprio}</Text>
                    <Text>CARTE GRISE: </Text>
                    <Card.Image source={require('../Assets/grise.jpg')} />
                    <Card.Divider />
                    <Card.Title>FICHE TECHNIQUE</Card.Title>
                    <Text>
                        {`
                            Empattement :2,51 m
                            Poids à vide :1100 kg 
                            Consommation Réservoir :42 L
                            Consommation urbaine :6.8 L / 100 km
                            Consommation mixte :5.4 L / 100 km
                            Consommation extra-urbaine :4.5 L / 100 km
                            CO2 :114 g/km
                             
                            Moteur
                            Nombre de cylindres :4
                            Nombre de soupapes par cylindre :4
                            Cylindrée :1329 cc
                            Puissance din :99 ch au régime de 6000 tr/min
                            Couple moteur :125 Nm au régime de 4000 tr/min
                            Puissance fiscale :5 CV
                            Position du moteur :NC
                            Alimentation :multipoint 
                            Suralimentation/type :NC

                            Performances
                            Vitesse maximum :175 km/h
                            Accéleration 0/100km/h :11.7 sec
                            Transmission
                            Transmission :Avant
                            Boite :MécaniqueNb. 
                            vitesses :6
                            Distribution :NC
                            Position du moteur :NC
                            Chassis
                            Direction assistée :NC
                            Carrosserie :berline à hayon
                            Diamètre braquage trottoirs :NC
                            Diamètre braquage murs :NC
                            Suspension avant :NC
                            Suspension arrière :NC
                            Freins :NC
                            Largeur pneu avant :175 mm
                            Largeur pneu arrière :175 mm
                            Rapport h/L pneu avant :65
                            Rapport h/L pneu arrière :65
                            Diamètre des jantes avant :15 pouces
                            Diamètre des jantes arrière :15 pouces
                            Autres
                            Intervalle entretien :24 mois
                            Garantie mois :36 mois
                            Nationalité du constructeur :NC
                            Début commercialisation :01/03/16
                            Fin commercialisation :05/04/16
                        `}
                    </Text>
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