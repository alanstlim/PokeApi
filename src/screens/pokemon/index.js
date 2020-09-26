import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';
import {FlatList} from 'react-native';
import {Sprite, BackgroundPoke, Infos, MainContainer, Container, InfoContainer, PokeCard, PokeName, Element, ElementContainer} from './styles';


export default function Pokemon(props) {

  const {pokeInfo} = props; 

  const [pokemon, setPokemon] = useState([]);

    async function loadPokemon() {
        const response = await Axios.get(pokeInfo);
          setPokemon(response.data);
    }

    useEffect(() => {
        loadPokemon();
    }, []);

  return (
  
    <MainContainer>
    <Container>
      <PokeCard> 
        <Sprite source={{uri: (typeof pokemon.sprites === "undefined" ? "" : pokemon.sprites.front_default)}}></Sprite>
        <BackgroundPoke source={require('../../assets/backgroundPoke.png')}></BackgroundPoke>
      </PokeCard>

      <InfoContainer>

        <PokeName> {pokemon.name} </PokeName>

        <FlatList
          data={pokemon.stats}
          renderItem={({item}) =>(
            <Infos>{item.stat.name} : {item.base_stat} </Infos>
          )}>
        </FlatList>
        
        <FlatList
          data={pokemon.types}
          numColumns={3}
          renderItem={({item}) =>(
            <ElementContainer>
            <Element> {item.type.name} </Element>
            </ElementContainer>
          )}>
        </FlatList>
      </InfoContainer>
    </Container>
      
    </MainContainer>

  )
}