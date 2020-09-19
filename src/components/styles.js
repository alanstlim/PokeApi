import styled from 'styled-components/native';

export const Container = styled.View `
    flex: auto;
    background-color: #34495e; 
`

export const PokeCard = styled.View `
    width: 125px;
    height: 190px;
    background-color: #2E2E2E;
    margin: 15px 0px 0px 10px;
    border-radius: 5px;
    border: 3px solid #202020;  
`

export const PokeName = styled.Text `
    font-size: 16px;
    font-weight: bold;
    text-align: center; 
    margin-top: 5px;
    margin-bottom: 10px;
    color: #fff;
    
`

export const Sprite = styled.Image `
    width: 105px;
    height: 115px;
    align-self: center;
    background-color: #696969;
    border-radius: 10px;


`