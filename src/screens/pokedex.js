import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  FlatList, TouchableOpacity
} from 'react-native';
import {Container, Sprite, PokeName,  PokeCard} from '../components/styles';


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
        <FlatList
            data={pokemon}
            numColumns={3}
            renderItem={({item, index}) =>(
                
                <PokeCard>
                    <PokeName>{item.name} #{index+1} </PokeName>
                    <Sprite source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index +1) + ".png"}}/>     
                </PokeCard>
                
                
            )}>
            keyExtractor={item => item.name}
        </FlatList>
    </Container>
  );
};