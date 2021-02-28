import React from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, StatusBar } from "react-native";
import { Icon } from 'native-base';

import AboutUS from "./aboutus";
import Profile from "./profile";
import Company from "./company";

function Dashboard() {
    return (
        <>
            <StatusBar hidden={false} backgroundColor="#FB6527" translucent={true} />
            <Container >
                <Tabs style={styles.tabStatusBar}>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='database' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <Company />
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='gitlab' style={{color: '#fff'}} type='FontAwesome' />    
                        </Text></TabHeading>}>
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='comment-o' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <AboutUS />
                    </Tab>
                    <Tab tabStyle={{ width: 100 }} heading={<TabHeading style={styles.tabDashboard}>
                        <Text style={styles.tabText}>
                            <Icon name='user-o' style={{ color: '#fff' }} type='FontAwesome' />
                        </Text></TabHeading>}>
                        <Profile />
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