import * as React from 'react';
import {StyleSheet, View, TextInput, Button, Alert, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
      <View style={{padding:10}}>
        <TextInput style={{backgroundColor: 'black', fontSize: 20, padding:10}} />
        <TextInput style={{backgroundColor: 'black', fontSize: 20}} />
      </View>

      <View style={(styles.powderBlue)}>
        <Button
          style={{backgroundColor: 'red'}}
          title="Login Button"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <TextInput
      style={{ height:40, backgroundColor:'azure', fontSize:20 }}
      placeholder="Input"
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
