import React,{useEffect,useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../config/Colors';
import FastImage from 'react-native-fast-image'
import { Rating } from 'react-native-elements';


const { width, height } = Dimensions.get('window');
const MovieItem = ({Movie, genreName}) => {
    const [ListRef, setListRef] = useState(null)

    const renderMovie = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={[
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
                            uri: 'https://image.tmdb.org/t/p/w185' + item.backdrop_path,
                        }}
                    />
                </View>
                <Text numberOfLines={1} style={styles.movieTitle}>{item.original_title}</Text>
                <Text numberOfLines={1} style={styles.date}>{item.release_date}</Text>
                {/* <Rating imageSize={20} readonly startingValue={item.vote_average/2} /> */}
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.movieContainer}>
            <Text style={styles.title}>Hot {genreName} Movie</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Movie}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                // ref={(ref) => { setListRef(ref) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    movieContainer:{
        // padding:width * 0.03,
        paddingTop:ms(6),
    },
    title:{
        fontWeight : 'bold',
        fontSize:20,
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

export default MovieItem
