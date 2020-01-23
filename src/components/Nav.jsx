import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="flex justify-center font-semibold text-lg text-white bg-blue-500">
            <Link to="/">
                <div className="px-4 py-4 hover:bg-white hover:text-gray-800 cursor-pointer">Home</div>
            </Link>
            <Link to="/counter">
                <div className="px-4 py-4 hover:bg-white hover:text-gray-800 cursor-pointer">Counter</div>
            </Link>
            <Link to="/about">
                <div className="px-4 py-4 hover:bg-white hover:text-gray-800 cursor-pointer">About</div>
            </Link>
        </div>
    );
}

export default Nav;
