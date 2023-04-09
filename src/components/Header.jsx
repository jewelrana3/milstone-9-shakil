import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './Header'

const Header = () => {
    return (
        <div className='flex justify-between mx-6'>
            <Link to='/' className='inline-flex items-center'>
                <BoltIcon className='h-6 w-6 text-blue-300 mr-3' />
                <span className='text-xl font-bold text-gray-800'>Next Page</span>
            </Link>
           {/* nav link */}

           <ul className='items-center hidden lg:flex space-x-8'>
                <li>
                    <NavLink to='/' className={({isActive})=> (isActive ? 'text-blue-400' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='books' className={({isActive})=> (isActive ? 'text-blue-400' : '')}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to='about' className={({isActive})=> (isActive ? 'text-blue-400' : '')}>
                        About
                    </NavLink>
                </li>
           </ul>
        </div>
    );
};

export default Header;