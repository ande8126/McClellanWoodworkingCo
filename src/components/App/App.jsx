//IMPORTS
//styling
import './App.css';
//components
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import SeeTheWork from '../SeeTheWork/SeeTheWork';
import About from '../About/About';
import MakeInquiry from '../MakeInquiry/MakeInquiry';
import Contact from '../Contact/Contact';
//tools
import { Fragment, useEffect, useRef, useState } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';


function App() {
  //for sticky nav bar
  const [ isSticky, setSticky ] = useState( false );
  const ref = useRef( null );
  const handleScroll = () =>{
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener( 'scroll', ()=> handleScroll );
    };
  }, [] );

  console.log( ref, ref.current, isSticky );


  return (
    <>
      <Router>
        <div className = {`sticky-wrapper${isSticky ? ' sticky' : '' }`} ref={ref}>
          <Nav/>
        </div>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/works'>
          <SeeTheWork />
        </Route>
        <Route exact path='/inquiry'>
          <MakeInquiry />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Router>
    </>
  );
}

export default App;
