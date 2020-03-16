import * as React from 'react';
import {StyleSheet, View, TextInput, Button, Alert, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
  bigBlack: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 10,
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
  powderBlack: {
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
      <View style={{padding: 10}}>
        <TextInput
          style={{backgroundColor: 'black', fontSize: 20, padding: 10}}
        />
        <TextInput style={{backgroundColor: 'black', fontSize: 20}} />
      </View>

      <View style={styles.p}>
        <Button
          style={{backgroundColor: 'red'}}
          title="Login Button"
          onPress={() =>
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Login Screen" onPress={() => navigation.navigate('Login')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
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
