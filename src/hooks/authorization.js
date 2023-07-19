import { useEffect, useState } from 'react';
import { auth } from '../firebas/farebaseConfigue';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function useAuthorization() {
  const navigate = useNavigate();
  const [usersession, setUserSession] = useState(null); 

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserSession(user);
      } else {
        setUserSession(null);
      }
    });
  }, []);

  return usersession;
}
