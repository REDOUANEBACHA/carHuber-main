
import React, { useEffect, useState } from 'react';
import  {auth} from '../firebas/farebaseConfigue'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Test from './test';
import AppLayout from '../compenent/layout/applayout';


function Dashboard() {
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
    (   
      <AppLayout>
       <div>
       <Test/>
        <h1>{}</h1>
       </div>
      </AppLayout>
 );
}



export default Dashboard;
