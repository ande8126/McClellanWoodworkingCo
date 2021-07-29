import React from 'react';
//styling
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <h1>McClellan Woodworking Co.</h1>
            <div className="navBar">
                <ul>        
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/works'>See the work</Link></li>
                    <li><Link to='/inquiry'>Make an inquiry</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav
