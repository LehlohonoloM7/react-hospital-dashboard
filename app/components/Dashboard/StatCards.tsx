import React from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { RiLungsLine } from "react-icons/ri";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { PiHeartbeat } from "react-icons/pi";

const StatCards = () => {
  return (
  <>
    <Card
        Icon={RiLungsLine}
        title="Respiratory Rate"
        value="20 bpm"
        pillText="2.74%"
        trend="up"
        description="Normal"
    />
    <Card
        Icon={LiaTemperatureLowSolid}
        title="Temperature"
        value="98.6 F"
        pillText="1.01%"
        trend="down"
        description="Normal"
    /> 
    <Card
        Icon={PiHeartbeat}
        title="Heart Rate"
        value="78 bpm"
        pillText="60.75%"
        trend="up"
        description="Lower than Avarage"
    />
  </>
  );
};

const Card = ({
    Icon,
    title,
    value,
    pillText,
    trend,
    description,
}: {
    Icon: IconType;
    title: string;
    value: string;
    pillText: string;
    trend: "up" | "down";
    description: string;
}) => {
    return <div className='p-4 grid col-span-4 rounded bg-stone-200 items-center'>
        <Icon className='text-stone-900'size={100} />
        <div className='flex items-center'>
            <h3 className='text-stone-500 text-sm'>{title}</h3>
            
            <span className={`text-xs m-2 flex items-centre gap-1 font-medium px-2 py-1 rounded ${
                trend === "up"
                ? " bg-green-100 text-green-700 "
                : " bg-red-100 text-red-700 "
                }`}>
                    {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>
        </div>
        <p className='text-3xl font-bold'>{value}</p>
        <p className='text-xs py-2 text-stone-500'>{description}</p>
    </div>
};

export default StatCards