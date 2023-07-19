
import '../style/style.css'
import React, { useState } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebas/farebaseConfigue';
import Auth from './auth';
import { useAuthorization } from '../hooks/authorization';

const Inscription = () => {
  const authorization = useAuthorization()
  const navigate = useNavigate();
  return authorization === null ?(
     <Auth>
        <FormeInscription/>
    </Auth>
  )
  :
  (
    navigate('/admin')
  );
};

function FormeInscription()
{
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
  return( 
    <div>
    <div className="flex items-center mb-4 ml-80">
    <img src="icons/inscription.png" alt="Icon" className="w-6 h-6 mr-2" />
      <div>
        <h1 className="text-3xl text-center font-semibold">Inscription</h1>
        <hr className="w-20 h-1 bg-pink-500 border-1 rounded dark:bg-pink-498" />
      </div>
    </div>
    <h3>{msgError}</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className='block text-xl font-semibold flex items-cente'>Username:  <p className="text-pink-500 mx-2">*</p></label>
      <input
        type="text"
        id="id"
        name="id"
        value={loginData.username}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="email" className='block text-xl font-semibold flex items-cente' >Email:  <p className="text-pink-500 mx-2">*</p></label>
      <input
        type="email"
        id="email"
        name="email"
        value={loginData.email}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="password" className='block text-xl font-semibold flex items-cente' >Password:  <p className="text-pink-500 mx-2">*</p> </label>
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
    <Link to="/connexion" className="text-blue-500 hover:underline">
    Connexion
          </Link>
  </div>
  )
}

export default Inscription;
