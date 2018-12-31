import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import Home from "./pages/Home/Home";
import Header from './components/Header'
import Range from './pages/Range/Range';
import Primes from "./pages/Primes/Primes";
import Factorial from './pages/Factorial/Factorial';
import Fibonacci from './pages/Fibonacci/Fibonacci'
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Container = ({ location }) => (
  <Wrapper>
    <Header location={location} />
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="slide"
      >
        <div>
          
          <div className='App'>
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/range' component={Range} />
              <Route exact path='/factorial' component={Factorial} />
              <Route exact path='/primes' component={Primes} />
              <Route exact path='/fib' component={Fibonacci} />
            </Switch>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);

const Wrapper = styled.div`
  .slide-enter {
    transform: translate(100%);
  }

  .slide-enter.slide-enter-active {
    transform: translate(0%);
    transition: transform 500ms ease-in-out;
  }

  .slide-exit {
    transform: translate(0%);
  }

  .slide-exit.slide-exit-active {
    transform: translate(-100%);
    transition: transform 500ms ease-in-out;
  }

  div.transition-group {
    position: relative;
  }
  
`;

export default withRouter(Container);
