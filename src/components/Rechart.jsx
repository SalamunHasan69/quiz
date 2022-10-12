import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Rechart = () => {

  const data = useLoaderData().data

  return (
    <div>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Re<span className="dark:text-violet-400">chart</span>
        </h2>
        <LineChart data={data}
          className='w-[500] h-[400]'>
          <Line type="monotone" stroke="#82ca9d" />
          <XAxis dataKey={data.total} />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;