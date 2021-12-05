import react from 'react'
import PokeBall from '../Assets/Images/Pokeball-alt.jpeg'

export function imageOnErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = PokeBall;
};

