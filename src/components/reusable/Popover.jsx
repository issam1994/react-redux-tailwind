import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Popover() {
    const [show, setShow] = useState(false)
    return (
        <div className="relative rounded text-lg text-left font-normal">
            {show && <div className="fixed inset-0 bg-transparent" onClick={() => setShow(false)}></div>}
            {/* trigger value */}
            <div className="flex border shadow-sm rounded-full px-3 py-1 cursor-pointer" onClick={() => setShow(!show)}>
                click me
            </div>
            {/* list of values */}
            <CSSTransition in={show} timeout={200} classNames="alert" unmountOnExit>
            <div className="absolute z-30 top-0 right-0 bg-white border rounded p-1 overflow-hidden" >
                popover content goes here !!
            </div>
            </CSSTransition>
        </div>
    )
}