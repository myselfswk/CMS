import React, { useEffect } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, StatusBar } from "react-native";
import { Icon } from 'native-base';

import Profile from "./profile";
import AboutUS from "./aboutus";
import Company from "./company";
import Student from './Student';

function Dashboard(props) {
    useEffect(() => {
        // console.log(props)
    }, [])
    return (
        <>
            <StatusBar hidden={false} backgroundColor="#FB6527" translucent={true} />
            <Container >
                <Tabs style={styles.tabStatusBar}>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='database' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <Company navigation={props.navigation} />
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='gitlab' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <Student navigation={props.navigation} />
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='comment-o' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <AboutUS navigation={props.navigation} />
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='user-o' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <Profile navigation={props.navigation} />
                    </Tab>
                </Tabs>
            </Container>

        </>
    );
}

var styles = StyleSheet.create({
    tabStatusBar: {
        paddingTop: 25,
    },
    tabDashboard: {
        backgroundColor: '#FB6527',
    },
    tabText: {
        color: '#fff',
        textTransform: 'uppercase',
    }
})

export default Dashboard;