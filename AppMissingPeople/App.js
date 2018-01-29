import React from 'react';
import {AppRegistry,Button,Image,StyleSheet,Text,View} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import Home from './tab/home';
import AddLost from './tab/addLost';
import Info from './tab/info';
import Profile from './tab/profile';



var MainScreenNavigator=TabNavigator({
  tab1: {screen: Home},
  tab2: {screen: AddLost},
  tab3: {screen: Profile},
  tab4: {screen: Info}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    labelStyle:{
      fontSize:12,
      padding:0
    }
  }
});



export default MainScreenNavigator;
