import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';

class Profile extends React.Component {

    signOutFunc = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert('User signed out!');
            });
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text>This is Profile</Text>
                <TouchableOpacity style={styles.btnView} onPress={() => this.signOutFunc()}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                        SIGN OUT
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnView: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#FB6527',
        alignItems: 'center',
    },
});

export default Profile;