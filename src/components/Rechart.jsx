import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Rechart = () => {

  const loaderData = useLoaderData()

  return (
    <div>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Re<span className="dark:text-violet-400">chart</span>
        </h2>
        <LineChart data={loaderData} className='w-[500] h-[400]'>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;