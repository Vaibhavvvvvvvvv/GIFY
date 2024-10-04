import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState([]);
    return (
        <div>
            <Link to="/" className='flex gap-2'>
                <img src='/logo.svg' className='w-8' alt='logo' />
                <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1>
            </Link>

            <Link className='px-4 py-1 hover:gradient'>
            
            </Link>
        </div>
    )
}

export default Header
