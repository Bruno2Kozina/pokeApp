import react from 'react'
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg'

export function imageOnErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = PokeBall;
};

export const colors = {
    normal: 'rgba(230,230,250, 0.8)',
    fighting: 'rgba(205,92,92, 0.8)',
    flying: 'rgba(135,206,250, 0.8)',
    poison: 'rgba(173,255,47, 0.8)',
    ground: 'rgba(205,133,63,0.8)',
    rock: 'rgba(210,180,140, 0.8)',
    bug: 'rgba(128,128,0, 0.8)',
    ghost: 'rgba(240,255,255, 0.8)',
    steel: 'rgba(192,192,192, 0.8)',
    fire: 'rgba(178,34,34, 0.8)',
    water: 'rgba(176,224,230, 0.8)',
    grass: 'rgba(152,251,152, 0.8)',
    eletric: 'rgba(238,232,170, 0.8)',
    psychic: 'rgba(238,232,170, 0.8)',
    ice: 'rgba(224,255,255, 0.8)',
    dragon: 'rgba(219,112,147, 0.8)',
    dark: 'rgba(112,128,144, 0.8)',
    fairy: 'rgba(147,112,219, 0.8)',
    unknown: 'rgba(255,160,122, 0.8)',
    shadow: 'rgba(176,196,222, 0.8)',
}