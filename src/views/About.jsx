import React from 'react';

function About() {
  return (
    <div className="text-center text-gray-700 text-lg">
      <h1 class="text-3xl font-semibold">About Page</h1>
      <hr class="mb-4 mt-2 w-1/3 border-blue-600 mx-auto"/>
      <p>
          This app is for demonstartion purposes.
      </p>
      <p>It was built with <b>Redux, React Router, Tailwindcss.</b></p>
    </div>
  );
}

export default About;
