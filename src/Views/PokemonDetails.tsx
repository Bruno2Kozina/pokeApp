import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { colors } from '../core/Utils'
import { PokemonContext } from '../core/PokemonContext';
import axios from 'axios';
import { DetailsTypes, MainWrapper, DetailsContainer, DetailsCard, DetailsImage, DetailsImageContainer, DetailsStat, DetailsText } from '../core/Styles'
import RelatePokemonsModal from '../Components/RelatePokemonsModal';
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg';
import Loader from '../Components/Loader';

export interface SpritesType {
    back_default: string | null
    back_shiny: string | null
    front_default: string | null
    front_shiny: string | null
}

export interface StatsType {
    base_stat: number
    effort: number
    stat: { name: string }
}

interface TypeType {
    type: { name: string; url: string }
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

const PokemonDetails: FC = ({ }) => {

    const pokemonContext = useContext(PokemonContext);

    const [pokemonDetails, setPokemonDetails] = useState<PokeDataApiResponse>()
    const [image, setImage] = useState<number>(0);
    const [typeName, setTypeName] = useState<string>('')

    const [isLoading, setIsLoading] = useState(true)

    const params = useParams()
    const pokeIndex = params.pokemonId

    const backgroundColor = colors[pokemonDetails?.types[0].type.name as keyof typeof colors]

    const fetchPokemonData = async () => {
        setIsLoading(true)
        const response = await axios.get<PokeDataApiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`)
        setIsLoading(false)
        setPokemonDetails(response.data)
    }

    useEffect(() => {
        fetchPokemonData()
    }, [pokeIndex])

    const imageUrls = [pokemonDetails?.sprites?.back_default, pokemonDetails?.sprites?.front_default, pokemonDetails?.sprites?.back_shiny, pokemonDetails?.sprites?.front_shiny];

    const onClose = () => setTypeName('')
    if (isLoading) {
        return <MainWrapper><Loader /></MainWrapper>
    }
    return (
        <MainWrapper>
            {typeName && <RelatePokemonsModal onClose={onClose} typeName={typeName} />}
            <DetailsCard>
                <DetailsContainer bg={backgroundColor}>
                    <DetailsImageContainer>
                        {imageUrls.map((img, i) => (
                            <DetailsImage key={i} src={img || PokeBall} onClick={() => setImage(i)} height="50px" width="50px" br="50%" display={image === i ? "none" : "block"} />
                        ))}
                    </DetailsImageContainer>
                    <DetailsImage src={imageUrls[image] || PokeBall} height="250px" width="250px" />
                </DetailsContainer>
                <h2 style={{ textAlign: 'center' }}> {pokemonDetails?.name} </h2>
                <DetailsTypes>
                    {pokemonDetails?.types?.map((data: TypeType, i: any) => {
                        return <span onClick={() => setTypeName(data.type.name)} style={{ borderRadius: '30%', padding: '4px', backgroundColor: colors[data.type.name as keyof typeof colors] }} key={i}>{data.type.name}</span>
                    })}
                </DetailsTypes>
                {pokemonDetails?.stats?.map((stat: StatsType) => (
                    <DetailsStat bg={backgroundColor} maxWidth={stat.base_stat - 10 + '%'} >
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
