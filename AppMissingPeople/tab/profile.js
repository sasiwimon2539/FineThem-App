import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component{

    constructor() {
        super();
        this.state = { loadImageSuccess: false, profileImage: { uri:"https://i.pinimg.com/originals/2c/db/b4/2cdbb484a0081c2931fc5258650818c7.jpg" } }
    }
    static navigationOptions = {
        tabBarLabel: 'ผู้ใช้',
        tabBarIcon: ({tintColor}) => <Icon name="people" type="FontAwesome" size={30} color={tintColor}/> 
    }

    errorImageHandle = () => {
        this.setState({ profileImage: require('../image/no-image.png')})
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync().catch(() => { return; }); //catch เลิกทำต่อ ถ้าเกิด throw ใดๆ
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

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
                        <View style={styles.imageContainer}>
                            <TouchableOpacity onPress={this._pickImage}>
                                <Image source={this.state.profileImage}
                                        onError={this.errorImageHandle}
                                        resizeMode="contain"
                                        style={styles.profileImage}/>
                            </TouchableOpacity>
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
    imageContainer: {
        height: 150,
        width: 150,
        flex: 1,
        alignSelf: 'center'
        //margin: 20,
        //padding: 10
    },
    profileImage: {
        height: '100%',
        width: '100%',
        maxHeight: 150,
        maxWidth: 150,
        borderRadius: 150
    },
  });