import React from 'react'
import {useDispatch} from 'react-redux';
import {decrement} from '../../store/counter/actions'

export default function Display(props) {
    const dispatch = useDispatch();
    return (
        <div className="px-2">
           <button onClick={() => dispatch(decrement())} className="px-8 py-3 bg-green-500 text-white rounded-lg shadow">Decrement</button>
        </div>
    )
}