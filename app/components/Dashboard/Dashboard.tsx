import React from 'react';
import Grid from "./Grid";

export const Dashboard = () => {
  return (
    <div className ='rounded-lg bg-stone-100 shadow items-center p-4 w-3/4 mt-12 pb-0 h-4/5'>
      <div className='col-span-3'>
                  <h3 className='flex font-bold text-xl'>
                      Diagnosis History
                  </h3>
              </div>
      <Grid/>
    </div>
  );
};
