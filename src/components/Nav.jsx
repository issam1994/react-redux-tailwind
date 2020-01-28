import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    let pages = [
        { name: 'Home', path: '/' },
        { name: 'Counter', path: '/counter' },
        { name: 'Shop', path: '/shop' },
    ];
    let currentPath = useLocation().pathname
    return (
        <div className="flex justify-center items-center font-semibold text-lg text-gray-800 bg-white ">
            {pages.map((p, i) => <Link key={i} to={p.path}>
                <div className="px-4 py-4 hover:bg-gray-800 hover:text-white cursor-pointer" style={currentPath !== p.path ? {opacity: '.5'} : {}}>{p.name}</div>
            </Link>)}
            <Link to="/about" className="p-4 ml-auto flex items-center justify-center ">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white hover:bg-white hover:text-gray-800">?</div>
            </Link>
        </div>
    );
}

export default Nav;
