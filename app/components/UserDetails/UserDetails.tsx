import React from 'react';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { TbGenderFemale } from "react-icons/tb";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import Image from "next/image";
import Jessica from "@/public/Images/Jessica.png";

const UserDetails = () => {
  return (
    <div className=' bg-stone-100 absolute items-center top-24 right-1 m-4 w-60 rounded-lg'>
      <div className=' p-2 justify-items-center mt-5 grid'>
        <Image
        src={Jessica}
        width={140}
        height={140}
        alt='Jessica'
        />
        
        <h2 className=' text-lg font-bold mt-3'>Jessica Taylor</h2>
      </div>

      <div className='flex items-centre py-3'>
        <div className='p-3 mx-1'><FiCalendar /></div>
        <div className='items-centre '>
          <p className='text-stone-500 text-sm'>Date Of Birth</p>
          <h2 className='font-semibold text-sm'>August 23, 1996</h2>
        </div>
      </div>

      <div className='flex items-centre py-3'>
        <div className='p-3 mx-1'><TbGenderFemale /></div>
        <div className='items-centre '>
          <p className='text-stone-500 text-sm'>Gender</p>
          <h2 className='font-semibold text-sm'>Female</h2>
        </div>
      </div>

      <div className='flex items-centre py-3'>
        <div className='p-3 mx-1'><MdOutlineLocalPhone /></div>
        <div className='items-centre '>
          <p className='text-stone-500 text-sm'>Contact Info</p>
          <h2 className='font-semibold text-sm'>(415) 555-1234</h2>
        </div>
      </div>

      <div className='flex items-centre py-3'>
        <div className='p-3 mx-1'><MdOutlineLocalPhone /></div>
        <div className='items-centre '>
          <p className='text-stone-500 text-sm'>Emergency Contact</p>
          <h2 className='font-semibold text-sm'>(415) 555-5678</h2>
        </div>
      </div>

      <div className='flex items-centre py-3'>
        <div className='p-3 mx-1'><GoShieldCheck /></div>
        <div className='items-centre '>
          <p className='text-stone-500 text-sm'>Insurance Provider</p>
          <h2 className='font-semibold text-sm'>Sunrise Health Assurance</h2>
        </div>
      </div>
       
      <div className='h-1vh p-4 flex  items-centre justify-around'>
        <button className='rounded-full p-2 px-5 text-sm border flex bg-green-400 hover:bg-green-500'>Show All Information</button>
      </div>

      <div className='absolute h-40 rounded-lg bg-stone-100 p-4 w-full mt-4 text-stone-500 
        overflow-y-scroll
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-300
        dark:[&::-webkit-scrollbar-thumb]:bg-stone-800'>
        <h2 className='font-semibold text-stone-950 '>Lab Results</h2>
        <div className='flex mt-2 justify-between items-center'>
          <p className='text-sm '>Blood tests</p><FiDownload className='text-stone-950 hover:text-stone-500'/>
        </div>

        <div className='flex mt-2 items-center justify-between'>
          <p className='text-sm '>CT Scans</p><FiDownload className='text-stone-950 hover:text-stone-500'/>
        </div>

        <div className='flex mt-2 items-center justify-between'>
          <p className='text-sm '>Radiology Reports</p><FiDownload className='text-stone-950 hover:text-stone-500'/>
        </div>

        <div className='flex mt-2 items-center justify-between'>
          <p className='text-sm '>x-Rays</p><FiDownload className='text-stone-950 hover:text-stone-500'/>
        </div>

        <div className='flex mt-2 items-center justify-between'>
          <p className='text-sm '>unit Test</p><FiDownload className='text-stone-950 hover:text-stone-500'/>
        </div>
        
      </div>
    </div>

  )
}

export default UserDetails