import React from 'react'
import CheckBox from '../components/reusable/CheckBox'

const Home = () => {
    return (
        <div className="text-center text-2xl font-thin">
            <div className="">CheckBox</div>
            <div className="flex justify-center py-4">
                <CheckBox />
            </div>
        </div>
    );
}

export default Home