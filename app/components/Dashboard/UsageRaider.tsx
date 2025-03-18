import React from 'react';
import { GoDotFill } from "react-icons/go";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

function UsageRaider() {
  return (
    <div className='bg-purple-200 rounded-lg items-centre p-4  col-span-4'>
        <div className='flex gap-2 items-center'>
            <GoDotFill className='text-pink-500'/><p className='font-semibold '>Systolic</p>
        </div>

        <div className='flex items-center'>
            <p className='text-2xl font-bold mt-2'>160</p>
        </div>

        <div className='flex gap-2 items-center border-b border-stone-400'>
            <GoTriangleUp className='text-stone-950 my-4' /><p className='text-sm '>Higher than Average</p>
        </div>

        <div className='flex gap-2 items-center my-4'>
            <GoDotFill className='text-purple-500'/><p className='font-semibold '>Diastolic</p>
        </div>

        <div className='flex items-center'>
            <p className='text-2xl font-bold'>78</p>
        </div>

        <div className='flex gap-2 items-center mt-2'>
            <GoTriangleDown className='text-stone-950'/><p className='text-sm '>Lower than Average</p>
        </div>

    </div>
  )
}

export default UsageRaider