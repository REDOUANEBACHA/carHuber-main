//rfces
import React , { useEffect  , useState } from 'react'
import { Link  , useNavigate} from 'react-router-dom';
import { auth } from "../firebas/farebaseConfigue";
import { signOut } from 'firebase/auth';
import '../style/style.css'
import { useDispatch } from 'react-redux';
import { deconnecter } from '../action/action.tsx';

function Deconnexion() {
    const [logout , setLogout] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{
     if(logout)
     {     
        signOut(auth).then(() => {
          dispatch(deconnecter())
           navigate('/connexion')
          //  console.log(logout)
        }).catch((error) => {
            // console.log('err')
        });
      }
    },[logout])

    const deconnexion = (event)=>{
        setLogout(true)};

    return (
        <button className="logout-button" onClick={deconnexion}>
          Déconnexion
        </button>
      );
    };

export default Deconnexion