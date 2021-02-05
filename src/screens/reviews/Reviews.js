import React, {useState,useEffect} from 'react'
import { View, Text ,StyleSheet, FlatList} from 'react-native'
import axios from 'axios';
import Colors from '../../config/Colors';
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import { AirbnbRating } from 'react-native-elements';
import Login from "../login/Login";

const Review = () => {
    const [Review, setReview] = useState([])
    const [lines, setLines] = useState(Array(Review.length).fill('hide'));

    async function fetchReview(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/464052/reviews?api_key=781eb13279207d3b00115859616b4710&language=en-US&page=1')
            setReview(res.data.results)
        
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchReview()
    }, [])


    const renderReview = ({ item, index }) =>(
        <View style={{backgroundColor:Colors.white,marginBottom:5}}>
            <View style={{paddingHorizontal:ms(10)}}>
                <View style={{flexDirection:'row'}}>
                    {/* <View style={{width:50,height:50,margin:ms(10)}}>
                        <FastImage
                            style={{width:50,height:50,borderRadius:ms(50),backgroundColor:Colors.red}}
                            resizeMode='cover'
                            source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.author_details.avatar_path}}
                        />
                    </View> */}
                    <View>
                        <Text style={{paddingTop:ms(10),paddingBottom:ms(5),paddingHorizontal:ms(3)}}>{item.author}</Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={item.author_details.rating/2}
                            showRating={false}
                            size={15}
                            isDisabled={true}
                        />
                    </View>
                </View>
                <View>
                    <Text
                        numberOfLines={lines[index] == 'show' ? 99 : 3}>
                        {item.content}
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

    
    return (
        <View style={styles.container}>
            <FlatList
            data={Review}
            keyExtractor={item => item.id.toString()}
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

export default Review