import React, { useState } from 'react'
import Svg from './Svg'
import {mdiChevronDown} from '@mdi/js'
import {CSSTransition} from 'react-transition-group'

export default function Select() {
    const [selected, setSelected] = useState("Brad")
    const [show, setShow] = useState(false)
    const list = ['Brad', 'Jimmy', 'chuck']
    const selectedStyle = (value) => {
        if(selected !== value){
            return {}
        }
        return ({
            fontWeight: "bold",
            backgroundColor: "#38a169",
            color: 'white'
        })
    }
    return (
        <div className="relative rounded text-lg text-left font-normal">
            {show && <div className="fixed inset-0 bg-transparent" onClick={() => setShow(false)}></div>}
            {/* current value */}
            <div className="flex border shadow-sm rounded-lg cursor-pointer"  onClick={() => setShow(true)}>
            <div className="flex-auto px-3 py-1">{selected}</div>
            <div className="w-8 h-8 mx-3 fill-current">
            <Svg path={mdiChevronDown} />
            </div>
            </div>
            {/* list of values */}
            <CSSTransition in={show} timeout={200} classNames="alert" unmountOnExit>
            <div className="absolute z-30 top-0 inset-x-0 w-full bg-white border rounded p-1 overflow-hidden" >
                {list.map((item, i) => <div key={i} className="cursor-pointer px-1 hover:bg-gray-200 rounded" onClick={() => { setSelected(item); setShow(false) }} style={selectedStyle(item)}>{item}</div>)}
            </div>
            </CSSTransition>
        </div>
    )
}