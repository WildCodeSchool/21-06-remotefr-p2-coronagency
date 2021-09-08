import React, { useState } from 'react';
import './Signup.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  // unfinished feature

  let history = useHistory();
  
  const { register, handleSubmit } = useForm();
  const [formAll, setFormAll] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormAll({ ...formAll, [event.target.name]: event.target.value });
  };

  let config = {
    mode:"cors",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }

  return (
    <div className="signUpLoginBoxQuiz">
      <div className="slContainer">
        <form className="form" onSubmit={handleSubmit()}>
          <div className="form-username">
            <label name="name">Choisir un nom d'utilisateur</label>
            <input
              {...register('name', { required: true })}
              placeholder="johndoe"
              name="name"
              onChange={handleChange}
            />
            <label name="name-conf">Confirmer votre nom d'utilisateur</label>
            <input
              {...register('name', { required: true })}
              placeholder="johndoe"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label name="email">Entrer votre e-mail</label>
            <input
              {...register('email', { required: false })}
              placeholder="johndoe@contact.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-password">
            <label name="password">Choisir un mot de passe</label>
            <input
              {...register('password', { required: true })}
              name="password"
              onChange={handleChange}
            />
            <label name="password-conf">Confirmer votre mot de passe</label>
            <input
              {...register('password', { required: true })}
              name="password"
              onChange={handleChange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
