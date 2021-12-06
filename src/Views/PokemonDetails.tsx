import React, {FC, useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {imageOnErrorHandler} from '../core/Utils'
import { PokemonContext } from '../core/PokemonContext';
import axios from 'axios';
import { DetailsTypes, MainWrapper, DetailsContainer, DetailsCard, DetailsImage, DetailsImageContainer, DetailsStat, DetailsText} from '../core/Styles'

export interface SpritesType {
	back_default: string|null
    back_shiny: string|null
    front_default: string|null
    front_shiny: string|null
}

export interface StatsType {
	base_stat: number
    effort: number
    stat: {name: string}
}

interface TypeType {
    type: {name: string; url: string}
}

interface PokeDataApiResponse {
    abilities: []
    base_experience: number
    height: number
    name: string
    sprites: SpritesType
    stats: StatsType[]
    types: TypeType[]
    weight: number
}

interface RelatedPokemonsApiResponse {
    data: any
}

const PokemonDetails: FC = ({}) => {
    const pokemonContext = useContext(PokemonContext);
    const { showModal, changeShowModal } = pokemonContext

    const [pokemonDetails, setPokemonDetails] = useState<PokeDataApiResponse>()
    const [image, setImage] = useState<number>(0);

    const params = useParams()
    const pokeIndex = params.pokemonId

    useEffect(() => {
        const fetchPokemonData = async () => {
        const response = await axios.get<PokeDataApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`)
        setPokemonDetails(response.data)
        }
        fetchPokemonData()
    }, [])

    const imageUrls = [pokemonDetails?.sprites?.back_default, pokemonDetails?.sprites?.front_default, pokemonDetails?.sprites?.back_shiny, pokemonDetails?.sprites?.front_shiny];

    return (
        <MainWrapper>
            <DetailsCard>
                <DetailsContainer bg="white">
                    <DetailsImageContainer>
                        {imageUrls.map((img, i) => (
                            <DetailsImage key={i} src={img} onError={imageOnErrorHandler} onClick={() => setImage(i)} height="50px" width="50px" br="50%" display={image === i ? "none" : "block"}/>
                        ))}
                    </DetailsImageContainer>
                    <DetailsImage src={imageUrls[image]} onError={imageOnErrorHandler} height="250px" width="250px"/>
                </DetailsContainer>
                <h2 style={{textAlign: 'center'}}> {pokemonDetails?.name} </h2>
                <DetailsTypes>
                    {pokemonDetails?.types?.map((data: TypeType, i: any) => {
                        const a = data.type.name
                        return <span onClick={() => changeShowModal(true)} style={{padding: '4px', backgroundColor: 'white'}} key={i}>{data.type.name}</span>
                    })}
                </DetailsTypes>
                {pokemonDetails?.stats?.map((stat: StatsType) => (
                    <DetailsStat bg='rgb(230,230,250)' maxWidth={stat.base_stat - 10 + '%'} >
                        <DetailsText>
                            {stat.stat.name.toUpperCase()}
                        </DetailsText>
                        <DetailsText>
                            {stat.base_stat}
                        </DetailsText>
                    </DetailsStat>
                ))}
            </DetailsCard>
        </MainWrapper>
    );
}

export default PokemonDetails;
