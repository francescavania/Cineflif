import React, {useState,useEffect} from 'react'
import { View, Text, Alert, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Keyboard, Image , ScrollView} from 'react-native'
import TextButton from '../../components/TextButton';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { s, vs, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSelector } from "react-redux";
import Login from "../login/Login";
import { connect } from 'react-redux';
import { logoutAction } from "../../store/actions/AuthAction";
import { getUserAction, editUserAction } from "../../store/actions/UserAction";

const Profile = (props) => {
    // console.log(props,"props profile")
    const [Disabled, setDisabled] = useState(true);
    const [Email, setEmail] = useState(null);
    const [Password, setPassword] = useState('');
    const [Username, setUsername] = useState(null);
    const [imageSource, setImageSource] = useState(null);

    const chooseImage = () => {
        let options = {
            mediaType:'photo',
            noData: true,
            storageOptions: {
                skipBackup: true
            }
        };
    
        launchImageLibrary(options, response => {
          console.log({ response });
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
            // Alert.alert('You did not select any image');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            let source = { uri: response.uri };
            setImageSource(source.uri)
          }
        });
      }
    
    const checkSubmit = () =>{
        if((Username==''&&Username!=props.username)||(Email==''&&Email!=props.email)||Password==''){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }
    const handleLogout = () =>{
        props.logoutAction();
    }

    const handleEditUser = () =>{
        if(Username==null&&Email==null){
            props.editUserAction(props.username,props.email,Password,imageSource,props.token);
        }else if(Email==null){
            props.editUserAction(Username,props.email,Password,imageSource,props.token);
        }else if(Username==null){
            props.editUserAction(props.username,Email,Password,imageSource,props.token);
        }else{
            props.editUserAction(Username,Email,Password,imageSource,props.token);
        }
    }

    useEffect(() => {
        checkSubmit()
        props.getUserAction(props.token)
    }, [Email,Username,Password,imageSource])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity onPress={chooseImage}>
                                {
                                    props.image === ''?
                                    <Image
                                        source={require('../../assets/images/profile.png')}
                                    />
                                    :
                                    <Image
                                        source={{ uri: props.Image}}
                                    />
                                }
                                
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.form}>
                        <TextInput value={Username==null?props.username:Username} placeholder='Username' icon='people-alt' onChangeText={(Username) => setUsername(Username)}/>
                        <TextInput value={Email==null?props.email:Email} placeholder='Email' icon='people-alt' onChangeText={(Email) => setEmail(Email)}/>
                        <TextInput value={Password} placeholder='Password' icon='lock' onChangeText={(Password) => setPassword(Password)}/>
                        <Button value='SUBMIT' backgroundColor='blue' disabled={Disabled} onPress={()=>{
                            handleEditUser()
                            Keyboard.dismiss()}}/>
                        <Button value='LOG OUT' onPress={()=>{
                            handleLogout()
                            Keyboard.dismiss()}}/>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:Colors.darkGray
    },
    photo:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:ms(40),
        // backgroundColor:Colors.lightGray,
        flex:1,
    },
    form:{
        padding:s(20),
        flex:3
    },
})

const mapStateToProps = (state) => ({
    token : state.authReducer.token,
    username:state.userReducer.username,
    email:state.userReducer.email,
    image:state.userReducer.image,
    // password : state.authReducer.password,
})

const mapDispatchToProps = {
    logoutAction,
    getUserAction,
    editUserAction
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
