import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    let pages = [
        { name: 'Home', path: '/' },
        { name: 'Counter', path: '/counter' },
        { name: 'Shop', path: '/shop' },
    ];
    return (
        <div className="flex justify-center items-center font-semibold text-lg text-white bg-blue-500">
            {pages.map((p, i) => <Link key={i} to={p.path}>
                <div className="px-4 py-4 hover:bg-white hover:text-gray-800 cursor-pointer">{p.name}</div>
            </Link>)}
            <Link to="/about" className="p-4 ml-auto flex items-center justify-center ">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full text-white hover:bg-white hover:text-gray-800">?</div>
            </Link>
        </div>
    );
}

export default Nav;
