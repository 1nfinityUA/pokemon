import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
    "Pokemon/fetchPokemon",
    async ({ limit }) => {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
        );
        return data.results;
    }
);
export const fetchTypes = createAsyncThunk("Pokemon/fetchTypes", async () => {
    const { data } = await axios.get(
        "https://pokeapi.co/api/v2/type/?limit=999"
    );
    return data.results;
});
export const fetchPokoTypes = createAsyncThunk(
    "Pokemon/fetchPokoTypes",
    async (url) => {
        const { data } = await axios.get(url);
        return data.pokemon;
    }
);

const initialState = {
    items: [],
    types: [],
    pokoType: [],
    limit: 12,
    url: "https://pokeapi.co/api/v2/pokemon/1",
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setLimit: (state) => {
            state.limit += 6;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setPokoType: (state, action) => {
            state.pokoType = action.payload;
        },
    },
    extraReducers: {
        [fetchPokemon.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchPokemon.rejected]: () => {
            console.log("server reject");
        },
        [fetchTypes.fulfilled]: (state, action) => {
            state.types = action.payload;
        },
        [fetchTypes.rejected]: () => {
            console.log("server reject");
        },
        [fetchPokoTypes.fulfilled]: (state, action) => {
            state.pokoType = action.payload;
        },
        [fetchPokoTypes.rejected]: () => {
            console.log("server reject");
        },
    },
});

export const { setLimit, setUrl, setPokoType } = pokemonSlice.actions;

export default pokemonSlice.reducer;
