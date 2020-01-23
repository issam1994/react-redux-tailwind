import React from 'react';

export default function Sizes() {
    let sizes = [
        'XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'
    ];
    return (
        <div className="">
            <div className="mb-2 px-1 text-lg font-semibold">
                Sizes:
            </div>
            <div className="flex flex-wrap w-48">
                {sizes.map((s, i) =>
                    <div className="overflow-hidden w-10 h-10 mx-1 my-2 flex-none rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center text-xs cursor-pointer" key={i}>
                        <span>{s}</span>
                    </div>

                )}
            </div>
        </div>
    )
}