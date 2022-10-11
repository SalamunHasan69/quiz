import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to='/'
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <h3 className="dark:text-violet-400 text-2xl font-bold leading-none sm:text-3xl">Start Quiz</h3>
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink to='/rechart'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Rechart
              </NavLink>
            </li>
            <li className="flex">
              <NavLink to='/blog'
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;