import React from 'react';
import './header.css';
import { useDispatch } from "react-redux";
import { setPokoType } from '../../redux/slices/pokemonSlice'

const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className='header' onClick={() => dispatch(setPokoType([])) }>
        <h1>Pokedex</h1>
    </div>
  )
}

export default Header