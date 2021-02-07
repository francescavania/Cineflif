import React, {useState,useEffect} from 'react'
import { View, Text ,StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native'
import axios from 'axios';
import Colors from '../../config/Colors';
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import { AirbnbRating } from 'react-native-elements';
import Login from "../login/Login";
import { connect } from 'react-redux'
import { ActionFetchReview , ActionDeleteReview} from "../../store/actions/ReviewAction";


const Review = (props) => {
    const {Review} = props
    const [lines, setLines] = useState(Array(Review.length).fill('hide'));

    useEffect(() => {
        props.ActionFetchReview(props.token)
    }, [])

    const buttonAlert = (token,id) => {
        Alert.alert(
            "Yakin mau delet?",
            ` `,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => props.ActionDeleteReview(token,id) }
            ],
            { cancelable: false }
        )
    }

    const renderReview = ({ item, index }) =>{
        return(
            <View style={{backgroundColor:Colors.white,marginBottom:5}}>
                <View style={{paddingHorizontal:ms(10)}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:50,height:50,margin:ms(10)}}>
                                <FastImage
                                    style={{width:50,height:50,borderRadius:ms(50),backgroundColor:Colors.red}}
                                    resizeMode='cover'
                                    source={{ uri: item.movie.image}}
                                />
                            </View>
                            <View>
                                <Text style={{paddingTop:ms(10),paddingBottom:ms(5),paddingHorizontal:ms(3),maxWidth:wp(52)}}>{item.movie.title}</Text>
                                <View style={{alignSelf:'flex-start'}}>
                                    <AirbnbRating
                                        count={5}
                                        defaultRating={item.rating}
                                        showRating={false}
                                        size={15}
                                        isDisabled={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{padding:3,flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{
                                props.ActionDeleteReview(props.token,item._id)
                            }}>
                                <Text style={{color:Colors.darkGray,paddingRight:ms(6)}}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{
                                buttonAlert(props.token,item._id)
                            }}>
                                <Text style={{color:Colors.darkGray}}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text
                            numberOfLines={lines[index] == 'show' ? 99 : 3}>
                            {item.review}
                        </Text>
                            <Text
                            style={{paddingBottom: ms(10),color:Colors.darkGray}}
                            onPress={() => {
                                let newLines = [...lines];
                                newLines[index] === 'show'
                                ? (newLines[index] = 'hide')
                                : (newLines[index] = 'show');
                                setLines(newLines);
                            }}>
                            {lines[index] == 'show' ? 'Less' : 'Read More..'}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    
    return (
        <View style={styles.container}>
            <FlatList
            data={Review}
            keyExtractor={item => item._id.toString()}
            renderItem={renderReview}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.lightGray
    }
})

const mapStateToProps = (state) => ({
    token : state.authReducer.token,
    Review : state.reviewReducer.review
})

const mapDispatchToProps = {
    ActionFetchReview,
    ActionDeleteReview
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review);