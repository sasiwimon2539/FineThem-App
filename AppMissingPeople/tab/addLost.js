import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerAndroid,
    TouchableWithoutFeedback,
    TextInput,
    ScrollView,
    Button,
    Image,
    } from 'react-native';
import {Icon} from 'react-native-elements';
import { MapView } from 'expo';
//import { TextField } from 'react-native-material-textfield';

class UselessTextInput extends Component {
    render() {
      return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          maxLength = {200}
        />
      );
    }
  }

export default class AddLost extends React.Component{
    static title = 'DatePickerAndroid';
    static description = 'Standard Android date picker dialog';
    static navigationOptions = {
        tabBarLabel: 'แจ้งบุคคลหาย',
        tabBarIcon: ({tintColor}) => <Icon name="person-add"  size={30} color={tintColor}/> 
    }
    state = {
        spinnerDate: new Date(2018, 4, 5),
        spinnerText:'',
        /*name: '',
        nickname:'',
        age:'',
        gender:'',
        detail:'',*/
    };
    constructor(props) {
        super(props);
        this.state = {
            textname: '',
            textdetail: ' ',
            LatLng: { latitude: 13.734320342036385, longitude: 100.53307402879},
            };
      }
    
    showPicker = async (stateKey, options) => {
        try {
          var newState = {};
          const {action, year, month, day} = await DatePickerAndroid.open(options);
          if (action === DatePickerAndroid.dismissedAction) {
            newState[stateKey + 'Text'] = ' ';
          } else {
            var date = new Date(year, month, day);
            newState[stateKey + 'Text'] = date.toLocaleDateString();
            newState[stateKey + 'Date'] = date;
          }
          this.setState(newState);
        } catch ({code, message}) {
          console.warn(`Error in example '${stateKey}': `, message);
        }
    };
    render() {
        /*let { name } = this.state;
        let { nickname } = this.state;
        let { age } = this.state;
        let { gender } = this.state;
        let { detail } = this.state;*/
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>
                        แจ้งบุคคลคนหาย
                    </Text>
                </View>
                <View style={{
                        flex:1,
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
                                marginTop: 20,
                            }}>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{
                        margin: 20,
                        }}>

                        <Text style={styles.subtopic}>
                            ชื่อ-สกุล
                        </Text>
                        <View style={styles.TextInput}>
                            <TextInput
                                style={{height: 40}}
                                placeholder= ' '
                                underlineColorAndroid="#FFF"
                                onChangeText={(textname) => this.setState({textname})}
                            />
                        </View>

                        <Text style={styles.subtopic}>
                            ชื่อเล่น
                        </Text>
                        <View style={styles.TextInput}>
                            <TextInput
                                style={{height: 40}}
                                placeholder= ' '
                                underlineColorAndroid="#FFF"
                                onChangeText={(textname) => this.setState({textname})}
                            />
                        </View>

                        <Text style={styles.subtopic}>
                            อายุ
                        </Text>
                        <View style={styles.TextInput}>
                            <TextInput
                                style={{height: 40}}
                                placeholder= ' '
                                underlineColorAndroid="#FFF"
                                onChangeText={(textname) => this.setState({textname})}
                            />
                        </View>
                        
                        <Text style={styles.subtopic}>
                            วันที่หาย
                        </Text>
                        <View style={styles.TextInput}>
                            <TouchableWithoutFeedback
                                onPress={this.showPicker.bind(this, 'spinner', {date: this.state.spinnerDate, mode: 'spinner'})}>
                                    <View>
                                    <Text style={styles.textdate}>{this.state.spinnerText}</Text>
                                    </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        <Text style={styles.subtopic}>
                            สถานที่
                        </Text>                                             
                        <View style={[styles.TextInput,{height: 200}]}> 
                            {/*เรียกใช้ map เพื่อ tag สถานที่ */}
                            <MapView
                                style={{ flex: 1 }}
                                initialRegion={{
                                    latitude: 13.734320342036385,
                                    longitude: 100.53307402879,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                onPress={e => this.setState({ LatLng: e.nativeEvent.coordinate})}
                            >
                                <MapView.Marker
                                    key={1}
                                    coordinate={this.state.LatLng}
                                    draggable
                                    title={"Some Title"}
                                    description={"Hello world"} 
                                    onDragEnd={e => this.setState({ LatLng: e.nativeEvent.coordinate}) }
                                />
                            </MapView>
                        </View>

                        <Text style={styles.subtopic}>
                            รายละเอียดอื่น ๆ    
                        </Text>
                        <View style={styles.detail}>
                            <UselessTextInput
                                multiline = {true}
                                numberOfLines = {4}
                                underlineColorAndroid="#FFF"
                                onChangeText={(textdetail) => this.setState({textdetail})}
                                value={this.state.textdetail}
                            />
                        </View>
                        <View style={{
                            width: 70,
                            backgroundColor: 'white',
                            alignSelf: 'center',

                        }}>
                            <Button
                                
                                title='ยืนยัน'
                                color='#399CFE'
                                onPress={() => {}}
                            />
                        </View>
                        

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
    textdate:{
        color:'#999',
        fontSize:16,

    },
    subtopic:{
        marginTop: 10,
        fontSize: 16,

    },
    TextInput:{
        borderWidth:0.5,
        borderColor: '#999',
        height : 40,
        paddingLeft: 10,
        borderRadius: 20,
    },
    detail:{
        borderColor: '#999',
        borderWidth: 0.5,
        margin: 10,
        paddingLeft: 10,
    }
  });