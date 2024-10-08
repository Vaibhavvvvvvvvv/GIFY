// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import { GifState } from "../context/gifContext";
// import Gif from "../Component/Gif";
// import FollowOn from "../Component/FollowOn"; 

// const Categories = () => {
//   const [results, setResults] = useState([]); // Correctly using useState as an array
//   const { gif } = GifState(); // Invoke GifState correctly
//   const { category } = useParams(); // Get the category from the URL params

//   // Fetch GIFs based on the category
//   const fetchSearchResults = async () => {
//     try {
//       const { data } = await gif.gifs(category, category);
//       setResults(data); // Set the results to state
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSearchResults(); // Fetch results when component mounts or category changes
//   }, [category]);

//   return (
//     <div className="flex flex-col sm:flex-row gap-5 my-4">
//       <div className="w-full sm:w-72">

//         {results && results.length > 0 && <Gif gif={results[0]} hover={false} />}
//         <span className="text-gray-400 text-sm pt-2">
//           Don&apos;t tell it to me, GIF it to me!
//         </span>
//         <FollowOn /> 

//         <div className="w-full h-0.5 mt-6 bg-gray-800" />
      
//        <div>
//         <h2 className="text-4xl pb-1 font-extrabold capitalize">
//           {category.split("-").join(" & ")} GIFs
//         </h2>
//         <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
//           @{category}
//         </h2>

//         {searchResult.length > 0 && (
//           <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
//             {searchResult.slice(1).map((gif) => (
//               <Gif gif={gif} key={gif.id} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

// export default Categories;


import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";
import Gif from "../Component/Gif";
import FollowOn from "../Component/FollowOn"; 

const Categories = () => {
  const [results, setResults] = useState([]); // Correctly using useState as an array
  const { gif } = GifState(); // Invoke GifState correctly
  const { category } = useParams(); // Get the category from the URL params

  // Fetch GIFs based on the category
  const fetchSearchResults = async () => {
    try {
      const { data } = await gif.gifs(category, category);
      setResults(data); // Set the results to state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchSearchResults(); // Fetch results when component mounts or category changes
  }, [category]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results && results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <FollowOn /> 

        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>

      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {results.length > 1 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {results.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
