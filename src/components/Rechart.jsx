import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Rechart = () => {

  const data = useLoaderData().data
  console.log(data);

  return (
    <div className="container flex flex-col justify-center mx-auto ">
      <h2 className="mb-12 text-4xl p-4 font-bold leading-none text-center sm:text-5xl">
        Re<span className="dark:text-violet-400">chart</span>
      </h2>
      <LineChart
        width={300}
        height={300}
        data={data}
        margin={
          {
            top: 5,
            bottom: 30,
          }
        }
      >
        <Line
          type="monotone"
          stroke="#82ca9d"
          dataKey="total"
        />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Rechart;