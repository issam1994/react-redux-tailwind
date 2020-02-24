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
            <div className="absolute z-30 top-0 left-full bg-white border rounded p-1" >
                <div className="flex p-2">
                    <div className="flex-none w-12 h-12 bg-gray-600 rounded-full mr-2"></div>
                    <div className="">
                        <div className="font-semibold text-gray-800" style={{width: '15rem'}}>Issam Ait Ouahmane</div>
                        <div className=" text-xs text-gray-500">Web Developer</div>
                    </div>
                </div>
            </div>
            </CSSTransition>
        </div>
    )
}