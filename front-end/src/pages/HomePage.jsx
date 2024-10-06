import React, { useEffect } from 'react'
import FilterGif from '../Component/FilterGif';
import { GifState } from '../context/gifContext';
import Gif from '../Component/Gif';
const HomePage = () => {
  const { gif, gifs,setGifs,filter } = GifState();

  const fetchTrendingGifs = async () => {
    try {
      const { data } = await gif.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
      console.log(data); // Log to see what data looks like
      setGifs(data);     // Assuming data is an array of GIF objects
    } catch (error) {
      console.error("Error fetching trending GIFs:", error);
    }
  };

  useEffect(()=>{
  fetchTrendingGifs();
},[filter]);

  return (
    <>
    <div>
      <img src='/banner.gif' alt='earth banner' className="mt-2 rounded w-full" />
    </div>
      <FilterGif showTrending/> 
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {gifs && gifs.map((gif) => (
        <Gif gif={gif} key={gif.id} /> 
      ))}
      </div>
    </>
  );
  }

export default HomePage
