import React from 'react';
import InputText from './Components/inputText';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={{ fontSize: 25, fontWeight: '400', textAlign: 'center' }}>
            Please enter the value of currency you want to convert
          </Text>
        </View>
        <View style={styles.Convert}>
          <View style={styles.inputgroup}>
            <InputText />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: 'center',
  },
  Convert: {
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputgroup: {
    flex: 1,
  },
});
