import React, { useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';


function Masterpage() {
    const navigate = useNavigate();
    useEffect(()=>{


    })
  
    return (
      <div >

        <h1>Masterpage</h1>
        <Link to='/connexion'><button > connexion</button> </Link>
        <Link to='/inscription'><button >Inscription</button></Link>
      </div>
    );
  }
  
  export default Masterpage;
  