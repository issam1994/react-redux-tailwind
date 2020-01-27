import React from 'react';

function About() {
    return (
        <div className=" max-w-2xl mx-auto text-center text-gray-700 text-lg px-4">
            <h1 className="text-3xl font-semibold">About Page</h1>
            <hr className="mb-4 mt-2 max-w-sm border-blue-600 mx-auto" />
            <p>This React app is for demonstartion purposes.</p>
            <p>It was built with <b>Redux (state management), React Router (pagination) & React-spring (animations).... & more</b></p>
        </div>
    );
}

export default About;
