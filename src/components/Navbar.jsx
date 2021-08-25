import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import DarkModeToggle from './DarkModeToggle'
import Darkmod from './Darkmod'

function Navbar() {
    return (   
        <div className="navbar">
            <Link to="/" className="link">INFOS</Link>
            <Link to="/graphiques" className="link">GRAPHIQUES</Link>
            <Link to="/centres" className="link">CENTRES DE VACCINATION</Link>
            <Link to="/quizz" target="_blank" className="link">QUIZZ</Link>
            {/* <button className="darkmodbutton"><DarkModeToggle/></button> */}
             <button className="darkmodbutton"><Darkmod/></button>

        </div>
    )
}

export default Navbar