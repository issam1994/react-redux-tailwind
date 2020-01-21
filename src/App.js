import React from 'react';
import Display from './components/Display'
import Increment from './components/Increment'
import Decrement from './components/Decrement'

function App() {
  return (
    <div className="App pt-8">
      <Display />
      <div className="flex justify-center mt-8">
      <Decrement />
      <Increment />
      </div>
    </div>
  );
}

export default App;
