import { Link } from 'react-router-dom';

function Masterpage() {
    return (
      <div >

        <h1>Masterpage</h1>
        <Link to='/connexion'><button > connexion</button> </Link>
        <Link to='/inscription'><button >Inscription</button></Link>
      </div>
    );
  }
  
  export default Masterpage;
  