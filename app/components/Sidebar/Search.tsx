"use client";
import React from 'react';
import {FiCommand, FiSearch} from 'react-icons/fi';


const Search = () => {
  return (
    <div className='bg-stone-200 mb-4 relative rounded flex items-centre px-2 py-1.5 text-sm m-2'>
        <FiSearch className='mr-1 mt-0.5' />
        <input
        type='text'
        placeholder='Search'
        className='w-full bg-transparent placeholder:text-stone-400 focus:outline-none ' 
        />

        <span className='p-1 text-xs flex gap-0.5 items-centre shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2'>
            <FiCommand/>K
        </span>

        
    </div>
  )
};

export default Search