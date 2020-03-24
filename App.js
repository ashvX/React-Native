import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  StatusBar,
} from 'react-native';
import {Button, ThemeProvide} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {Tab} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function LoginScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params]);
  return (
    <View style={{flex: 3, alignItems: 'stretch', justifyContent: 'center'}}>
      <StatusBar animated backgroundColor="blue" />

      <View style={{padding: 10}}>
        <TextInput
          style={{backgroundColor: 'black', fontSize: 20, padding: 10}}
        />
        <TextInput style={{backgroundColor: 'black', fontSize: 20}} />
      </View>

      <View style={styles.powderBlack}>
        <Button
          color="blue"
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

function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Create post"
          color="blue"
          onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Go to Details"
          color="red"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          color="yellow"
          title="Go to Login Screen"
          onPress={
            ({justifyContent: 'center'}, () => navigation.navigate('Login'))
          }
        />
        <Button
          color="green"
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 100, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        style={{}}
        color="red"
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Details', {post: postText});
        }}
      />
    </>
  );
}

function TestScreen({navigation}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('Keep it simple, stupid!')}
                title="Header button"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//export default App;
