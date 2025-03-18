import React from 'react';

function BottomTable() {
  return (
    <div className='col-span-12 p-4 rounded border border-stone-300 overflow-y-scroll h-3/6 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-300
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
        <div className='mb-4 flex items-center justify-between'>
            <h3 className='flex items-center gap-1.5 font-bold'>
                Diagnosis List
            </h3>
        </div>
        <table className='w-full table-auto'>
            <TableHead/>
            <tbody>
                <TableRow
                    sku="Hypertension"
                    description="Chronic high blood pressure"
                    status="Under under observation"
                    order={1}
                />
                <TableRow
                    sku="Type 2 Diabetes"
                    description="Insulin resistance and elevated blood sugar"
                    status="Cured"
                    order={2}
                />
                <TableRow
                    sku="Asthma"
                    description="Recurrent episodes of bronchial construction"
                    status="Inactive"
                    order={3}
                />
                <TableRow sku="Hyperlipidemia"
                    description="Elevated levels of lipids in the blood" 
                    status="Under treatment"
                    order={4} 
                />

                <TableRow sku="Chronic Kidney Disease" 
                    description="Gradual loss of kidney function" 
                    status="Stable" 
                    order={5} 
                />

                <TableRow sku="Osteoporosis" 
                    description="Weakening of bones due to calcium loss" 
                    status="Under observation" 
                    order={6} 
                />

                <TableRow sku="Rheumatoid Arthritis" 
                    description="Autoimmune disease causing joint inflammation" 
                    status="Active" 
                    order={7} 
                />

                <TableRow sku="COPD" 
                    description="Chronic obstructive pulmonary disease" 
                    status="Severe" 
                    order={8} 
                />
            </tbody>
        </table>
    </div>
  );
};

const TableHead = () => {
    return ( 
        <thead>
        <tr className='text-sm font-normal text-stone-500 '>
            <th className='text-start p-1.5'>Problem/Diagnosis</th>
            <th className='text-start p-1.5'>Description</th>
            <th className='text-start p-1.5'>Status</th>
        </tr>
    </thead>
    );
};

const TableRow = ({
    sku,
    description,
    status,
    order,
}: {
    sku: string;
    description: string;
    status: string;
    order: number;

}) => {
    return (
    <tr className={order % 2 ? "bg-stone-300 text-sm" : "text-sm"}>
        
        <td className='p-1.5'>{sku}</td>
        <td className='p-1.5'>{description}</td>
        <td className='p-1.5'>{status}</td>
    </tr>
    );
};

export default BottomTable