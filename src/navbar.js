import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return <div className='bg-primary'>
        <nav className='navbar navbar-expand-lg justify-content'>
            <div className='col-md-6'>
                <h1 className='text-light'>React Meal</h1>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link text-light" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default NavBar;