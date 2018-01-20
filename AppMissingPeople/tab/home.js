import React, { Component } from 'react';
import {AppRegistry,Button,Image,StyleSheet,Text,View} from 'react-native';


export default class Home extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'หน้าแรก'
    }
    render() {
        return  <View style={styles.container}>
            <Text style={styles.welcome}>
                This home page
            </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });