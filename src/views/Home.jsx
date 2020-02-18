import React from 'react'
import CheckBox from '../components/reusable/CheckBox'
import Select from '../components/reusable/Select'
import Popover from '../components/reusable/Popover'

const Home = () => {
    return (
        <div className="text-center text-2xl font-thin min-h-screen">
            <div className="relative line-under font-semibold text-gray-700">CheckBox</div>
            <div className="flex justify-center py-4">
                <CheckBox />
            </div>
            <div className="relative line-under font-semibold text-gray-700">Select</div>
            <div className="flex justify-center py-4">
                <Select />
            </div>
            <div className="relative line-under font-semibold text-gray-700">Popover</div>
            <div className="flex justify-center py-4">
                <Popover />
            </div>
        </div>
    );
}

export default Home