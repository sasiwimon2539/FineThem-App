import React from 'react';
import {AppRegistry,Button,Image,StyleSheet,Text,View} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import Home from './tab/home';
import AddLost from './tab/addLost';
import Info from './tab/info';
import Profile from './tab/profile';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      title:'FindThem'
    },
  },
})

export const LostStack = StackNavigator({
  AddLost:{
    screen: AddLost,
    navigationOptions:{
      title:'แจ้งคนหาย'
    },
  },
})

export const ProfileStack = StackNavigator({
  Profile:{
    screen: Profile,
    navigationOptions:{
      title:'โปรไฟล์'
    },
  },
})

export const InfoStack = StackNavigator({
  Info:{
    screen: Info,
    navigationOptions:{
      title:'เกี่ยวกับ'
    },
  },
})


var MainScreenNavigator=TabNavigator({
  tab1: {screen: HomeStack},
  tab2: {screen: LostStack},
  tab3: {screen: ProfileStack},
  tab4: {screen: InfoStack}
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
