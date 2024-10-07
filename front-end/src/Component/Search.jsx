import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiMiniXMark,HiOutlineMagnifyingGlass } from "react-icons/hi2"
const Search = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchGIF = async () => {
        if (query.trim() === "") {
            return;
        }
        navigate(`/search/${query}`);
    };
    return (
        <div className='flex relative'>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder='search all the GIfs and Sticker'
                className='w-full pl-4 pr-14 py-5 text-x1 text-black rounded-t1'></input>
            {query && (
                <button
                    onClick={() => setQuery("")}
                    className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
                >
                    <HiMiniXMark size={22} />
                </button>
            )}
            <button
                onClick={searchGIF}
                className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
            >
                <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
            </button>
        </div>
    )
}

export default Search
