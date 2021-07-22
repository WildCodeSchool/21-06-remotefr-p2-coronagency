import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
    
        <div className="navbar">
            <Link to="/" className="link">INFOS</Link>
            <Link to="/graphiques" className="link">GRAPHIQUES</Link>
            <Link to="/centres" className="link">CENTRES DE VACCINATION</Link>
            <Link to="/quizz" className="link">QUIZZ</Link>
            <button>Darkmod</button>
        </div>
    )
}

export default Navbar