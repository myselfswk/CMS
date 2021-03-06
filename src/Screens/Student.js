import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Icon, View } from "native-base";
import { List, ListItem, } from 'native-base';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class Student extends Component {

    state = {
        students: [],
        isData: false,
        loggedInUser: {},
        user: {}
    }
    componentDidMount() {
        database().ref('users/student').once('value', data => {
            let arr = []
            for (var key in data.val()) {
                arr.push(data.val()[key])
            }
            this.setState({
                students: arr
            })
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

    list = () => {
        const { students, loggedInUser } = this.state;
        return (
            students.map((student, id) => {
                return (
                    <List key={id}>
                        <ListItem first>
                            <View style={{ flexDirection: 'column', width: 320 }}>
                                <Text style={{ fontWeight: 'bold', color: '#1C468A', fontSize: 18, fontFamily: 'Lemon' }}>{student.name}</Text>
                                <Text style={{ fontSize: 18 }}>{student.email}</Text>
                                <Text style={{ fontSize: 18 }}></Text>
                                {
                                    loggedInUser.accountType === 'com' ?
                                        <TouchableOpacity style={styles.btnView}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#fff" }}>
                                                Hire Me
                                            </Text>
                                        </TouchableOpacity>
                                        : null
                                }
                            </View>
                        </ListItem>
                    </List>
                )
            })
        )
    }

    render() {
        return (
            <>
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{ textAlign: 'center', fontFamily: 'Momcake', color: '#FB6527', fontWeight: "700", fontSize: 30 }}
                    >Hire New Employees</Text>
                </View>
                <ScrollView>
                    <Container>
                        <View>
                            {this.list()}
                        </View>
                    </Container>
                </ScrollView>
            </>
        );
    }
}

var styles = StyleSheet.create({
    profileD: {
        color: '#DE1F26',
        padding: 10,
        margin: 10,
        fontSize: 20,
        borderColor: '#DE1F26',
        borderBottomWidth: 1,
    },
    btnView: {
        width: '100%',
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#FB6527',
        alignItems: 'center',
    },
})