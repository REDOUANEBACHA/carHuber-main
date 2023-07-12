
import '../style/style.css'
import React, { useState } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebas/farebaseConfigue';



const Inscription = () => {

  const [erreur , setError] = useState('');
  const msgError = erreur !== '' && <span>{erreur.message}</span>
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    id: ''
  });

  const handleInputChange = (event) => {
    setLoginData((prevState) => ({...prevState, [event.target.id]: event.target.value}));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,loginData.email,loginData.password)
    .then(user => {
      setLoginData({...loginData})
      setError('')
      navigate('/admin')
    })
    .catch(error => {
      setError(error)
      setLoginData({...loginData})
    });
 
  };

  return (
    <div>
      <h1>Inscription</h1>
      <h3>{msgError}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={loginData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          required
        />
          <button type="submit">Inscrire</button>
      </form>
      <Link to='/connexion'>Connexion</Link>
    </div>
  );
};

export default Inscription;
