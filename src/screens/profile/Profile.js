import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Image , ScrollView} from 'react-native'
import TextButton from '../../components/TextButton';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { s, vs, ms } from 'react-native-size-matters';

const Profile = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <Image
                            source={require('../../assets/images/profile.png')}
                        />
                    </View>
                    <View style={styles.form}>
                        <TextInput value={Name} placeholder='Name' icon='people-alt'/>
                        <TextInput value={Username} placeholder='Username' icon='people-alt'/>
                        <TextInput value={Email} placeholder='Email' icon='people-alt'/>
                        <TextInput value={Password} placeholder='Password' icon='lock'/>
                        <Button value='SUBMIT' onPress={()=>Keyboard.dismiss()}/>
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
