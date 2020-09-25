import Axios from 'axios';
import {Actions} from 'react-native-router-flux'
import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, StatusBar} from 'react-native';
import {Container, Sprite, PokeName,  PokeCard, PokeTop, ContainerDex} from './styles';


export default function Pokedex(props) {
    
    const [pokemon, setPokemon] = useState([]);

    async function loadPokemons() {
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
         setPokemon(response.data.results);  
    }

    useEffect(() => {
        loadPokemons();
        
    }, []);
   
  return (

    <Container>
            <StatusBar backgroundColor="#CC0F2F"/>
            <PokeTop source={require('../../assets/pokedextop.png')}></PokeTop>
            <ContainerDex>
                <FlatList
                    data={pokemon}
                    numColumns={3}
                    renderItem={({item, index}) =>(
                        <TouchableOpacity onPress={() => Actions.pokemon({pokeInfo: item.url, title: item.name, index: index+1})}>
                            <PokeCard>
                                <PokeName>{item.name} #{index+1} </PokeName>
                                <Sprite source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index +1) + ".png"}}/>     
                            </PokeCard>
                        </TouchableOpacity>  
                        )}>
                    </FlatList>
            </ContainerDex>
        </Container>
  );
};