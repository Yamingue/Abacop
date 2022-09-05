import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';
import code_data from '../Data/Code';

const DataView = ({item}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
          margin: 10,
        }}>
        {item.title}
      </Text>
      <Image
        source={item.image}
        style={{
          height: 180,
          resizeMode: 'contain',
          width: '100%',
        }}
      />
      <Text>{item.text}</Text>
    </View>
  );
};

export default class CodeRoutier extends React.Component {
  render() {
    let source = {uri: 'bundle-assets://code_route.pdf'};
    return (
        <View style={styles.container}>
            <Pdf
                source={source}
                style={styles.pdf}/>
        </View>)
    return (
      <ScrollView
        style={{
          padding: 10,
          flex: 1,
        }}>
        {code_data.map((v, k) => (
          <DataView item={v} key={k} />
        ))}
        <Pdf
        enableRTL
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
