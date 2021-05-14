import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Add from '../../components/Add';
import Gallery from '../../components/Gallery';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const Tab = createBottomTabNavigator();

let config = configureStore();
let store = config.store;
let persistor = config.persistor;

//Bottom buttons tab
function MyTabs() {
  //Hide splash screen when app is load
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Add"
      tabBarOptions={{
        activeTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Feed"
        component={Add}
        options={{
          tabBarLabel: 'ADD',
          tabBarIcon: ({color, size}) => (
            <Icon name="plus-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Gallery}
        options={{
          tabBarLabel: 'GALLERY',
          tabBarIcon: ({color, size}) => (
            <Icon name="image-multiple" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
