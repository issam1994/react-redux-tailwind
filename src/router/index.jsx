import React from 'react'
//importing views
import Home from '../views/Home'
import Counter from '../views/Counter'
import About from '../views/About'
import Shop from '../views/Shop'
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
        <Route path="/about" component={About} />
      </Switch>
    </animated.div>)
}

export default AnimatedViews;