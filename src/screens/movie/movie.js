import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import axios from 'axios';
import FastImage from 'react-native-fast-image'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../config/Colors';


const Movie = (props) => {

    const {navigation, route} = props
    
    const [MovieDetail, setMovieDetail] = useState({});

    async function fetchDetailMovies(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/'+route.params+'?api_key=781eb13279207d3b00115859616b4710&language=en-US')
            setMovieDetail(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetailMovies();
        console.log(MovieDetail,'MovieDetail')
      }, []);

    return (
        <View>
            <View style={[styles.scrollview]}>
                <View style={{height:hp(55),width:wp(100)}}></View>
                <View style={{height:hp(45),width:wp(100),backgroundColor:Colors.lightGray,}}>
                    <Text style={{color:Colors.red,fontSize:20,padding:ms(10),fontWeight:'bold'}}>{MovieDetail.original_title}</Text>
                </View>
            </View>
            <ImageBackground
                style={[styles.fixed, styles.containter, {zIndex: -1}]}
                source={{ uri: 'https://image.tmdb.org/t/p/w780' + MovieDetail.poster_path }}
            />    
        </View>
        
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: "column"
    //   },
    // image: {
    //     flex: 1,
    //     resizeMode: "cover",
    //     justifyContent: "center"
    // },

    containter: {
        width: wp(100), //for full screen
        height: hp(100) //for full screen
      },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        backgroundColor: "#000000",
    },
    scrollview: {
        backgroundColor: 'transparent'
      }
})

export default Movie
