import React from "react";
import "./home.css";
import Card from "../card/Card";
import PokemonInfo from "../pokemonInfo/PokemonInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../redux/slices/pokemonSlice";
import Button from "../button/Button";
import SmallCard from "../smallCard/SmallCard";

const Home = () => {
    const items = useSelector((state) => state.pokemonSlice.items);
    const limit = useSelector((state) => state.pokemonSlice.limit);
    const pokoType = useSelector((state) => state.pokemonSlice.pokoType);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPokemon({ limit }));
    }, [limit]);
    return (
        <div className="home">
            {pokoType.length === 0 ? (
                <div className="pokemon__list">
                    {items.length === 0 ? (
                        <>Loading</>
                    ) : (
                        items.map((el, index) => (
                            <Card key={index} url={el.url} />
                        ))
                    )}
                    <Button />
                </div>
            ) : (
                <div className="pokemon__list">
                    {pokoType.map((el, index) => (
                        <SmallCard key={index} el={el}/>
                    ))}
                </div>
            )}

            <PokemonInfo />
        </div>
    );
};

export default Home;
