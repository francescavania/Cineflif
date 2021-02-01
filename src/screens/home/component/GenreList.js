import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../config/Colors';

export default function GenreList({genre, genreId, updateGenre}) {

  const [selectedId, setSelectedId] = useState(genreId);

  const renderGenre = ({ item }) => {
    const backgroundColor = item.id === selectedId ? Colors.red : Colors.white;
    const color = item.id === selectedId ? Colors.white : 'black'
    return (
        <View style={[styles.listCon,{backgroundColor}]}>
          <TouchableOpacity onPress={()=>{
              updateGenre(item.id,item.name)
              setSelectedId(item.id)
          }}>
              <Text style={{color}}>{item.name}</Text>
          </TouchableOpacity>
        </View>
    )
  };
  return (
    <View style={styles.genreContainer}>
        {/* <Text style={styles.title}>Genre</Text> */}
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={genre}
            renderItem={renderGenre}
            keyExtractor={item => item.id.toString()}
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
