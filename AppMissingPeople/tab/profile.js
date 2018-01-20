import React, { Component } from 'react';
import {AppRegistry,Button,Image,StyleSheet,Text,View} from 'react-native';


export default class Profile extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'ผู้ใช้'
    }
    render() {
        return  <View style={styles.container}>
            <Text style={styles.welcome}>
                This profile page
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