import React, { useContext, useRef } from 'react';
import Pokemon from './PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import {  } from '../core/Styles'
import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: flex;
`;

export interface PostType {
	name: string
    url: string
}

function RelatePokemonsModal() {
    const modalRef = useRef();

    const pokemonContext = useContext(PokemonContext);
    const { showModal, changeShowModal } = pokemonContext

    const closeModal = (e: React.SyntheticEvent<HTMLImageElement, Event>)=> {
    if (modalRef.current === e.target) {
        changeShowModal(false);
    }
};

  return (
    <Background>
        <ModalWrapper>
            <ModalContent>
            </ModalContent>
        </ModalWrapper>
    </Background>
  );
}

export default RelatePokemonsModal

