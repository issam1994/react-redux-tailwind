import React from 'react';
import Nav from './components/Nav'
import Counter from './views/Counter'
import About from './views/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = () => (<div class="text-center text-2xl font-thin">Home Page</div>);
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <hr className="mb-6" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
