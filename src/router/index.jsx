import React from 'react'
//importing views
import Home from '../views/Home'
import Counter from '../views/Counter'
import About from '../views/About'
import Shop from '../views/Shop'
import Gallery from '../views/Gallery'
import Form from '../views/Form'
//router imports
import {Switch, Route, useLocation } from 'react-router-dom';
//react-spring
import { useTransition, animated } from 'react-spring'

//animated routes
const AnimatedViews = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { marginLeft: '50px' },
    enter: { marginLeft: '0' },
    leave: {position: 'absolute', opacity: 0 },
  });
  return transitions.map(({ item, props, key }) =>
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/shop" component={Shop} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
      </Switch>
    </animated.div>)
}

export default AnimatedViews;