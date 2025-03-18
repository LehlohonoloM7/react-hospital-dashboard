import React from 'react'
import StatCards from "./StatCards";
import ActivityGraph from "./ActivityGraph";
import BottomTable from "./BottomTable";
import UsageRaider from './UsageRaider';

function Grid() {
  return (
    <div className='p-4 grid gap-3 grid-cols-12 pb-0'>
        <ActivityGraph/>
        <UsageRaider/>
        <StatCards/>
        <BottomTable/>
    </div>
  )
};

export default Grid