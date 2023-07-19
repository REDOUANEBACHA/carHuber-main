import React, { useEffect, useState } from 'react';
import '../style/style.css';
import Panier from './panier';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { auth } from '../firebas/farebaseConfigue';
import Deconnexion from '../auth/deconnexion';
import Profil from './profile';

function Header() {

  const [usersassion , setUserSession] = useState(null)
  useEffect(()=>{
      onAuthStateChanged(auth,user=>{
        if(user){ setUserSession(user) 
        }
        else{
          setUserSession(null)
        }
      })
},[])

return usersassion === null ? (
  <header className="bg-gray-800 py-0 px-1 flex items-center justify-between shadow-md">
  <div className="text-lg font-semibold">
  <img src="icons/logoheader.png" className="w-40 h-20 " alt="Logo" />
  </div>
</header>
) : (
  <header className="bg-gray-800 py-0 px-1 flex items-center justify-between shadow-md">
  <div className="text-lg font-semibold">
  <img src="icons/logoheader.png" className="w-40 h-20 " alt="Logo" />
  </div>
  <div className="flex items-center space-x-4">
  <Panier/>
  <Deconnexion/>
  <Profil/>
  </div>
</header>
);
}

export default Header;
