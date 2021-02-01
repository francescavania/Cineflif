import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import axios from 'axios';
import Colors from '../../config/Colors';
import SearchBar from 'react-native-search-bar';
import { s, vs, ms } from 'react-native-size-matters';
import GenreList from './component/GenreList';
import FastImage from 'react-native-fast-image'
import MovieItem from './component/MovieItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    const [Movie, setMovie] = useState([])
    const [Genre, setGenre] = useState([])
    const [genreId, setgenreId] = useState(28)
    const [genreName, setgenreName] = useState('Action')

    async function fetchData(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=781eb13279207d3b00115859616b4710&language=en-US&sort_by=popularity.desc&page=1&with_genres='+genreId)
            setMovie(res.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchGenre(){
        try {
            const cat = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=781eb13279207d3b00115859616b4710')
            setGenre(cat.data.genres)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
        fetchGenre();
        
    }, [genreId])

    const updateGenre = (id,name) => {
        setgenreId(id);
        setgenreName(name)
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
                            textColor='black'
                        />
                    </View>
                </View>
            </View>
            <GenreList genre={Genre} genreId={genreId} updateGenre={updateGenre}/>
            <MovieItem Movie={Movie} genreName={genreName}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.lightGray,
    },
    top:{
        padding:vs(12),
        backgroundColor:Colors.white,
        flexDirection:'row'
    },
    logo:{
        flex:1,
    },
    search:{
        flex:7,
        marginLeft:ms(15)
    },
    searchBar:{
        backgroundColor:Colors.lightGray,
        borderRadius:15
    },
    
})

export default Home
