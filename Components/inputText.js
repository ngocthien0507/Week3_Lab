import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Convert from './Convert';


export default class inputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCurrency: '',
            convertCurrency: '',
            currency: 23000,
        };
    }
    onPressButton = (data) => {

        if (data == 'usd') {
            this.setState({
                currency: 23000,
                convertCurrency: this.state.currentCurrency * this.state.currency,
            });
        }
        if (data == 'vnd') {
            this.setState({
                currency: 1 / 23000,
                convertCurrency: this.state.currentCurrency * this.state.currency,
            });
        }
    };
    render() {
        return (
            <View style={styles.inputGroup}>
                <View>
                    <TextInput
                        placeholder='type your value here'
                        keyboardType='number-pad'
                        style={{
                            height: 60,
                            padding: 5,
                            width: 300,
                            textAlign: 'center',
                            fontSize: 25,
                            borderWidth: 1,
                            borderColor: 'lightblue',
                        }}
                        onChangeText={(currentCurrency) => this.setState({
                            currentCurrency,
                            convertCurrency: currentCurrency * this.state.currency
                        })}
                    />
                </View>
                <View style={styles.convertButton}>
                    <Convert onPressButton={this.onPressButton}
                        from="vnd"
                        to="usd"
                    />
                    <Convert onPressButton={this.onPressButton}
                        from="usd"
                        to="vnd"
                    />
                </View>
                <View style={styles.TextGroup}>
                    <Text>Current Currency:</Text>
                    <Text style={{ fontSize: 30, color: 'lightgreen' }}>{this.state.currentCurrency}</Text>
                    <Text>Conversion Currency: </Text>
                    <Text style={{ fontSize: 30, color: 'lightgreen' }}>{this.state.convertCurrency}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        marginBottom: 30,
    },
    convertButton: {
        flexDirection: 'column',
        marginBottom: 10,
        alignItems: 'center',
    },
    TextGroup: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
});