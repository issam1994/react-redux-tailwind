import React from 'react'
import {useDispatch} from 'react-redux';
import {increment} from '../../store/counter/actions'

export default function Display(props) {
    const dispatch = useDispatch();
    return (
        <div className="px-2">
           <button onClick={() => dispatch(increment())} className="px-8 py-3 bg-green-500 text-white rounded-lg shadow">Increment</button>
        </div>
    )
}