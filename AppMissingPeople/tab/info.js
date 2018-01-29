import React, { Component } from 'react';
import {StyleSheet,Text,View,Button,Image,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons/FontAwesome';


export default class Info extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'เกี่ยวกับ',
        tabBarIcon: ({tintColor}) => <Icon name="info" type="FontAwesome" size={30} color={tintColor}/> 
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>
                        เกี่ยวกับ
                    </Text>
                </View>
                <ScrollView>
                <View style={{flex:1}}>
                    <View style={styles.Img}>
                    <Image 
                        style={{width: 50, height: 90}}
                        source={require('./rmutsv.png')}/>
                    </View>
                </View>
                <View>
                    <Text style={{margin:20}}>
                        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
                    </Text>
                </View>  
                </ScrollView>
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
    Img:{
        alignSelf: 'center',
        marginTop: 20,
        marginBottom:20
    },
  });
