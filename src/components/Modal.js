import React, { useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { AirbnbRating, Rating } from 'react-native-elements';
import TextInput from './TextInput';
import Textarea from 'react-native-textarea';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../config/Colors';
import { s, vs, ms } from 'react-native-size-matters';

export default function Modal({onpress,visible=false,rating=0,onpressSubmit}) {
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={onpress}>
          <View>
              <Text style={{alignSelf:'center',fontSize:18}}>How do you think about this movie?</Text>
                <Rating showRating type='custom' imageSize={30} 
                minValue={0} startingValue={rating}/>
                {/* <AirbnbRating  
                showRating={false}
                count={5}
                size={25}
                defaultRating={rating}/> */}
              {/* </View> */}
              {/* <AirbnbRating
                  type='custom'
                  ratingBackgroundColor= {Colors.lightGray}
                  count={5}
                  defaultRating={rating}
                  showRating={false}
                  size={20}
                  isDisabled={false}
              /> */}
              <View style={styles.container}>
                <Textarea
                placeholder={'Write here..'}
                  containerStyle={styles.textareaContainer}
                  style={styles.textarea}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              <View style={{flexDirection:'row',justifyContent:'center'}}> 
                <Button buttonStyle={styles.button} title="Submit" onPress={onpressSubmit} />
                <Button buttonStyle={[styles.button,{backgroundColor:Colors.red}]} title="Cancel" onPress={onpress} />
              </View>
          </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: wp(30),
    paddingVertical:hp(2),
    justifyContent: 'center',
    alignItems: 'center',

  },
  textareaContainer: {
    height: hp(20),
    padding: 5,
    backgroundColor: Colors.lightGray,
    width:wp(90)
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: hp(20),
    fontSize: 14,
    color: '#333',
  },
  button:{
    padding:ms(10),
    margin:ms(10)
  }
});