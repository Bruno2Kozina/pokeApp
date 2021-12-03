import React, {FC, useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router';


const PokemonDetails: FC = ({}) => {

    const location = useLocation()
    const { name } = location.state

    return (
    <div>
        {name}
    </div>
);
}

export default PokemonDetails;