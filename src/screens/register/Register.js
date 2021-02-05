import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    Keyboard,StyleSheet,
    Image, 
    TouchableOpacity, 
    ScrollView} from 'react-native'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { registerAction } from "../../store/actions/AuthAction";
import { connect } from 'react-redux';

const Register = (props) => {
    const [Disabled, setDisabled] = useState(true);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Username, setUsername] = useState('')

    const checkInput = () =>{
        if(Email!='' && Password!='' && Username!=''){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    useEffect(() => {
        checkInput()
    }, [Email,Password,Username])

    const handleRegister = () =>{
        props.registerAction(Username,Email, Password);
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.profileImage}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/profile.png')}
                        />
                        <Image
                            style={styles.editIcon}
                            source={require('../../assets/images/Edit_Button.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    {/* <TextInput value={Name} placeholder='Name' icon='people-alt' onChangeText={(Name) => setName(Name)}/> */}
                    <TextInput value={Username} placeholder='Username' icon='person-add' onChangeText={(Username) => setUsername(Username)}/>
                    <TextInput value={Email} placeholder='Email' icon='mail' onChangeText={(Email) => setEmail(Email)}/>
                    <TextInput value={Password} placeholder='Password' icon='lock' secured={true} onChangeText={(Password) => setPassword(Password)}/>
                    <Button value='SIGN UP' 
                    onPress={()=>{
                        handleRegister()
                        Keyboard.dismiss()
                    }} 
                    disabled={Disabled}/>
                    <View style={styles.row}>
                        <Text>Already have an account? </Text>
                        <TextButton value='Sign In' blue={true} onPress={() => props.navigation.navigate('auth')}/>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profileImage:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        padding:s(40),
    },
    editIcon:{
        position: 'absolute',
        bottom: 3,
        right:3
    },
    form:{
        padding:s(20),
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})


const mapStateToProps = state => {
    return {};
};
  
const mapDispatchToProps = {
    registerAction
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);