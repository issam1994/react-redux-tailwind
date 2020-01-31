import React, {useState, useEffect} from 'react'

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
            } catch(e) {
                console.log("failed to fetch images on mounted..", e);
                fetchImages();
            }
        }
        fetchImages();
    }, []);
    return (
        <div className="px-2 column-count-1 sm:column-count-2 md:column-count-3 lg:column-count-4 transition">
            {images.map((image, i) => (<div key={i} className="border transition hover:scale" style={i === 5 ? {height: '400px'} : {}}>
                <img className="object-cover h-full hover:shadow-2xl" src={image.url} alt={image.url} />
            </div>))}
        </div>
    )
}