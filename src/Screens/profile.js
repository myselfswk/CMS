import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Item, Input, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

class Profile extends React.Component {

    state = {
        user: {},
        isData: false,
        loggedInUser: {},
    }

    signOutFunc = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert('User signed out!');
            });
        this.props.navigation.navigate('Home');
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('users/student').once('value', (data) => {
                    setTimeout(() => {
                        for (var key in data.val()) {
                            if (data.val()[key].email === user.email) {
                                this.setState({
                                    loggedInUser: data.val()[key],
                                    isData: true
                                })
                            }
                        }
                    }, 1000);
                })
            }
        })

        auth().onAuthStateChanged((user) => {
            if (user) {
                database().ref('users/company').once('value', (data) => {
                    setTimeout(() => {
                        for (var key in data.val()) {
                            if (data.val()[key].email === user.email) {
                                this.setState({
                                    loggedInUser: data.val()[key],
                                    isData: true
                                })
                            }
                        }
                    }, 1000);
                })
            }
        })
    }

    render() {
        const { isData, loggedInUser } = this.state;
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.profileH}>Profile</Text>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/demo-user.png')}
                    />
                </View>
                <View >
                    {
                        isData ?
                            <View style={styles.profileBody}>
                                <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15, borderColor: '#DE1F26', borderWidth: 5 }}>
                                    <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.name} />
                                </Item>
                                <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15, borderColor: '#DE1F26', borderWidth: 5 }}>
                                    <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.email} />
                                </Item>
                                <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15, borderColor: '#DE1F26', borderWidth: 5 }}>
                                    <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.password} />
                                </Item>
                                <TouchableOpacity style={styles.btnView} onPress={() => this.signOutFunc()}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>
                                            SIGN OUT
                                </Text>
                                        <Icon name='logout' type={'AntDesign'} style={{ color: "#fff" }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        : null
                    }
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    profileH: {
        fontSize: 35,
        color: '#FB6527',
        padding: 7,
        margin: 7,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        fontWeight: 'bold',
    },
    profileBody: {
        width: '80%',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#FB6527',
        borderWidth: 5,
    },
    profileD: {
        color: '#FB6527',
        padding: 10,
        margin: 10,
        fontSize: 20,
        borderColor: '#FB6527',
        borderBottomWidth: 1,
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