/**
 * Created by ligui on 16/8/24.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
}from 'react-native';
class WaitingLeaf extends Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
        this.getPhoneNumber=this.getPhoneNumber.bind(this);
        this.getPassword=this.getPassword.bind(this);
    }
    getPhoneNumber() {
        if (this.props.phoneNumber&&this.props.phoneNumber!="") {
            return this.props.phoneNumber;
        }
    }
    getPassword() {
        if (this.props.userPW&&this.props.userPW!="") {
            return this.props.userPW;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    注册使用的手机号：{this.props.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    注册使用的密码：{this.props.userPW}
                </Text>
                <Text style={styles.bigTextPrompt}
                    onPress={this.goBack}>
                    返回
                    </Text>
            </View>
        );
    }
    goBack(){
        this.props.navigator.replace({
            name:"register"
        })
    }
}
const  styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF'
        },
        textPromptStyle: {
            height: 30,
            fontSize: 20
        },
        bigTextPrompt: {
            width: 300,
            height:60,
            backgroundColor: 'gray',
            color: 'white',
            textAlign: 'center',
            fontSize: 60,
            borderRadius:5
        }
    }

);
module.exports = WaitingLeaf;