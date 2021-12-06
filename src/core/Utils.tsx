import react from 'react'
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg'

export function imageOnErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = PokeBall;
};

export const colors = {
    normal: 'rgba(230,230,250, 0.6)',
    fighting: 'rgba(205,92,92, 0.6)',
    flying: 'rgba(135,206,250, 0.6)',
    poison: 'rgba(173,255,47, 0.6)',
    ground: 'rgba(205,133,63,0.6)',
    rock: 'rgba(210,180,140, 0.6)',
    bug: 'rgba(128,128,0, 0.6)',
    ghost: 'rgba(240,255,255, 0.6)',
    steel: 'rgba(192,192,192, 0.6)',
    fire: 'rgba(178,34,34, 0.6)',
    water: 'rgba(176,224,230, 0.6)',
    grass: 'rgba(152,251,152, 0.6)',
    eletric: 'rgba(238,232,170, 0.6)',
    psychic: 'rgba(238,232,170, 0.6)',
    ice: 'rgba(224,255,255, 0.6)',
    dragon: 'rgba(219,112,147, 0.6)',
    dark: 'rgba(112,128,144, 0.6)',
    fairy: 'rgba(147,112,219, 0.6)',
    unknown: 'rgba(255,160,122, 0.6)',
    shadow: 'rgba(176,196,222, 0.6)',
}