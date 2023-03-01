import React from "react";
import "./typesFilter.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes, fetchPokoTypes } from "../../redux/slices/pokemonSlice";


const TypesFilter = () => {
    const types = useSelector((state) => state.pokemonSlice.types);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchTypes());
    }, []);
    return (
        <div className="types">
            {!types ? (
                <>Loading types</>
            ) : (
                types.map((el, index) => (
                    <div key={index} className="types__of-poko" onClick={() => dispatch(fetchPokoTypes(el.url))}>
                        <p>{el.name}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default TypesFilter;
