import React from 'react'

export default function Svg({path, size, ...rest}) {
    return (
        <svg viewBox='0 0 22 22'>
            <path d={path} />
        </svg>
    )
}