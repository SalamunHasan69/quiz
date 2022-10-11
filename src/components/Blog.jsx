import React from 'react';

const Blog = () => {
  return (
    <div>
      <section>
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">What is the purpose of react router?</summary>
              <div className="px-4 pb-4">
                <p>React Router is a standard library for routing in React</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How does context api works?</summary>
              <div className="px-4 pb-4">
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">What is useRef?</summary>
              <div className="px-4 pb-4 space-y-2">
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. React will set its .current property to the corresponding DOM node whenever that node changes.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;