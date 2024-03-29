import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, CardName } from '../core/Styles'
import { imageOnErrorHandler } from '../core/Utils'

type IProps = {
    url: string
    name: string
}

const PokemonCard: FC<IProps> = ({ name, url }) => {

    const pokeUrl = url.split('/');
    const pokeId = pokeUrl[pokeUrl.length - 2]
    const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/pokemon/${pokeId}`}>
                <CardWrapper>
                    <img style={{ width: '6em', height: '6em', paddingTop: '20px' }} src={pokeImage} onError={imageOnErrorHandler} />
                    <CardName>{name}</CardName>
                </CardWrapper>
            </Link>
        </div>
    );
}

export default PokemonCard;
