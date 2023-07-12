import { Link , useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebas/farebaseConfigue";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { connecter  } from '../action/action.tsx'
import axios from "axios";
function Connexion() {

  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [erreur ,setErreur] = useState('');
  const msgError = erreur !== '' && <span>{erreur.message}</span>
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const handleSubmit =  (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(user => {
      setPassword('')
      setEmail('')
      setErreur('')
      axios.post(`http://localhost:1000/users/${email}`)
      .then( data => 
        dispatch(connecter(usedata(data))))
      .catch(err=> console.log(err))
      navigate('/admin')
      
    })
    .catch(error => {
      setErreur(error)
   
    });

  }

    return (
      <div className="connexion-container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={event =>setEmail(event.target.value)} required />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password}  onChange={event =>setPassword(event.target.value)} required />
  
          <button type="submit">Se connecter</button>
        <Link to='/Inscription' ><p>Inscription</p></Link>
        <p>{msgError}</p>
        </form>
    
      </div>
    );
  }

   
  function usedata(data)
  {
    return { id:data.data.data.id , nam:data.data.data.nam , email:data.data.data.email , password:data.data.data.password }
  }
  
  export default Connexion;
  