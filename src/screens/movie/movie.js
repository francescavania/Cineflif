import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet,Image, FlatList } from 'react-native'
import axios from 'axios';
import FastImage from 'react-native-fast-image'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../config/Colors';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { color } from 'react-native-reanimated';
import { Rating } from 'react-native-elements';
import Button from '../../components/Button';
import { AirbnbRating } from 'react-native-elements';

const Movie = (props) => {

    const {navigation, route} = props
    
    const [MovieDetail, setMovieDetail] = useState({});
    const [MovieReview, setMovieReview] = useState({})

    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    async function fetchDetailMovies(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/'+route.params+'?api_key=781eb13279207d3b00115859616b4710&language=en-US')
            setMovieDetail(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchReview(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/'+route.params+'/reviews?api_key=781eb13279207d3b00115859616b4710&language=en-US&page=1')
            setMovieReview(res.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetailMovies();
        fetchReview();
        
        // return () => {
        //     setMovieDetail({}); 
        //   };
      }, [route.params]);
    //   console.log(MovieDetail,'MovieDetail')
    //   console.log(MovieReview,'rev')
    
    const handleCustomIndexSelect = (index) => {
        setCustomStyleIndex(index);
    };

    const renderReview = ({ item, index }) =>(
        <View style={{backgroundColor:Colors.white,marginTop:5}}>
            <View style={{paddingHorizontal:ms(10)}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:50,height:50,margin:ms(10)}}>
                        <FastImage
                            style={{width:50,height:50,borderRadius:ms(50),backgroundColor:Colors.red}}
                            resizeMode='cover'
                            source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.author_details.avatar_path}}
                        />
                    </View>
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
                    <Text style={{paddingBottom:ms(10)}}>{item.content}</Text>
                </View>
            </View>
        </View>
    )


    return (
        // <View>
        //     <View style={[styles.scrollview]}>
        //         <View style={{height:hp(55),width:wp(100)}}></View>
        //         <View style={{minHeight:hp(45),width:wp(100),backgroundColor:Colors.lightGray,}}>
        //             <Text style={{color:Colors.red,fontSize:20,padding:ms(10),fontWeight:'bold'}}>{MovieDetail.original_title}</Text>
        //         </View>
        //     </View>
        //     <ImageBackground
        //         style={[styles.fixed, styles.containter, {zIndex: -1}]}
        //         source={{ uri: 'https://image.tmdb.org/t/p/w780' + MovieDetail.poster_path }}
        //     />    
        // </View>
        <View style={{flex:1,backgroundColor:Colors.lightGray}}>
            <View style={{height:hp(25),width:wp(100)}}>
                <FastImage
                    style={{...StyleSheet.absoluteFillObject}}
                    resizeMode='cover'
                    source={{ uri: 'https://image.tmdb.org/t/p/w780' + MovieDetail.backdrop_path }}
                />
            </View>  
            <View>
                <SegmentedControlTab
                values={['Movie', 'Review']}
                selectedIndex={customStyleIndex}
                onTabPress={handleCustomIndexSelect}
                borderRadius={0}
                tabsContainerStyle={{
                    height: ms(40),
                    backgroundColor: Colors.lightGray
                }}
                tabStyle={{
                    backgroundColor: Colors.white,
                    borderWidth: 0,
                    borderColor: 'transparent',
                }}
                activeTabStyle={{backgroundColor: Colors.white, marginTop: 2}}
                tabTextStyle={{color: Colors.darkGray, fontWeight: 'bold'}}
                activeTabTextStyle={{color: Colors.red}}
                />
                {customStyleIndex === 0 && (
                    <View style={{backgroundColor:'white', marginTop:5,paddingBottom:10}}>
                        <View>
                            <Text style={{color:Colors.black,fontSize:16,padding:ms(10),fontWeight:'bold'}}>{MovieDetail.original_title}</Text>
                        </View>
                        <View style={{paddingHorizontal:ms(10)}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{justifyContent:'center'}}>
                                    {/* <Rating imageSize={20} readonly startingValue={MovieDetail.vote_average/2} /> */}
                                </View>
                                <View>
                                    {/* <Button value='+' /> */}
                                </View>
                            </View>
                            <View>
                                <Text>{MovieDetail.overview}</Text>
                            </View>
                        </View>
                        
                    </View>
                )}
                {customStyleIndex === 1 && (
                    <FlatList
                    data={MovieReview}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderReview}
                    />
                )}
            </View>
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
    },
    tabContent: {
        color: '#444444',
        fontSize: 18,
        margin: 24,
    }
})

export default Movie
