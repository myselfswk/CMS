import React from 'react';
import {
    StyleSheet,
    Alert
} from 'react-native';
import { Content, Form, Text, Item, Label, Input, Button, Container } from "native-base";

import database from '@react-native-firebase/database';

class PostAJob extends React.Component {

    state = {
        jobTitle: '',
        description: '',
        arthurName: '',
        contactNo: '',
        email: ''
    }

    PostAJobFunc = () => {

        if (this.state.jobTitle === "" || this.state.jobTitle === " " || this.state.jobTitle === undefined) {
            Alert.alert("Please, Fill Your Job Title")
        } else if (this.state.description === "" || this.state.description === " " || this.state.description === undefined) {
            Alert.alert("Please, Fill Description")
        } else if (this.state.arthurName === "" || this.state.arthurName === " " || this.state.arthurName === undefined) {
            Alert.alert("Please, Fill Your Arther Name")
        } else if (this.state.contactNo === "" || this.state.contactNo === " " || this.state.contactNo === undefined) {
            Alert.alert("Please, Fill Your Contact Number")
        } else if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            Alert.alert("Please, Fill Your Email Address")
        }
        else {
            database()
                .ref('/postajob')
                .push({
                    jobTitle: this.state.jobTitle,
                    description: this.state.description,
                    arthurName: this.state.arthurName,
                    contactNo: this.state.contactNo,
                    email: this.state.email
                })
                .then(() => {
                    Alert.alert('Your Info has been collected')
                    this.setState({
                        jobTitle: '',
                        description: '',
                        arthurName: '',
                        contactNo: '',
                        email: ''
                    })
                });
        }
    }

    render() {
        return (
            <Container>
                <Text style={styles.postH}>-:Post A Job:-</Text>
                <Content >
                    <Form>
                        <Item floatingLabel style={styles.input}>
                            <Label>Your Job Title</Label>
                            <Input value={this.state.jobTitle} autoCapitalize={'sentences'} onChangeText={text => this.setState({
                                jobTitle: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Add Some Description</Label>
                            <Input value={this.state.description} onChangeText={text => this.setState({
                                description: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Arther Name</Label>
                            <Input value={this.state.arthurName} autoCapitalize={'sentences'} onChangeText={text => this.setState({
                                arthurName: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Contact Number</Label>
                            <Input value={this.state.contactNo} keyboardType={'number-pad'} onChangeText={text => this.setState({
                                contactNo: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Your Email Address</Label>
                            <Input value={this.state.email} onChangeText={text => this.setState({
                                email: text
                            })} />
                        </Item>
                    </Form>
                    <Button onPress={() => this.PostAJobFunc()} full style={styles.postB}>
                        <Text style={styles.btnText}>Post A Job</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    postH: {
        fontSize: 30,
        fontWeight: '700',
        color: '#FB6527',
        textAlign: 'center',
        textTransform: 'uppercase'

    },
    postB: {
        backgroundColor: '#FB6527',
        marginTop: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    input: {
        marginTop: '5%',
    }
});

export default PostAJob;