import React, {FC, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import {CardWrapper, CardName} from '../core/Styles'
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg'


type IProps = {
    url: string
    name: string
}

const Pokemon: FC<IProps> = ({ name, url }) => {

  const pokeUrl = url.split('/');
  const pokeIndex = pokeUrl[pokeUrl.length - 2]
  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`

  const imageOnErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PokeBall;
  };

  return (
     <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`pokemon/${pokeIndex}`} // Link to PokemonDetails.tsx
        state={{name}}
        >
      <CardWrapper>
        <img style={{ width: '6em', height: '6em', paddingTop: '20px' }} src={pokeImage} onError={imageOnErrorHandler}/> 
        <CardName>{name}</CardName>
      </CardWrapper>
      </Link>
  );
}

export default Pokemon;
