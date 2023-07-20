import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inscription from '../auth/inscription';
import Connexion from '../auth/connexion';
import Masterpage from '../masterpage/Masterpage';
import Erreur from '../pageErreur/Erreur';
import Dashboard from '../page/dashboard';
import OublieMotDepasse from '../auth/oublieMotDepasse';
import Deconnexion from '../auth/deconnexion';
import Header from '../compenent/layout/Header'
function RouterAll() {

  return (
    <Router>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Masterpage />} />
      <Route path="/Deconnexion" element={<Deconnexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/OublieMotDepasse" element={<OublieMotDepasse />} />
        <Route  path="*" element={<Erreur />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default RouterAll;
