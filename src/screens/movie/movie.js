import React, {useEffect, useState, useCallback} from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet,Image, FlatList,TouchableOpacity } from 'react-native'
import axios from 'axios';
import FastImage from 'react-native-fast-image'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../config/Colors';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { color } from 'react-native-reanimated';
import { Rating } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { AirbnbRating } from 'react-native-elements';
import Modal from '../../components/Modal';
import { useSelector } from "react-redux";
import Login from "../login/Login";
import { connect } from 'react-redux'
import { ActionSelectMovie } from "../../store/actions/MovieAction";
import { TextButton } from '../../components';
import * as RootNavigation from '../../navigation/RootNavigation';


const Movie = (props) => {
    const {navigation, route, MovieDetail} = props
    
    // const [MovieDetail, setMovieDetail] = useState({});
    const [MovieReview, setMovieReview] = useState([])

    const [customStyleIndex, setCustomStyleIndex] = useState(0);
    const [ReadMore,setReadMore]=useState(false);
    const [visible, setVisible] = useState(false);
    const [readMoreId, setreadMoreId] = useState(0)
    // const [TotalReview, setTotalReview] = useState(0)
    const [lines, setLines] = useState(Array(MovieReview.length).fill('hide'));
    const [Rating, setRating] = useState(0)

    const toggleOverlay = () => {
        setVisible(!visible);
      };

    async function fetchReview(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/464052/reviews?api_key=781eb13279207d3b00115859616b4710&language=en-US&page=1')
            setMovieReview(res.data.results)
            // setAwal()
        } catch (error) {
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        props.ActionSelectMovie(route.params)
        if(props.token != ''){
            fetchReview();
        }
    }, [route.params]);
    
    
    const handleCustomIndexSelect = (index) => {
        setCustomStyleIndex(index);
    };


    const renderReview = ({ item, index }) =>(
        <View style={{backgroundColor:Colors.white,marginTop:5}}>
            <View style={{paddingHorizontal:ms(10)}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:50,height:50,margin:ms(10)}}>
                        <FastImage
                            style={{width:50,height:50,borderRadius:ms(50),backgroundColor:Colors.gray}}
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

    const onFinishRating = (rating)=>{
        setRating(rating)
        console.log(Rating)
    }


    return (
        <View style={{flex:1,backgroundColor:Colors.lightGray}}>
            <View style={{height:hp(25),width:wp(100)}}>
                <FastImage
                    style={{...StyleSheet.absoluteFillObject}}
                    resizeMode='cover'
                    source={{ uri: MovieDetail.image }}
                />
            </View>  
            <View>
                <SegmentedControlTab
                values={['Movie', 'Review' ]}
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
                        
                        <View style={{paddingHorizontal:ms(10)}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{maxWidth:wp(70)}}>
                                    <Text style={{color:Colors.black,fontSize:16,fontWeight:'bold',paddingBottom:ms(5),paddingTop:ms(10)}}>{MovieDetail.title}</Text>
                                    <View style={{paddingBottom:(5),alignItems:'flex-start'}}>
                                        <AirbnbRating
                                            count={5}
                                            defaultRating={MovieDetail.vote_average/2}
                                            showRating={false}
                                            size={15}
                                            isDisabled={true}
                                        />
                                    </View>
                                </View>
                                {props.token===''?
                                    null:
                                    <Button onPress={toggleOverlay} titleStyle={{fontSize:12}} buttonStyle={{borderRadius:5,margin:ms(10),backgroundColor: Colors.red}} title='Rate This'/>
            
                                }
                                </View>
                            <View>
                                <Text style={styles.movieInfo}>Released date : {MovieDetail.release_date ? MovieDetail.release_date:"-"}</Text>
                                <Text style={styles.movieInfo}>Language : {MovieDetail.original_language ? MovieDetail.original_language:"-"}</Text>
                                <Text style={styles.movieInfo}>Runtime : {MovieDetail.runtime ? MovieDetail.original_language+" Minutes":"-"}</Text>
                                <Text style={styles.movieInfo}>Genre : {MovieDetail.genre}</Text>
                                <Text style={{paddingTop:ms(5)}}>{MovieDetail.synopsis}</Text>
                            </View>
                        </View>
                        
                    </View>
                )}
                {customStyleIndex === 1 && (
                    <View style={{paddingBottom:hp(35)}}>
                        {
                            props.token === '' ?
                            <View style={{alignSelf:'center',flexDirection:'row',paddingTop:10}}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('AuthStack')
                                    }}>
                                        <View>
                                            <Text style={{textDecorationLine:'underline',color:Colors.darkGray}}>Login</Text>
                                        </View>
                                    </TouchableOpacity> 
                                </View>
                                <Text style={{color:Colors.darkGray}}> to see reviews</Text>
                            </View>
                            
                            :
                            <FlatList
                                data={MovieReview}
                                keyExtractor={item => item.id.toString()}
                                renderItem={renderReview}
                            />
                        }
                    </View>
                )}
            </View>
            <Modal onpress={toggleOverlay} visible={visible} onFinishRating={onFinishRating}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
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
    },
    movieInfo:{
        color:Colors.darkGray
    }
})

const mapStateToProps = (state) => ({
    token:state.authReducer.token,
    MovieDetail:state.movieReducer.selectedMovie
})

const mapDispatchToProps = {
    ActionSelectMovie
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);
