import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Icon} from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons/FontAwesome';


export default class Info extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'เกี่ยวกับ',
        tabBarIcon: ({tintColor}) => <Icon type='EvilIcons' name="info"  size={30} color={tintColor}/> 
    }
    render() {
        return  <View style={styles.container}>
            <Text style={styles.welcome}>
                This info page
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