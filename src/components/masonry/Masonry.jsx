import React, { useState, useEffect } from 'react'

export default function Masonry() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchImages = async () => {
            try {
                let terms = ['nature', 'girl', 'mountains', 'laugh', 'beautiful', 'handsome', 'happy', 'cat', 'sea', 'beach', 'bike', 'car', 'dog', 'birds', 'tech', 'art', 'science', 'redhead,girl', 'desert,sun', 'space', 'camel', "dog,cat", "fish", "food", "street", "music", "night", "sport", "marriage", 'vacation']
                setImages(terms.map(e => ({ src: "https://source.unsplash.com/800x900/?" + e, query: e })))
            } catch (e) {
                console.log("failed to fetch images on mounted..", e);
            }
        }
        fetchImages();
    }, []);
    return (
        <div className="px-2 column-count-1 sm:column-count-2 md:column-count-3 lg:column-count-4 transition">
            {images.map((image, i) => (<div key={i} className="my-2 border transition" style={i > 2 && i < 8 ? { height: `${i}00px` } : {}}>
                <img className="object-cover object-center h-full hover:shadow-2xl" src={image.src} alt={image.query} />
            </div>))}
        </div>
    )
}