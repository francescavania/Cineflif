import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button as Btn } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../config/Colors';

export default function Button({
    value,
    onPress,
    disabled = false
}) {

    return (
        <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
            <Btn
                title={value}
                titleStyle={{fontSize:16,fontWeight:'bold'}}
                onPress={onPress}
                buttonStyle={styles.button}
                disabled={disabled}
                disabledStyle={{backgroundColor: Colors.lightRed}}
                disabledTitleStyle={{fontSize:16,fontWeight:'bold',color:Colors.lightGray}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        padding:10,
        paddingHorizontal:20,
        backgroundColor: Colors.red,
    }
})

