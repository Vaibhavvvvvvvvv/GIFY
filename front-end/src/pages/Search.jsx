import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GifState } from '../context/gifContext';
import FilterGif from '../Component/FilterGif';
import Gif from '../Component/Gif';

const Search = () => {
  const [searchResult, setSearchResults] = useState([]);
  const { gif, filter } = GifState(); // Invoke GifState() correctly
  const { query } = useParams();

  const fetchSearchResults = async () => {
    try {
      const { data } = await gif.search(query, {
        sort: "relevant", // Fixing typo from "relavant" to "relevant"
        lang: "en",
        type: filter,
        limit: 20
      });
      setSearchResults(data); // Set the fetched results in state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Refetch search results when filter or query changes
  useEffect(() => {
    fetchSearchResults();
  }, [filter, query]); // Add query as dependency to refetch when it changes

  return (
    <div className='my-4'>
      <h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>
      <FilterGif alignLeft={true} />
      {searchResult.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResult.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try Searching for a Sticker instead?
        </span>
      )}
    </div>
  );
};

export default Search;
