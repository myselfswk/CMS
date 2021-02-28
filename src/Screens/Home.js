import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import auth from "@react-native-firebase/auth";

var loginImage = require('../assets/CMS-Logo.jpg');

export default class Home extends Component {

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Dashboard');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.loginImage}
                    source={loginImage}
                    resizeMode='contain'
                />

                <Text style={styles.hello}>
                    Hello!
                </Text>

                <Text style={styles.welcome}>
                    Welcome To the College Management System,
                    where you can register as a Student or Company
                    You Like.
                </Text>

                <View style={styles.loginView}>

                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signupBtn}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                <Text style={{ fontSize: 16 }}>Or Via Social Media</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#3f51b5',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Icon name='facebook-f' style={{ color: '#fff' }} type="FontAwesome" />
                    </View>

                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#EA4335',
                            marginHorizontal: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Icon name='google' style={{ color: '#fff' }} type="FontAwesome" />
                    </View>

                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#1565c0',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Icon name='linkedin' style={{ color: '#fff' }} type="FontAwesome" />

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginImage: {
        width: 250,
    },
    hello: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    loginView: {
        flexDirection: 'row',
        margin: 20,
        paddingVertical: 10
    },
    loginBtn: {
        backgroundColor: '#FB6527',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2
    },
    loginText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    signupBtn: {
        backgroundColor: '#fff',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#FB6527'
    },
    signupText: {
        textAlign: 'center',
        color: '#FB6527',
        fontSize: 18
    },

});