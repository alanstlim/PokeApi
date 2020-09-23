import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';
import {Text, FlatList, View} from 'react-native';
import {Sprite} from './styles';



export default function Pokemon(props) {

  const {pokeInfo} = props; 

  const [pokemon, setPokemon] = useState([]);

    async function loadPokemon() {
        const response = await Axios.get(pokeInfo);
         setPokemon(response.data);
         console.log(response.data.types);
    }

    useEffect(() => {
        loadPokemon();
        
    }, []);
   
  return (

  <View>
    <Sprite source={{uri: (typeof pokemon.sprites === "undefined" ? "" : pokemon.sprites.front_default)}}></Sprite>
  <View>
    <FlatList
            data={pokemon.stats}
            renderItem={({item}) =>(
              <Text> {item.base_stat} {item.stat.name}</Text>
            )}>
    </FlatList>

    <FlatList
            data={pokemon.types}
            renderItem={({item}) =>(
              <Text> {item.type.name}</Text>
            )}>
    </FlatList>
  </View>
  </View>

  )
}