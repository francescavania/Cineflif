import React,{useEffect,useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../config/Colors';
import FastImage from 'react-native-fast-image'
import { Rating, AirbnbRating } from 'react-native-elements';
import { connect } from 'react-redux'
import { ActionSelectMovie } from "../../../store/actions/MovieAction";


const { width, height } = Dimensions.get('window');

const MovieItem = (props) => {
    const {Movie, genreName, getIdSelect,navigateToMovie}= props

    console.log(props,"propsmovie items")

    const [ListRef, setListRef] = useState(null)

    const renderMovie = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity 
            onPress={()=>{props.navigateToMovie(item._id)}}
            style={[
                { 
                    backgroundColor: 'white',
                    flex: 1,
                    marginBottom:ms(7) 
                }, 
                index%2==0 ? 
                { 
                    marginLeft:ms(7),
                    marginRight:ms(3.5)
                } 
                : 
                { 
                    marginRight:ms(7),
                    marginLeft:ms(3.5)
                } 
                ]}>
                <View style={{flex:1,height:ms(100)}}>
                    <FastImage
                        style={{...StyleSheet.absoluteFillObject}}
                        source={{
                            uri: item.image,
                        }}
                    />
                </View>
                <Text numberOfLines={1} style={styles.movieTitle}>{item.title}</Text>
                {/* <Text numberOfLines={1} style={styles.date}>{item.synopsis}</Text> */}
                <View style={{alignSelf:'flex-start',padding:3}}>
                    <Rating 
                        type='custom'
                        imageSize={15} 
                        readonly 
                        startingValue={item.totalRating?item.totalRating:0}
                        ratingBackgroundColor={Colors.gray}
                        // defaultRating={item.totalRating?item.totalRating:0} 
                        />
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.movieContainer}>
            <FlatList
                ListHeaderComponent={
                    <Text style={styles.title}>{genreName}</Text>
                }
                showsVerticalScrollIndicator={false}
                data={Movie}
                renderItem={renderMovie}
                keyExtractor={item => item._id.toString()}
                numColumns={2}
                scrollsToTop={true}
                // ref={(ref) => { setListRef(ref) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    movieContainer:{
        // padding:width * 0.03,
        paddingTop:ms(6),
        marginBottom:ms(110)
    },
    title:{
        fontWeight : 'bold',
        fontSize:18,
        color:Colors.black,
        paddingLeft:ms(7),
        paddingBottom:ms(6)
    },
    itemContainer:{
        width:width * 0.5,
    },
    movieTitle:{
        padding:ms(3)
    },
    date:{
        fontSize:12,
        paddingHorizontal:ms(3),
        paddingBottom:ms(3),
        color:Colors.darkGray
    }
    
})

const mapStateToProps = (state) => ({
    Movie : state.movieReducer.movies, 
    genreName : state.movieReducer.selectedGenreName,
    token : state.authReducer.token
})

const mapDispatchToProps = {
    ActionSelectMovie
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieItem);
