import React, {FC, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import {CardWrapper, CardName} from '../core/Styles'


type IProps = {
    url: string
    name: string
}

const Pokemon: FC<IProps> = ({ name, url }) => {

  const pokeUrl = url.split('/');
  const pokeIndex = pokeUrl[pokeUrl.length - 2]
  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`

  return (
     <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`pokemon/${pokeIndex}`} // Link to PokemonDetails.tsx
        state={{name}}
        >
      <CardWrapper>
        <img style={{ width: '120px', height: '120px' }} src={pokeImage} alt={'asd'}/> 
        <CardName>{name}</CardName>
      </CardWrapper>
      </Link>
  );
}

export default Pokemon;
