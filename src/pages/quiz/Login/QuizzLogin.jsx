import React from 'react'
import { Link } from 'react-router-dom'
import '../Signup/Signup.css'

const Login = () => {
    return (
        <div className="signUpLoginBoxQuiz">
            <div className="slContainer">
               <form className="form">
                   <input type="text" placeholder="pseudo" />
                   <input type="password" placeholder="mot de passe" />
                   <Link to={{pathname: "/quizz/start"}} className="valide">  Connexion</Link>
                   
                   
               </form>
            </div>
        </div>
    )
}

export default Login
