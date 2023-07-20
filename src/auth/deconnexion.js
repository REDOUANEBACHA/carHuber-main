//rfces
import React , { useEffect  , useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { auth } from "../firebas/farebaseConfigue";
import { signOut } from 'firebase/auth';
import '../style/style.css'
import { useDispatch } from 'react-redux';
import { deconnecter } from '../action/action.tsx';

function Deconnexion() {
    return (
    <ButtonDeconnexion/>
    );};

    function ButtonDeconnexion()
    {
      const [logout , setLogout] = useState(false)
      const navigate = useNavigate();
      const dispatch = useDispatch()
      useEffect(()=>{
       if(logout)
       {     
          signOut(auth).then(() => {
            dispatch(deconnecter())
             navigate('/connexion')
          }).catch((error) => {
          });
        }
      },[logout])
  
      const deconnexion = (event)=>{setLogout(true)};
      return (
        <button  onClick={deconnexion}>
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
     </svg>
   </button>
      )
    }

export default Deconnexion