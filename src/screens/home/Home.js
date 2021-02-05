import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Keyboard } from 'react-native'
import axios from 'axios';
import Colors from '../../config/Colors';
import { s, vs, ms } from 'react-native-size-matters';
import GenreList from './component/GenreList';
import FastImage from 'react-native-fast-image'
import MovieItem from './component/MovieItem';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import { ActionFetchGenre } from "../../store/actions/MovieAction";
import { connect } from 'react-redux'

const Home = (props) => {
    console.log(props)
    const [Movie, setMovie] = useState({})
    // const [Genre, setGenre] = useState([])
    const [genreId, setgenreId] = useState(28)
    const [genreName, setgenreName] = useState('Action')
    const [Search, setSearch] = useState('')

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
        props.ActionFetchGenre()
        // console.log(props.Genre,"home genre")
        // fetchData();
        // fetchGenre();
        
    }, [genreId])

    const updateGenre = (id,name) => {
        setgenreId(id);
        setgenreName(name)
      } 
    
    const navigateToMovie = (id) => {
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
                            containerStyle={{borderBottomWidth:0,borderTopWidth:0,backgroundColor:Colors.white,padding:0,}}
                            inputContainerStyle={{backgroundColor:Colors.lightGray,borderRadius:10}}
                            placeholder="Search"
                            textColor='black'
                            onChangeText={(Search) => setSearch(Search)}
                        />
                    </View>
                </View>
            </View>
            {/* <GenreList genre={props.Genre} genreId={genreId} updateGenre={updateGenre}/>
            <MovieItem Movie={Movie} genreName={genreName} getIdSelect={navigateToMovie}/> */}
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
    Genre : state.movieReducer.genres
})

const mapDispatchToProps = {
    ActionFetchGenre
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
