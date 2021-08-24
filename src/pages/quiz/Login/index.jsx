import React from 'react'
import '../Signup/Signup.css'

const Login = () => {
    return (
        <div className="signUpLoginBoxQuiz">
            <div className="slContainer">
               <form className="form">
                   <input type="text" placeholder="pseudo" />
                   <input type="password" placeholder="mot de passe" />
                   <button type="submit" className="valide">Connection</button>
               </form>
            </div>
        </div>
    )
}

export default Login
