import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inscription from '../compenent/Inscription';
import Connexion from '../compenent/Connexion';
import Masterpage from '../masterpage/Masterpage';
import Erreur from '../pageErreur/Erreur';
import Admin from '../admin/admin';
import OublieMotDepasse from '../compenent/oublieMotDepasse';

function RouterAll() {
  //
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Masterpage />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/OublieMotDepasse" element={<OublieMotDepasse />} />
        <Route  path="*" element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default RouterAll;
