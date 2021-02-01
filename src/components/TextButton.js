import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../config/Colors';

export default function TextButton({
    value,
    // blue = false,
    onPress
}) {
  return (
    <View>
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                // color: blue? Colors.darkBlue:'black'
                color:'black'
            }}>{value}</Text>
        </TouchableOpacity>
    </View>
  );
}
