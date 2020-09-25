import styled from 'styled-components/native';

export const Container = styled.View `
    flex-direction: row;
    background-color: #CC0F2F;
    height: 100%;
`

export const PokeCard = styled.View `
    width: 40%;
    height: 40%;
    margin-top: 50px;
`

export const BackgroundPoke = styled.Image`
    width: 100%;
    height: 70%;
    z-index: 0;
    margin-top: -100%;
`

export const Sprite = styled.Image `
    width: 100%;
    height: 70%;
    z-index: 1;
`

export const InfoContainer = styled.View `
    flex:auto;
    background-color: #d3edf8;
    border-top-start-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-top: 15px;
    height: 40%;

`

export const PokeName = styled.Text `
    font-size: 20px;
    font-weight: bold;
    text-align: center; 
    color: #000;
    margin: 5px;

`

export const Infos = styled.Text `
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin: 3px;
    margin-left: 10px;
    text-align: auto;

`
export const ElementContainer = styled.View `
    flex: auto;
    background-color: #fff;
    border-top-start-radius: 15px;
    border-top-end-radius: 15px;
    height: 100%;
    margin: 5px;
    align-items: center;
`
export const Element = styled.Text `
    font-size: 16px;
    font-weight: bold;
    color: #000;
    text-align: center;
`
