import React, {FC, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

type IProps = {
    url: string
    name: string
}



const Pokemon: FC<IProps> = ({ name, url }) => {

  const pokeUrl = url.split('/');
  const pokeId = pokeUrl[pokeUrl.length - 2]

  return (
    <div>

     <Link
        to={`pokemon/${pokeId}`} // pokemon id
        >
      {name}
      </Link>
    </div>
  );
}

export default Pokemon;
