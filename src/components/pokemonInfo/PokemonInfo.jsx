import React from "react";
import "./pokemonInfo.css";
import axios from "axios";
import { useSelector } from "react-redux";

const PokemonInfo = () => {
    const [pokemonInfo, setPokemonInfo] = React.useState();
    const url = useSelector((state) => state.pokemonSlice.url);
    async function getPokemon() {
        try {
            const { data } = await axios.get(url);
            return setPokemonInfo(data);
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        getPokemon(url);
    }, [url]);
    return (
        <div className="info">
            {!pokemonInfo ? (
                <>Pokemon Info loading</>
            ) : (
                <div className="pokemon__info">
                    <img src={pokemonInfo.sprites.front_default} alt="pokemon-img" className="pokemon-img" />
                    <h2>{pokemonInfo.name}</h2>
                    <div className="info-detail">
                        <p className="info-name">Type</p>
                        <p className="info-info">{pokemonInfo.types[0].type.name}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">Attack</p>
                        <p className="info-info">{pokemonInfo.stats[1].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">Defence</p>
                        <p className="info-info">{pokemonInfo.stats[2].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">HP</p>
                        <p className="info-info">{pokemonInfo.stats[0].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">SP Attack</p>
                        <p className="info-info">{pokemonInfo.stats[3].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">SP Defence</p>
                        <p className="info-info">{pokemonInfo.stats[4].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">Speed</p>
                        <p className="info-info">{pokemonInfo.stats[5].base_stat}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">Weight</p>
                        <p className="info-info">{pokemonInfo.weight}</p>
                    </div>
                    <div className="info-detail">
                        <p className="info-name">Total moves</p>
                        <p className="info-info">{pokemonInfo.moves.length}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokemonInfo;
