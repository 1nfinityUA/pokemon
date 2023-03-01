import React from "react";
import "./card.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUrl } from "../../redux/slices/pokemonSlice";

const Card = ({ url }) => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = React.useState();
    async function getPokemon() {
        try {
            const { data } = await axios.get(url);
            return setPokemon(data);
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        getPokemon(url);
    }, []);
    return (
        <div className="card">
            {!pokemon ? (
                <>Loading cards info</>
            ) : (
                <div className="pokemon">
                    <img src={pokemon.sprites.front_default} alt="imgPoko" onClick={() => dispatch(setUrl(url))} className='pokemon__img' />
                    <h3>{pokemon.name}</h3>
                    <div className="pokemon__ability-list">
                        {pokemon.abilities.map((el, index) => (
                            <div className="pokemon__ability" key={index}>{el.ability.name}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
