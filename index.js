/**
 * @format
 */

import React, {useState} from 'react';
import {AppRegistry, View} from 'react-native';
import {Avatar, Button, Input, Icon} from 'react-native-elements';
import App from './App';
import {name as appName} from './app.json';

const Main = props => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [islog, setLog] = useState(false);
  const user = [
    {
      email: 'yamking01@gmail.com',
      pass: '12345678',
      tel: '93087282',
    },
    {
      email: 'alexandre@gmail.com',
      pass: '12345678',
      tel: '90496122',
    },
  ];

  const log = () => {
    let arr = user.filter(
      it => (it.email == mail || it.tel == mail) & (it.pass == pass),
    );
    if (arr.length > 0) {
      setLog(true)
      console.log(arr);
    } else {
      alert('Identifiant invalide');
    }
  };
  return (
    <>
      {islog ? (
        <App />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              minHeight: 100,
              backgroundColor: '#FFF',
              width: '90%',
              elevation: 1,
              padding: 10,
              borderRadius: 10,
            }}>
            <Avatar
              containerStyle={{
                alignSelf: 'center',
                position: 'absolute',
                marginTop: -50,
              }}
              source={require('./Assets/logo.png')}
              size={100}
              rounded
            />
            <View style={{marginTop: 50}}>
              <Input
                value={mail}
                onChangeText={txt => setMail(txt)}
                label="Téléphone ou email"
                leftIcon={<Icon name="user" type="antdesign" />}
              />
              <Input
                value={pass}
                onChangeText={txt => setPass(txt)}
                label="Mot de passe"
                secureTextEntry
                leftIcon={<Icon name="key" type="antdesign" />}
              />
              <Button
                buttonStyle={{backgroundColor: '#820606'}}
                containerStyle={{borderRadius: 10, backgroundColor: '#820606'}}
                title="Connexion"
                onPress={log}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

AppRegistry.registerComponent(appName, () => Main);
