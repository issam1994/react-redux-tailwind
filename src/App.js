import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/Nav'
import AnimatedViews from './router/index'


//Root Component
function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Nav />
        <hr className="mb-6 w-3/4" />
        <AnimatedViews />
      </div>
    </Router>
  );
}
export default App;
