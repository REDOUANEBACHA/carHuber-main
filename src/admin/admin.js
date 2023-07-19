
import React, { useEffect, useState } from 'react';
import '../style/style.css'

import  {auth} from '../firebas/farebaseConfigue'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Test from './test';
import Cards from '../compenent/cards';


function Admin() {
    const navigate = useNavigate();
    const [usersassion , setUserSession] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
          if(user){ setUserSession(user) 
          }
          else{ navigate('/connexion')
          }
        })
  },[])

  return usersassion === null ? 
    (<div > 
      ...login
    </div>)
   : 
    (<div>   
   
        <h1 className='text-white text-s font-bold'> Admin</h1> 
        <Test/>
        <Cards/>
        <h1>{}</h1>
  </div>);
}



export default Admin;
