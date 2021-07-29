//IMPORTS
//styling
import './App.css';
//components
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import SeeTheWork from '../SeeTheWork/SeeTheWork';
import About from '../About/About';
//tools
import {HashRouter as Router, Route} from 'react-router-dom';
import MakeInquiry from '../MakeInquiry/MakeInquiry';

function App() {
  return (
    <>
      <Nav />
      <Router>
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
      </Router>
    </>
  );
}

export default App;
