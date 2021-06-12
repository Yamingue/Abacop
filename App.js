import React from 'react'
import { View } from 'react-native';
import { Icon, Image } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Soins from './Screens/Soins';
import CodeRoutier from './Screens/CodeRoutier';

var abacop = require('./Assets/abacop.jpg');
const Tab = createBottomTabNavigator()
export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,

        }}
      >
        <Image source={abacop} style={{
          height: 70,
          resizeMode: 'contain'
        }} />
        <NavigationContainer>
          <Tab.Navigator
          initialRouteName="Acceuil"
          >
           
            <Tab.Screen name="PremierSoins" component={Soins}
              options={{
                tabBarIcon: (props) => <Icon name='medical-services'
                  color={props.color}
                />,
                tabBarLabel:"Premier Soins"
              }}

            />
             <Tab.Screen name="Acceuil" component={Home}
              options={{
                tabBarIcon: (props) => <Icon name={'home'}
                  color={props.color}
                />
              }}
            />
            <Tab.Screen name="CodeRoutier" component={CodeRoutier}
              options={{
                tabBarIcon: (props) => <Icon name='warning'
                  color={props.color}
                />,
                tabBarLabel:"Code Routier"
              }}

            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}