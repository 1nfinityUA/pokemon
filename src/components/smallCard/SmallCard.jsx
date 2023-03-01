import React from "react";
import "./smallCard.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../../redux/slices/pokemonSlice";

const SmallCard = (el) => {
    const dispatch = useDispatch();
    const [smallPokemon, setSmallPokemon] = React.useState();
    const pokoType = useSelector((state) => state.pokemonSlice.pokoType);
    async function getPokemon() {
        try {
            const { data } = await axios.get(el.el.pokemon.url);
            return setSmallPokemon(data);
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        getPokemon(el.el.pokemon.url);
    }, [pokoType]);
    return (
        <div className="small-card">
            {!smallPokemon ? (
                <>Loading cards info</>
            ) : (
                <div className="small-pokemon">
                    <img
                        src={smallPokemon.sprites.front_default}
                        alt="imgPoko"
                        onClick={() => dispatch(setUrl(el.el.pokemon.url))}
                        className="small-pokemon__img"
                    />
                    <h3>{smallPokemon.name}</h3>
                </div>
            )}
        </div>
    );
};

export default SmallCard;
