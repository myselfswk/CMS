import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Spinner } from "native-base";

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";

class Company extends React.Component {

    state = {
        postjob: '',
        isData: false,
        loggedInUser: {},
        user: {}
    }

    redToPost = () => {
        this.props.navigation.navigate('PostAJob');
    }

    componentDidMount() {
        database()
            .ref('postajob')
            .on('value', (data) => {
                setTimeout(() => {
                    for (var key in data.val()) {
                        this.setState({
                            ...this.state,
                            postjob: [data.val()[key], ...this.state.postjob],
                        })
                    }
                    this.setState({
                        isData: true
                    })
                }, 1000);
            })
        this.setState({});

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
    }

    postjobFunc = () => {
        const { postjob, isData, loggedInUser } = this.state;
        return (
            isData ? postjob.map((postjob, id) => {
                return (
                    <View style={styles.cardView} key={id}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700' }}>Job Title: </Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{postjob.jobTitle} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700', }}>Job Description: </Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{postjob.description} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700' }}>Arthur Name: </Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{postjob.arthurName} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700' }}>Contact No: </Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{postjob.contactNo} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700' }}>Email Address: </Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{postjob.email} </Text>
                        </View>
                        {
                            loggedInUser.accountType === "std" ?
                                <TouchableOpacity style={styles.btnView}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                        Apply Now
                                    </Text>
                                </TouchableOpacity>
                            : null
                        }

                    </View>
                );
            })
                :
                (<View style={styles.donorSpinner}>
                    <Spinner color='#FB6527' />
                </View>)
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.btnView} onPress={() => this.redToPost()}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                        Add A Post +
                    </Text>
                </TouchableOpacity>
                <ScrollView style={{ width: '98%', height: '79%' }} >
                    {this.postjobFunc()}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    btnView: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#FB6527',
        alignItems: 'center',
    },
    donorSpinner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    donorView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    },
    heading: {
        fontSize: 35,
        color: '#FB6527',
        width: '100%',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginTop: '8%',
        marginBottom: '5%'
    },
    cardView: {
        marginTop: '2%',
        alignItems: 'flex-start',
        width: '100%',
        padding: 15,
        borderColor: '#FB6527',
        borderWidth: 2,
    },
    textView: {
        paddingBottom: 40
    },
});

export default Company;