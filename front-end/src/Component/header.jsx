import React, { useEffect, useState } from 'react';
import { GifState } from '../context/gifContext';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2"; // Correct import for the HiBars3BottomRight icon
import Search from './Search';

const Header = () => {
  const [categories, setCategories] = useState([]); // This is okay
  const [showCategories, setShowCategories] = useState(false); // Initialize with a boolean value

  const { gif, favorites } = GifState();


  const fetchHifCategory = async () => {
    const { data } = await gif.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchHifCategory()
  }, []);

  return (
    <nav>
      <div className='relative flex gap-4 justify-between items-center'>
        <Link to="/" className='flex gap-2'>
          <img src='/logo.svg' className='w-8' alt='logo' />
          <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1>
        </Link>

        <div className='font-bold text-md flex gap-2 items-center'>
          {categories.slice(0, 5)?.map((category) => {
            return <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
              {category.name}
            </Link>
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <BsThreeDotsVertical
              className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`}
              size={35}
            />
          </button>

          {favorites.length > 0 && (
            <div className='h-9 bg-gray-700 pt-1.5 px-0 cursor-pointer rounded'>
              <Link to="/fav">Favorite GIFs</Link>
            </div>
          )}


          <button onClick={() => setShowCategories(!showCategories)}>
            <HiBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        {showCategories && (
            <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
              <span className="text-3xl font-extrabold">Categories</span>
              <hr className="bg-gray-100 opacity-50 my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {categories?.map((category)=>{
                  return <Link
                  key={category.name}
                  to={`/${category.name_encoded}`}
                  className='font-bold'>
                  {category.name}
                  </Link>
                })}
                </div>
            </div>
          )}
      </div>
      <Search/>
    </nav>
  );
};

export default Header;
