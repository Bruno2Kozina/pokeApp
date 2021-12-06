import react from 'react'
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg'

export function imageOnErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = PokeBall;
};

export const colors = {
    normal: 'rgb(230,230,250, 0.8)',
    fighting: 'rgb(205,92,92, 0.8)',
    flying: 'rgb(135,206,250, 0.8)',
    poison: 'rgb(173,255,47, 0.8)',
    ground: 'rgb(205,133,63,0.8)',
    rock: 'rgb(210,180,140, 0.8)',
    bug: 'rgb(128,128,0, 0.8)',
    ghost: 'rgb(240,255,255, 0.8)',
    steel: 'rgb(192,192,192, 0.8)',
    fire: 'rgb(178,34,34, 0.8)',
    water: 'rgb(176,224,230, 0.8)',
    grass: 'rgb(152,251,152, 0.8)',
    eletric: 'rgb(238,232,170, 0.8)',
    psychic: 'rgb(238,232,170, 0.8)',
    ice: 'rgb(224,255,255, 0.8)',
    dragon: 'rgb(219,112,147, 0.8)',
    dark: 'rgb(112,128,144, 0.8)',
    fairy: 'rgb(147,112,219, 0.8)',
    unknown: 'rgb(255,160,122, 0.8)',
    shadow: 'rgb(176,196,222, 0.8)',
}