import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import Login from './Components/Login';
import configureStore from './Store/configureStore';
import Expo from 'expo';
import { Provider } from 'react-redux';
import Dashboard from './Components/Dashboard';
import CampaignForm from './Components/CampaignForm';
import AppNavigator from './Components/AppNavigator';

export const store = configureStore();
const print = ()=>{
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
  const state = store.getState();
  console.log(state);
}

store.subscribe(print);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
 {/* <Tmp></Tmp> */}
        <AppNavigator/>
        {/* <Dashboard></Dashboard> */}
        {/* <Login></Login> */}
      </Provider>
     
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
