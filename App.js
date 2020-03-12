/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Alert, Text} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 10,
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
  powderBlue: {
    flex: -1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#A8BCB2',
    borderRadius: 10,
    padding: 5,
  },
});

export default class LotsOfStyles extends Component {
  onPressButton() {
    Alert.alert('You click button');
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <View style={({}, styles.powderBlue)}>
          <TextInput
            style={{
              height: 40,
              backgroundColor: 'azure',
              fontSize: 20,
              textAlign: 'center',
            }}
            placeholder="Email / Username / Phone Number"
          />
        </View>

        <View style={({}, styles.powderBlue)}>
          <TextInput
            style={{
              height: 40,
              backgroundColor: 'azure',
              fontSize: 20,
              textAlign: 'center',
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.bigBlue}>Forgot the password? </Text>
        <Button
          onPress={this.onPressButton}
          title="Button"
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}
        />
      </View>
    );
  }
}
