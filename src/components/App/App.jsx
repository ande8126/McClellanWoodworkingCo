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
import {HashRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Nav />
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
