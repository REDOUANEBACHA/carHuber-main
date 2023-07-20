import React from 'react'
import { useState } from 'react';
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebas/farebaseConfigue';
import { useNavigate } from 'react-router-dom';
import Auth from '../compenent/layout/auth';
import { useAuthorization } from '../hooks/authorization';

function OublieMotDepasse() {
  const authorization = useAuthorization()
  const navigate = useNavigate();
  return  authorization ===null ?
  (
    <Auth>
    <Forgetpassword/>
    </Auth>
  )
  :
  (
    navigate('/Dashboard')
  )
}

function Forgetpassword ()
{
  const [email , setEmail] = useState('');
  const [erreur , setErreur] = useState('');
  const [messageSucces,setMessageSucces] = useState('');
  const navigate = useNavigate();
  const msgError = erreur !== '' && <span>{erreur.message}</span>
  const [cronoRedirige , setCronoRedirige] = useState(0);    
  
  function incrementCounter() {
  setCronoRedirige((prevValue) => prevValue + 1)
  console.log("on va vous redirigez vers a la page de connexion apres 5S:", cronoRedirige);
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      sendPasswordResetEmail(auth, email)
      .then((succes) => {
      setErreur('');
      setMessageSucces('verifier votre Email')
      const intervalId = setInterval(incrementCounter, 1000);
      setTimeout(()=>{ 
          clearInterval(intervalId);
          console.log("Interval stopped.");
          navigate('/connexion') ;
      },4000)     
      })
      .catch((error) => {
      setErreur(error);
      });
    }
  return (
    <div className="connexion-container">
    <div className="flex items-center mb-4 ml-80">
      <img src="icons/forgetpassword.png" alt="Icon" className="w-6 h-6 mr-2" />
        <div>
          <h1 className="text-3xl text-center font-semibold">oublie le Mot De passe</h1>
          <hr className="w-20 h-1 bg-pink-500 border-1 rounded dark:bg-pink-498" />
        </div>
      </div>
    <h2 className='messageSucces  mx-2"'>{messageSucces}</h2>
    <form onSubmit={handleSubmit} >
      <label htmlFor="email" className='block text-xl font-semibold flex items-cente' >Email:  <p className="text-pink-500 mx-2">*</p></label>
      <input type="email" id="email" name="email" value={email} onChange={event =>setEmail(event.target.value)} required />
      <button type="submit">valider</button>
    <p>{msgError}</p>
    </form>
  </div>
  )
}
export default OublieMotDepasse