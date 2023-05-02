import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";
  

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{props.title}</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    {   props.showCurrentDate ?
                        <li className="nav-item">
                            <a className="nav-link" href="#"><b>( {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })} )</b></a>
                        </li>:''
                    }
                </ul>
            </div>
        </nav>
    )
}

// Default prop _ set value when no value is passed to component as a prop
Header.defaultProps = {
    title:"Recipe Listing Application",
    showCurrentDate: true
}

// PropType _ used to set prop type string , boolean , integer
Header.prototype = {
    title : PropTypes.string.isRequired,
  }  
  