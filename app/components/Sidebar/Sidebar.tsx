import React from 'react';
import Search from '@/app/components/Sidebar/Search';
import {RouteSelect} from '@/app/components/Sidebar/RouteSelect';


export const Sidebar = () => {
  return (
    <div>
      <div className=' overflow-y-scroll mt-12 h-4/5 outline-none bg-stone-100 rounded-lg 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-300
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
        <Search />
        <RouteSelect/>
      </div>
      {/* TODO Plan toggle */}
    </div> 
  )
}
