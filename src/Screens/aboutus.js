import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";

export default class AboutUS extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text style={{fontFamily:'Momcake', fontSize: 30, color: '#FB6527', fontWeight: '700'}}>About US</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                A college campus recruitment system that consists of a student login, company login and an admin login. The project is beneficial for college students,
                various companies visiting the campus for recruitment and even the college placement officer. The software system allows the students to create their
                profiles and upload all their details including their marks onto the system. The admin can check each student details and can remove faulty accounts
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{fontFamily:'Momcake', fontSize: 20, color: '#FB6527', fontWeight: '700'}}>By, Muhammad Waleed Khan</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}