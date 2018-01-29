import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Profile extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'แจ้งเบาะแส',
        tabBarIcon: ({tintColor}) => <Icon name="people" type="FontAwesome" size={30} color={tintColor}/> 
    }
    render() {
        return(  
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>
                        แจ้งเบาะแส
                    </Text>
                </View>
                <Text style={styles.welcome}>
                    
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    Header:{
        flexDirection: 'row', 
        backgroundColor: '#399CFE', 
        height: 80, 
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    TextHeader:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
  });