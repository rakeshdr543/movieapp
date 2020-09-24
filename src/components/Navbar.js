import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    const navStyle={
        color:'white'
        
    }
    return (
        <div>
        <nav>
        <Link to='/movieapp/' style={navStyle}>
        <h3 className='link-style'>Home</h3>
        </Link>
            
            <ul className='ul-items'>
            <Link to='/favourite' style={navStyle}>
            <li className='link-style'>
                    Favourites
                </li>
            </Link>
               
            </ul>
        </nav>
            
        </div>
    )
}

export default Navbar
