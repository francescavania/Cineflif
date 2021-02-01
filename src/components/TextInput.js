import React,{useState} from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { s, vs, ms, mvs } from 'react-native-size-matters';

export default function TextInput({
    placeholder,
    icon,
    value,
    secured = false,
    onChangeText
}) {
  const [name, setname] = useState(icon)
  return (
    <View>
      <Input
        placeholder={placeholder}
        leftIcon={{ type:'Ionicons', name:name, color:'gray' }}
        secureTextEntry={secured}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
