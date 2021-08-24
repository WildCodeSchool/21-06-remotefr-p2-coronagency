import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import DarkModeToggle from './DarkModeToggle'

function Navbar() {
    return (   
        <div className="navbar">
            <Link to="/" className="link">INFOS</Link>
            <Link to="/graphiques" className="link">GRAPHIQUES</Link>
            <Link to="/centres" className="link">CENTRES DE VACCINATION</Link>
            <Link to="/quizz" target="_blank" className="link">QUIZZ</Link>
            <button className="darkmodbutton"><DarkModeToggle/></button>


        </div>
    )
}

export default Navbar