import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

var logo = require('../assets/CMS-Logo.jpg');

class Splash extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                ></Image>
                <Text style={styles.textLogo}>College Management System</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '95%',
        height: '25%',
    },
    textLogo: {
        marginTop: 30,
        color: '#FB6527',
        fontSize: 30,
        fontFamily: 'Momcake',
        textAlign: 'center'
    }
});

export default Splash;