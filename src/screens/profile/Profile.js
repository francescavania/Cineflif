import React, {useState,useEffect} from 'react'
import { View, Text, Alert, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Keyboard, Image , ScrollView} from 'react-native'
import TextButton from '../../components/TextButton';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { s, vs, ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';

const Profile = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [imageSource, setImageSource] = useState(null);

    const chooseImage = () => {
        let options = {
            mediaType:'photo'
        };
    
        launchImageLibrary(options, response => {
          console.log({ response });
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
            Alert.alert('You did not select any image');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            let source = { uri: response.uri };
            setImageSource(source)
            console.log({ source });
          }
        });
      }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity onPress={chooseImage}>
                                <Image
                                    source={require('../../assets/images/profile.png')}
                                />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.form}>
                        <TextInput value={Name} placeholder='Name' icon='people-alt'/>
                        <TextInput value={Username} placeholder='Username' icon='people-alt'/>
                        <TextInput value={Email} placeholder='Email' icon='people-alt' disabled={true}/>
                        <TextInput value={Password} placeholder='Password' icon='lock'/>
                        <Button value='SUBMIT' backgroundColor='blue' onPress={()=>Keyboard.dismiss()}/>
                        <Button value='LOG OUT'/>
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

export default Profile
