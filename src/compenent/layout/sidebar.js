import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategorie } from '../../action/action.tsx';

function Sidebar() {
  const state = useSelector((state) => state);
  const user = state?.data?.user || null;
  const categorie = state?.categorie || null;
  const dispatch = useDispatch()

  return (
    <div className="flex-none bg-gray-800 w-60 min-h-screen h-full text-white">
      <div className="flex items-center bg-pink-500">
        <FontAwesomeIcon icon={faUser} className="text-white text-xl mr-4 ml-4 my-5" />
        {user ? (
          <p>{user.name ? user.name : null} {user.prenom ? user.prenom : null}</p>
        ) : (
          <p>User not available</p>
        )}
      </div>
      {categorie && Object.keys(categorie).map((category, index) => (
        <div key={index} className="mt-5 mx-4">
          <p className="text-white font-bold mb-2">Catégorie {category}</p>
          <ul className="text-white">
            {categorie[category].map((item, itemIndex) => (
               <li  key={itemIndex} onClick={() => dispatch(selectCategorie(item))}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
