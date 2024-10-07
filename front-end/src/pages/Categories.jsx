import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { GifState } from '../context/gifContext';
const Categories = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();
  const { gif } = GifState

  const fetchResults = async () => {
    try {
      const { data } = await gif.gifs(category, category);

      setResults(data); 
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [filter]);
  return (
    <div>

    </div>
  )
}

export default Categories
