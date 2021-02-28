import React from "react";
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity, Alert } from "react-native";
import auth from '@react-native-firebase/auth';

var regImage = require('../assets/CMS-School.jpg');

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    signInFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            Alert.alert("email can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
            Alert.alert("password can't be empty!")
        } else {
            auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    Alert.alert('User signed in!');
                    this.props.navigation.navigate('Dashboard');
                })
                .catch(error => {
                    Alert.alert(error);
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.regImage}>
                    <Image
                        style={{width: 300, height: 180}}
                        source={regImage}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.textHead}>College Management System</Text>
                <View style={styles.input}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            onChangeText={text => this.setState({
                                email: text
                            })}
                        />
                </View>
                <View style={styles.input}>
                        <TextInput
                            placeholder="Password"
                            style={styles.textInput}
                            secureTextEntry
                            onChangeText={text => this.setState({
                                password: text
                            })}
                        />
                </View>
                <TouchableOpacity style={styles.btnReg} onPress={() => this.signInFunc()} >
                    <Text style={styles.textReg}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
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
        color: 'blue'
    },
    btnReg: {
        backgroundColor: '#fff',
        padding: 10,
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

export default Login;