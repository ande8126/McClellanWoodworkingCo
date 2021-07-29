import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <h1>McClellan Woodworking Co.</h1>
            <Link to='/'>Home</Link>
            <Link to='/works'>See the work</Link>
            <Link to='/inquiry'>Make an inquiry</Link>
            <Link to='/about'>About</Link>
        </>
    )
}

export default Nav
