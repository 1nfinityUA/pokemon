import React from 'react'
import './button.css';
import {  setLimit } from "../../redux/slices/pokemonSlice";
import { useDispatch } from "react-redux";

const Button = () => {
    const dispatch = useDispatch();
  return (
    <button className='button' onClick={() => dispatch(setLimit())}>Load More</button>
  )
}

export default Button