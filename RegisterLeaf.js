/**
 * Created by ligui on 16/8/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
let  Dimensions = require('Dimensions');
let  totalWidth = Dimensions.get('window').width;
let  pointX = totalWidth*0.1;
let  componentWidth = totalWidth*0.8;
class RegisterLeaf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputedNum:'',
            inputedPw:'',
        };
        this.userPressConfirm = this.userPressConfirm.bind(this);
    }
    updateNum(newText) {
        this.setState((state)=>{
            return{
                inputedNum: newText
            }
        });
    }
    updatePW(newText) {
        this.setState(()=> {
            return{
                inputedPw: newText
            }
        });
    }
    userPressConfirm(){
        this.props.navigator.push({
            phoneNumber:this.state.inputedNum,
            userPW:this.state.inputedPw,
            name:'waiting'
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           keybordType={'phone-pad'}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText)=>this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                           secureTextEntry={true}
                           placeholder='请输入密码'
                           onChangeText={(newText)=>this.updatePW(newText)}/>
                <Text style={styles.bigTextPrompt} onPress={this.userPressConfirm}>
                    注册
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    numberInputStyle:{
        top: 64,
        left: pointX,
        width:componentWidth,
        height: 30,
        backgroundColor: 'gray',
        fontSize: 20,
        borderRadius:5
    },
    textPromptStyle: {
        top :74,
        left :pointX,
        height: 30,
        width: componentWidth,
        fontSize: 20
    },
    passwordInputStyle: {
        top: 94,
        left: pointX,
        height:30,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20,
        borderRadius:5
    },
    bigTextPrompt: {
        top: 114,
        left:pointX,
        height: 60,
        width: componentWidth,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60,
        borderRadius:5
    }
});
module.exports=RegisterLeaf;