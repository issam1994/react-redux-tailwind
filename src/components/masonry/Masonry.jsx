import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Masonry() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            console.log("fetching..")
            try {
                console.log("fetching images...")
                let res = await fetch('http://www.splashbase.co/api/v1/images/search?query=laptop');
                let data = await res.json()
                setImages(data.images)
            } catch {
                console.log("failed to fetch images on mounted..")
            }
        }
        fetchImages();
    }, []);
    return (
        <div className="flex flex-wrap justify-center masonry px-2">
            {images.map((image, i) => (<div key={i} className="masonry-item p-4 w-full md:w-1/3 lg:w-1/4 transition hover:scale">
                <img className="object-cover hover:shadow-2xl" src={image.url} alt="" />
            </div>))}
        </div>
    )
}