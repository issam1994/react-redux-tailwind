import React, {useState} from 'react';

export default function CheckBox(props){
    const [value, setValue] = useState(false)
    return (
        <div className={"w-16 bg-gray-300 rounded-full cursor-pointer transition" + (value ? " bg-green-400" : "")} onClick={() => setValue(!value)}>
            <div className={"bg-white w-8 h-8 rounded-full shadow transition" + (value ? " ml-8" : "")}></div>
        </div>
    )
}