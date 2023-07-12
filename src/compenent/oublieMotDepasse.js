import React from 'react'
import { useState } from 'react';
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebas/farebaseConfigue';
import { useNavigate } from 'react-router-dom';

function OublieMotDepasse() {
    const [email , setEmail] = useState('');
    const [erreur , setErreur] = useState('');
    const [messageSucces,setMessageSucces] = useState('');
    const navigate = useNavigate();
    const msgError = erreur !== '' && <span>{erreur.message}</span>
    const [cronoRedirige , setCronoRedirige] = useState(0);    
    
    function incrementCounter() {
    setCronoRedirige(cronoRedirige++)
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
    <h1>Oublie le Mot De Passe </h1>
    <h2 className='messageSucces'>{messageSucces}</h2>
    <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={event =>setEmail(event.target.value)} required />
      <button type="submit">valider</button>
    <p>{msgError}</p>
    </form>

  </div>
  )
}

export default OublieMotDepasse