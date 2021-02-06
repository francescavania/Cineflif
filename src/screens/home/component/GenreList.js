import React, {useState,useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../config/Colors';
import { connect } from 'react-redux'
import { ActionSelectGenre } from "../../../store/actions/MovieAction";


function GenreList(props) {
  const {Genre,selectedId,ActionSelectGenre} = props

  const renderGenre = ({ item }) => {
    const backgroundColor = item._id === selectedId ? Colors.red : Colors.white;
    const color = item._id === selectedId ? Colors.white : 'black'
    return (
        <View style={[styles.listCon,{backgroundColor}]}>
          <TouchableOpacity onPress={()=>{
              ActionSelectGenre(item._id,item.genre)
          }}>
              <Text style={{color}}>{item.genre}</Text>
          </TouchableOpacity>
        </View>
    )
  };
  return (
    <View style={styles.genreContainer}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Genre}
            renderItem={renderGenre}
            keyExtractor={item => item._id.toString()}
            extraData={selectedId}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  genreContainer:{
    paddingTop:ms(6),
    paddingBottom:ms(5)
  },
  title:{
    paddingLeft:ms(7),
    fontWeight : 'bold',
    fontSize:18,
    color:Colors.black
  },
  listCon:{
    marginLeft:ms(7),
    marginTop:ms(5),
    borderRadius:10,
    padding:ms(7)

  },
})


const mapStateToProps = (state) => ({
  Genre : state.movieReducer.genres,
  selectedId : state.movieReducer.selectedGenre
})

const mapDispatchToProps = {
  ActionSelectGenre
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreList);
