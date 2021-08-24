import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div className="signUpLoginBoxQuiz">
            <div className="slContainer">
                <form className="form">
                    <input type='text'placeholder='Pseudo'></input>
                    <input type='email'placeholder='e-mail'></input>
                    <input type='email'placeholder='Confirmer e-mail'></input>
                    <input type='password'placeholder='Mot de passe'></input>
                    <input type='password'placeholder='Confirmer Mot de passe'></input>
                    <button type="submit" className="valide">Valider</button>
                </form>
            </div>
        </div>
    )
}

export default Signup