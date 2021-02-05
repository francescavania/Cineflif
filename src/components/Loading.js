import React from 'react'
import { Platform, View, ActivityIndicator, Text } from 'react-native';
import { Colors } from "../config/Colors";

export default function Loading() {
    return (
        <View style={{ marginVertical: Platform.OS === 'ios' ? 10 : 5 }}>
            <ActivityIndicator
            color={Colors.pink}
            style={{ paddingVertical: Platform.OS === 'ios' ? 5 : 0 }}
            size={Platform.OS === 'ios' ? 'large' : 30}
            />
        </View>
    )
}
