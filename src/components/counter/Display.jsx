import React from 'react'
import {useSelector} from 'react-redux'

export default function Display(props) {
    const counter = useSelector(state => state.counter)
    return (
        <div className="text-2xl text-center font-bold text-red-600">
            {counter}
        </div>
    )
}