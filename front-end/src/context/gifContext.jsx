import { createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const gifContext = createContext();

const GifProvider = ({ children }) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState(["gifs"]);
    const [favorites, setFavorites] = useState([]);

    const gif = new GiphyFetch(import.meta.env.VITE_GIF_key);

    return <gifContext.Provider value={{ gif, gifs, setGifs, filter, setFilter, favorites }}>
        {children}
    </gifContext.Provider>
};

export const GifState = () => {
    return useContext(gifContext)
}

export default GifProvider;