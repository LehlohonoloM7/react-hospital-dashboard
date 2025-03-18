import React from 'react';
import { IconType } from 'react-icons/lib';
import { BsThreeDots } from "react-icons/bs";
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import routeImage1 from '@/public/Images/Layer 1.png';
import routeImage5 from '@/public/Images/Layer 5.png';
import routeImage4 from '@/public/Images/Layer 4.png';
import routeImage6 from '@/public/Images/Layer 6.png';
import jessicaImage from '@/public/Images/Jessica.png';
import routeImage7 from '@/public/Images/Layer 7.png';
import routeImage8 from '@/public/Images/Layer 8.png';
import routeImage9 from '@/public/Images/Layer 9.png';
import routeImage10 from '@/public/Images/Layer 10.png';
import routeImage12 from '@/public/Images/Layer 12.png';

export const RouteSelect = () => {
  return (
    <div className='space-y-2 '>
      {/* List of User Names using route */}
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Ryan Johnson" 
        imageSource={routeImage1} 
        subRoutes={[ 
          { title: 'Male 45' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Dylan Thompson" 
        imageSource={routeImage5} 
        subRoutes={[ 
          { title: 'Male 36' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Kevin Anderson" 
        imageSource={routeImage4} 
        subRoutes={[ 
          { title: 'Male 30' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Samantha John" 
        imageSource={routeImage6} 
        subRoutes={[ 
          { title: 'Female 56' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Jessica Taylor" 
        imageSource={jessicaImage} 
        subRoutes={[ 
          { title: 'Female 28' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Nathan Evans" 
        imageSource={routeImage7} 
        subRoutes={[ 
          { title: 'Male 58' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Emily Williams" 
        imageSource={routeImage8} 
        subRoutes={[ 
          { title: 'Female 18' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Tyler Davis" 
        imageSource={routeImage9} 
        subRoutes={[ 
          { title: 'Male 19' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Olivia Brown" 
        imageSource={routeImage10} 
        subRoutes={[ 
          { title: 'Female 32' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Ashley Martinez" 
        imageSource={routeImage12} 
        subRoutes={[ 
          { title: 'Female 54' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Joe Smith" 
        imageSource={routeImage4} 
        subRoutes={[ 
          { title: 'Male 46' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Abdul Mohamed" 
        imageSource={routeImage5} 
        subRoutes={[ 
          { title: 'Male 38' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Davit Walker" 
        imageSource={routeImage1} 
        subRoutes={[ 
          { title: 'Male 55' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Sian Carter" 
        imageSource={routeImage6} 
        subRoutes={[ 
          { title: 'Female 48' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Lucas Valencia" 
        imageSource={routeImage9} 
        subRoutes={[ 
          { title: 'Male 28' } 
        ]} 
      />
      <Route 
        Icon={BsThreeDots} 
        selected={true} 
        title="Steve Brown" 
        imageSource={routeImage7} 
        subRoutes={[ 
          { title: 'Male 60' } 
        ]} 
      />
    </div>
  );
};

const Route = ({ selected,
   title, 
   Icon, 
   imageSource, 
   subRoutes, 
  }: { 
  selected: boolean; 
  title: string; 
  Icon: IconType; 
  imageSource: StaticImageData; // Update the type to StaticImageData
  subRoutes: { title: string }[]; 
}) => {
  return (
    <div>
      <button className={`flex items-center w-full px-2 justify-between py-1.5 transition-[box-shadow,_background-color,_color] ${selected ? " text-stone-950 text-sm shadow-none hover:bg-green-200 bg-transparent hover:shadow " : " " }`} >
        <Image src={imageSource} alt="Route Image" width={36} height={36} />
        <span>{title}
          
        {subRoutes && (
        <div className="flex items-center justify-center">
          {subRoutes.map((subRoute, index) => (
            <p className=' items-center text-xs text-stone-500' key={index}>{subRoute.title}</p>
          ))}
        </div>
      )}
        </span>
        <Icon
          className={
            selected
              ? " hover:text-stone-500 "
              : "hover:"
          }
        />
      </button>
    </div>
  );
};