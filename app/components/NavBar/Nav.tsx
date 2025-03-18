import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { GoHome } from "react-icons/go";
import { MdOutlineCalendarToday, MdOutlinePeopleAlt } from "react-icons/md";
import { IoCardOutline, IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import TestLogo from "@/public/Images/TestLogo.png";
import Doctor from "@/public/Images/Doctor.png";

const Nav = () => {
  return (
    <div className='flex absolute items-center top-0 border rounded-full w-full p-4 bg-stone-100 justify-self-center justify-around m-4'>
            <div className='flex justify-center items-center'>

            <button className='absolute left-5 flex hover:cursor-pointer items-centre justify-center'>
                        <Image
                        src={TestLogo}
                        width={150}
                        height={150}
                        alt='Logo'
                        /> 
            </button>

            <div className='flex space-x-4'>
                <button className='items-center justify-centre flex relative text-sm gap-1 transition-colors  hover:bg-green-400 p-3 rounded-full'>
                    <GoHome/>
                    <span>Overview</span>
                </button>

                <button className='items-center justify-centre flex relative text-sm gap-1 transition-colors  hover:bg-green-400 p-3 rounded-full'>
                    < MdOutlinePeopleAlt/>
                    <span>Patients</span>
                </button>

                <button className='items-center justify-centre flex relative text-sm gap-1 transition-colors  hover:bg-green-400 p-3 rounded-full'>
                    <MdOutlineCalendarToday/>
                    <span>Schedule</span>
                </button>

                <button className='items-center justify-centre flex relative text-sm gap-1 transition-colors  hover:bg-green-400 p-3 rounded-full'>
                    <FiMessageSquare/>
                    <span>Message</span>
                </button>

                <button className='items-center justify-centre flex relative text-sm gap-1 transition-colors  hover:bg-green-400 p-3 rounded-full'>
                    <IoCardOutline/>
                    <span>Transactions</span>
                </button>
                
            </div>
                
            <button className='absolute right-4 flex gap-2
             items-center'>
                        <Image
                        src={Doctor}
                        width={32}
                        alt='Dr Jones'
                        />
                        <div className='text-start border-r border-stone-500 pr-2'>
                          <span className='text-sm font-bold block '>Dr.Jones Simmons</span>
                        
                          <span className='text-xs block text-stone-500'>General Practitioner</span>
                        </div>

                {/** N:B Dnt forget setting icon at the end */}

                        <IoSettingsOutline className='text-lg item-centre hover:text-stone-500' />

                        <BsThreeDotsVertical className='text-lg item-centre hover:text-stone-500' />
                    </button> 
        </div>
    </div>

  )
}

export default Nav