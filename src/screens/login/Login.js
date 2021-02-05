import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet,
    Keyboard,
    TouchableOpacity, 
    ScrollView, 
    TouchableWithoutFeedback } from 'react-native'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { Button, TextButton, TextInput } from "../../components";
import Colors from '../../config/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { connect, useDispatch } from 'react-redux';
import { loginAction } from "../../store/actions/AuthAction";


const Login = (props) => {
    console.log(props,"props login")

    const [Disabled, setDisabled] = useState(true);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const checkInput = () =>{
        if(Username!='' && Password!=''){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    const clearState = () => {
        setUsername('')
        setPassword('')
        setDisabled(true)
    };

    useEffect(() => {
        checkInput()
    }, [Username,Password])

    const handlerSignIn = () =>{
        props.loginAction(Username, Password);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                    />
                    </View>
                <View style={styles.form} >
                    <TextInput placeholder='Username' value={Username} icon='mail' onChangeText={(Username) => setUsername(Username)}/>
                    <TextInput placeholder='Password' value={Password} icon='lock' secured={true} onChangeText={(Password) => setPassword(Password)}/>
                    <View style={styles.forgot}>
                        <TextButton value='Forgot your password?' />
                    </View>
                    <Button 
                        value='SIGN IN' 
                        onPress={()=>{
                            handlerSignIn()
                            Keyboard.dismiss()
                        }} 
                        disabled={Disabled}/>
                    <View style={styles.row}>
                        <Text>Don't have an account? </Text>
                        <TextButton value='Sign Up' onPress={() => {
                            clearState()
                            props.navigation.navigate('register')
                        }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const mapStateToProps = state => {
    return {
    };
};
  
const mapDispatchToProps = {
    loginAction
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:Colors.darkGray
    },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:s(40),
        // backgroundColor:Colors.lightGray,
        flex:1,
    },
    form:{
        padding:s(20),
        flex:3
    },
    forgot:{
        alignItems:'flex-end',
        paddingRight:s(10),
        paddingBottom:vs(25)
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})

