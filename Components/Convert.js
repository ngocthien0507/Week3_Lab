import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Convert(props) {
  const fromFlag = props.from === 'usd' ? '🇺🇲' : '🇻🇳';
  const toFlag = props.to === 'usd' ? '🇺🇲' : '🇻🇳';
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.onPressButton(props.to)}
        style={styles.convertButton}>
        <Text>
          {fromFlag} to {toFlag}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  convertButton: {
    marginTop: 20,
    width: 200,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightblue',
    alignItems: 'center'

  },
});

export default Convert;
