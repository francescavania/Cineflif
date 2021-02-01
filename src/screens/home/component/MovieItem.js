import React,{useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../config/Colors';
import FastImage from 'react-native-fast-image'


const { width, height } = Dimensions.get('window');
const MovieItem = ({Movie, genreName}) => {
    // let listViewRef
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
                <Text numberOfLines={1}>{item.original_title}</Text>
            </TouchableOpacity>
        </View>
    );
    // useEffect(() => {
    //     listViewRef.scrollToOffset({
    //         offset: 0,
    //         animated: true
    //       });
    // }, [Movie])
    return (
        <View style={styles.movieContainer}>
            <Text style={styles.movieTitle}>Hot {genreName} Movie</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Movie}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                // ref={(ref) => {
                //     listViewRef = ref;
                //   }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    movieContainer:{
        // padding:width * 0.03,
        paddingTop:ms(6),
    },
    movieTitle:{
        fontWeight : 'bold',
        fontSize:20,
        color:Colors.black,
        paddingLeft:ms(7),
        paddingBottom:ms(6)
    },
    itemContainer:{
        width:width * 0.5,
    },
    // itemContainer :{
    //     // margin : 5,
    //     // padding:5,
    //     width:width * 0.5 ,
    //     backgroundColor:'red',
    //     // flex:1,
    //     // justifyContent:'space-between'
    // },
    // movie:{
    //     width : width * 0.4,
    //     backgroundColor:'white',
    //     // height : height * 0.4,
        
    // },
    
})

export default MovieItem
