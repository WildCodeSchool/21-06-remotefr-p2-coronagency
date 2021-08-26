import React, { useState } from 'react';
import './Signup.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const test = (data) => {
    alert(JSON.stringify(...data));
  };

  let history = useHistory();
  const { register, handleSubmit, handleChange } = useForm();
  const [formAll, setFormAll] = useState({
    name: '',
    email: '',
    password: '',
  });

  const createUser = (data) => {
    axios
      .post(
        'https://cors-anywhere.localhost:8000/api/users',
        {
          method: 'POST', // The method
          mode: 'no-cors', // It can be no-cors, cors, same-origin
          credentials: 'same-origin', // It can be include, same-origin, omit
          headers: {
            'Content-Type': 'application/json', // Your headers
          },
        },
        { ...data }
      )
      .catch(function (err) {
        console.log('error');
      })
      .then(console.log('success'));
  };

  const validation = () => {
    history.push('/quizz');
  };

  const next = () => {
    createUser();
    validation();
  };

  //   const handleChange = (event) => {
  //     setFormAll({ ...formAll, [event.target.name]: event.target.value });
  //   };
  return (
    <div className="signUpLoginBoxQuiz">
      <div className="slContainer">
        <form className="form" onSubmit={handleSubmit(createUser)}>
          <div className="form-username">
            <label name="name">Choisir un nom d'utilisateur</label>
            <input className="input"
              {...register('name', { required: true })}
              placeholder="johndoe"
              name="name"
              onChange={handleChange}
            />
            <label className="label" name="username">Confirmer votre nom d'utilisateur</label>
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
            <label name="password">Confirmer votre mot de passe</label>
            <input
              {...register('password', { required: true })}
              name="password"
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
