import { Link , useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebas/farebaseConfigue";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { connecter, deconnecter  } from '../action/action.tsx'
import axios from "axios";
import Auth from "../compenent/layout/auth";
import { useAuthorization } from "../hooks/authorization";
import { usedata } from "../utils/data";

function Connexion() {
  const navigate = useNavigate();
  const auth = useAuthorization()
  if(auth)
  {
    navigate('/Dashboard')
  }
  return (
    <Auth>    
       <FormeConnexion />
    </Auth>  
  ) 
}
function FormeConnexion()
{
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [erreur ,setErreur] = useState('');
  const msgError = erreur !== '' && <span>{erreur.message}</span>
  const navigate = useNavigate();
  const dispatch = useDispatch() 
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setPassword('');
        setEmail('');
        setErreur('');
        axios
          .post(`http://localhost:1000/users/${email}`)
          .then((data) => {
            dispatch(connecter(usedata(data)));
            navigate('/Dashboard');
          })
          .catch((error)=>
            signOut(auth).then(() => {
              dispatch(deconnecter())
              setErreur(error)
               navigate('/connexion')
            })
          );
      })
      .catch((error) => {
        setErreur(error);
      });
  };
  return(
  <div className="connexion-container">
  <div className="flex items-center mb-4 ml-80">
  <img src="icons/connexion.png" alt="Icon" className="w-6 h-6 mr-2" />
  <div>
  <h1 className="text-3xl text-center font-semibold">Connexion</h1>
  <hr className="w-20 h-1 bg-pink-500 border-1 rounded dark:bg-pink-498" />
  </div>
  </div>
    <form onSubmit={handleSubmit} className="space-y-4">
    <label htmlFor="email" className="block text-xl font-semibold flex items-center">
          Email:
          <p className="text-pink-500 mx-2">*</p>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
         />
         <label htmlFor="password" className="block text-xl font-semibold flex items-center">
         Password:
         <p className="text-pink-500 mx-2">*</p>
         </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Se connecter
      </button>
      <Link to="/Inscription" className="text-blue-500 hover:underline ">
        Inscription
      </Link>
      <Link to="/OublieMotDepasse" className="text-blue-500 hover:underline ml-20">
        Oublie le mot de passe 
      </Link>
      <p className="text-red-500">{msgError}</p>
    </form>
  </div>
  )
} 
export default Connexion;
  