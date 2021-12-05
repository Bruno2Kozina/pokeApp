import React, {FC, useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router';
import {imageOnErrorHandler} from '../core/Utils'
import axios from 'axios';
import { DetailsContainer, DetailsCard, DetailsImage, DetailsImageContainer, DetailsStat, DetailsText} from '../core/Styles'

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
    id: number
    name: string
    order: number
    sprites: SpritesType
    stats: StatsType[]
    types: TypeType[]
    weight: number
}




const PokemonDetails: FC = ({}) => {

    const [pokemonDetails, setPokemonDetails] = useState<PokeDataApiResponse>()
    const [image, setImage] = useState(0);

    const params = useParams()
    const pokeIndex = params.pokemonId
    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await axios.get<PokeDataApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`)
            setPokemonDetails(response.data)
        }
        fetchPokemonData()
    }, [])

    console.log(pokemonDetails)
    
    const urls = [pokemonDetails?.sprites?.back_default, pokemonDetails?.sprites?.front_default, pokemonDetails?.sprites?.back_shiny, pokemonDetails?.sprites?.front_shiny];
    


    

    console.log(pokemonDetails)

   
    return (
        <DetailsContainer bg="orange" direction="column">
          <DetailsContainer>
          {pokemonDetails?.types?.map((data: TypeType, i: any) => (
            <a key={i} href={data.type.url}>{data.type.name}</a>
          ))}
          </DetailsContainer>
          <DetailsCard>
            <DetailsContainer bg="white">
            <DetailsImageContainer>
              {urls.map((img, i) => (
                <DetailsImage key={i} src={img} onClick={() => setImage(i)} height="50px" width="50px" br="50%" display={image === i ? "none" : "block"}/>
              ))}
            </DetailsImageContainer>
            <DetailsImage src={urls[image]} alt="poke" height="150px" width="150px"/>
            </DetailsContainer>
            {pokemonDetails?.stats?.map((stat: StatsType) => (
              <DetailsStat><DetailsText>{stat.stat.name.toUpperCase()}</DetailsText><DetailsText>{stat.base_stat}</DetailsText></DetailsStat>
            ))}
          </DetailsCard>
          
        </DetailsContainer>
      );
}

export default PokemonDetails;
