import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {

  const { data } = useLoaderData()

  return (
    <div>
      <section>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-none">Total
              <span className="dark:text-violet-400"> Quiz</span>
            </h1>
          </div>
          <div className="flex items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://cdn.woorise.com/wp-content/uploads/2020/10/quiz-maker-apps-tools.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 p-5'>
        {
          data.map(card => <Card key={card.id} card={card}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;




