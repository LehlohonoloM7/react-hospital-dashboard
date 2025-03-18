"use client";
import { FaAngleDown } from "react-icons/fa6";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Oct 2023',
    Diastotic: 4000,
    Systotic: 2400,
    amt: 2400,
  },
  {
    name: 'Nov 2023',
    Diastotic: 3000,
    Systotic: 1398,
    amt: 2210,
  },
  {
    name: 'Dec 2023',
    Diastotic: 2000,
    Systotic: 9800,
    amt: 2290,
  },
  {
    name: 'Jan 2024',
    Diastotic: 2780,
    Systotic: 3908,
    amt: 2000,
  },
  {
    name: 'Feb 2024',
    Diastotic: 1890,
    Systotic: 4800,
    amt: 2181,
  },
  {
    name: 'Mar 2024',
    Diastotic: 2390,
    Systotic: 3800,
    amt: 2500,
  },
];

{/** N:B const data (dummy data) */}

function ActivityGraph() {
  return (
    <div className='col-span-8 overflow-hidden rounded '>
        <div className='p-4 col-span-8 bg-purple-200 '>
            <h3 className='flex gap-1.5 font-semibold justify-between items-centre'>
                Blood Pressure
                <p className="flex gap-2 text-sm items-center font-normal">Last 6 months<FaAngleDown className="hover:text-stone-500" /></p>
            </h3>
            <div className="h-72 p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Systotic" stroke="#ff0054" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Diastotic" stroke="#7209b7" />
        </LineChart>
      </ResponsiveContainer>
      
      </div>
        </div>
        {/* TODO Our Graph Live charts API */}

        {/*<ResponsiveContainer>
        
        <ResponsiveContainer/> */}
        
    </div>
  );
}; 

export default ActivityGraph