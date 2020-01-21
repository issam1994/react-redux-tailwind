import React from 'react';
import Display from '../components/Display'
import Increment from '../components/Increment'
import Decrement from '../components/Decrement'

function Counter() {
  return (
    <div>
      <Display />
      <div className="flex justify-center mt-8">
      <Decrement />
      <Increment />
      </div>
    </div>
  );
}

export default Counter;
