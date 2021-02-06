import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Keyboard } from 'react-native'
import axios from 'axios';
import Colors from '../../config/Colors';
import { s, vs, ms } from 'react-native-size-matters';
import GenreList from './component/GenreList';
import FastImage from 'react-native-fast-image'
import MovieItem from './component/MovieItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { SearchBar } from 'react-native-elements';
import SearchBar from 'react-native-search-bar';
import { ActionFetchGenre , ActionSearchMovie} from "../../store/actions/MovieAction";
import { connect } from 'react-redux'

const Home = (props) => {
    const [Search, setSearch] = useState('')

    useEffect(() => {
        if(Search === ''){
            props.ActionFetchGenre()
        }else{
            console.log(Search,"search")
            props.ActionSearchMovie(Search)
        }
    }, [Search])
    
    const navigateToMovie = (id) => {
        // console.log(id,"id movie select")
        props.navigation.navigate('movie',id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.logo}>
                    <FastImage
                        source={require('../../assets/images/logo.png')}
                        style={{
                            flex:1,
                            width: null,
                            height: null,
                        }}
                        resizeMode = 'contain'
                    />
                </View>
                <View style={styles.search}>
                    <View style={styles.searchBar}>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={(Search) => setSearch(Search)}
                        textColor={Colors.black}
                        onBlur={Keyboard.dismiss}
                    />
                        {/* <SearchBar
                            containerStyle={{borderBottomWidth:0,borderTopWidth:0,backgroundColor:Colors.white,padding:0,}}
                            inputContainerStyle={{backgroundColor:Colors.lightGray,borderRadius:10}}
                            placeholder="Search"
                            textColor='black'
                            onChangeText={(Search) => setSearch(Search)}

                        /> */}
                    </View>
                </View>
            </View>
            <GenreList />
            <MovieItem navigateToMovie={navigateToMovie}/>
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.lightGray,
        // marginBottom:120
    },
    top:{
        paddingHorizontal:ms(8),
        paddingVertical:ms(12),
        backgroundColor:Colors.white,
        flexDirection:'row'
    },
    logo:{
        flex:1,
    },
    search:{
        flex:6,
        marginLeft:ms(10)

    },
    searchBar:{
        backgroundColor:Colors.lightGray,
        borderRadius:15
    },
    
})

const mapStateToProps = (state) => ({
    Genre : state.movieReducer.genres, 
    seledtedGenre : state.movieReducer.selectedGenre,
})

const mapDispatchToProps = {
    ActionFetchGenre,
    ActionSearchMovie
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
