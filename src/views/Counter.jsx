import React from 'react';
import Display from '../components/counter/Display'
import Increment from '../components/counter/Increment'
import Decrement from '../components/counter/Decrement'

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
