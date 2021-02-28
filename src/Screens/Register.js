import React from "react";
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, Alert } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'native-base';
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";


var regImage = require('../assets/CMS-School.jpg');

class Register extends React.Component {

    state = {
        accType: '',
        name: '',
        email: '',
        password: '',
        accType: null
    }

    signupFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            Alert.alert("email can't be empty!")
        } else if (this.state.name === "" || this.state.name === " " || this.state.name === undefined) {
            Alert.alert("Name can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
            Alert.alert("passwod can't be empty!")
        } else if (this.state.accType === "" || this.state.accType === " " || this.state.accType === undefined) {
            Alert.alert("Please Enter Account Type!")
        } else {
            if (this.state.accType === 'std') {
                auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() => {
                        Alert.alert("Sign Up Successfully");
                        this.props.navigation.navigate('Dashboard');
                        database()
                            .ref('/users/student')
                            .push({
                                email: this.state.email,
                                name: this.state.name,
                                password: this.state.password,
                                accountType: this.state.accType
                            })
                            .then((res) => console.log(res))
                    })
                    .catch(error => {
                        alert(error);
                    });
            } else if (this.state.accType === 'com') {
                auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    Alert.alert("Sign Up Successfully");
                    this.props.navigation.navigate('Dashboard');
                    database()
                        .ref('/users/company')
                        .push({
                            email: this.state.email,
                            name: this.state.name,
                            password: this.state.password,
                            accountType: this.state.accType
                        })
                        .then((res) => console.log(res))
                })
                .catch(error => {
                    alert(error);
                });
            }

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.regImage}>
                    <Image
                        style={{ width: 300, height: 180 }}
                        source={regImage}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.textHead}>College Management System</Text>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Username"
                        autoCapitalize='sentences'
                        onChangeText={text => this.setState({
                            name: text
                        })}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={text => this.setState({
                            email: text
                        })}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={text => this.setState({
                            password: text
                        })}
                    />
                </View>
                <DropDownPicker
                    items={[
                        { label: 'Student', value: 'std', icon: () => <Icon name='user-graduate' style={{ fontSize: 25 }} type="FontAwesome5" /> },
                        { label: 'Company', value: 'com', icon: () => <Icon name='building' style={{ fontSize: 25 }} type="FontAwesome" /> },
                    ]}
                    defaultValue={this.state.accType}
                    containerStyle={{ height: 40, width: 250 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => this.setState({
                        accType: item.value
                    })}
                />
                <TouchableOpacity style={styles.btnReg} onPress={() => this.signupFunc()} >
                    <Text style={styles.textReg}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    regImage: {
        padding: 0,
        margin: 0
    },
    textHead: {
        color: '#FB6527',
        fontSize: 25,
        fontFamily: 'Momcake'
    },
    input: {
        width: '100%',
        margin: 10,
    },
    btnReg: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 20,
        width: '100%',
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#FB6527'
    },
    textReg: {
        textAlign: 'center',
        color: '#FB6527',
        fontSize: 25,
        fontFamily: 'Momcake'
    },
})

export default Register;