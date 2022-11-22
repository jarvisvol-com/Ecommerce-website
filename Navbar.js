import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <div className='nav-container'>
                <div id="brand-name">
                    <p className="brand-text">
                        HotBit
                    </p>
                </div>
                <div id="home-link">
                    <Link to="/"><div><p className='home-text'>Home</p></div></Link>
                </div>
                <div id="about-link" >
                    <Link to="/cart"><div><p className='about-text'>Cart</p></div></Link>

                </div>
                <div id="about-link" >
                    <Link to="/product"><div><p className='product-text'>Product</p></div></Link>

                </div>
                <div id='input-container'>
                    <input type="text" className="input-text"></input>
                    <button type="button" className="btn btn-success btn-size-of-search">Go</button>
                </div>
                <div className='welcome-container'>
                    <h1>
                        Welcome To HotBit
                    </h1>
                </div>
            </div>
        </div>
    )
}
