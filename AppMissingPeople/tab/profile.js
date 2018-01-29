import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Button} from 'react-native';
import {Icon} from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';

export default class Profile extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'ผู้ใช้',
        tabBarIcon: ({tintColor}) => <Icon name="people" type="FontAwesome" size={30} color={tintColor}/> 
    }
    render() {
        return(  
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>
                        โปรไฟล์
                    </Text>
                </View>
                <View style={{
                        flex:1,
                        margin: 20,
                        }}>
                    <View style={{
                        height:200,
                        backgroundColor: 'white',
                        }}>
                        <View style={{flex:1}}>
                            <View style = {{
                                height: 150,
                                width: 150,
                                backgroundColor: '#E1E1E1',
                                borderRadius: 100,
                                alignSelf: 'center',
                                margin: 20,
                                padding: 10
                            }}>
                            </View>
                        </View>
                    </View>
                    <View >
                        <TextField
                            label = 'ชื่อ - สกุล'
                            value = 'อนุกูล  ปั้นวงศ์' />
                    </View>
                    <View 
                        style={{
                            width: 150,
                            backgroundColor: 'white',
                            alignSelf: 'center',
                            marginTop: 50,
                        }}>
                        <Button
                            title='ออกจากระบบ'
                            color='#399CFE'
                            onPress={() => {}}/>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
    TextInput:{
        borderWidth:0.5,
        borderBottomColor:'#999',
        borderBottomWidth: 1,
        height : 40,
        paddingLeft: 10,
        borderRadius: 20,
    },
  });