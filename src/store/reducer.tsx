import { createStore } from "redux";
import { AppAction} from "../type/actionType";
import { deleteLocalStorage, updateLocalStorage } from "./localstorage.tsx";
import { AppState, initialState } from "./state.tsx";


const reducer = (state: AppState = initialState, action: AppAction) => {

 if(localStorage.getItem('state'))  state =JSON.parse(localStorage.getItem('state') as AppState)

  switch (action.type) {
    case 'connecter':
      state = {
        ...state,
        data: action.data,
        connecter: true,
      };
      updateLocalStorage('state', state);
      return state;

    case 'ajouter':
      state = {
        ...state,
        panier: state.panier + 1,
      };
      updateLocalStorage('state', state);
      return state;

    case 'reduit':
      state = {
        ...state,
        panier: state.panier - 1,
      };
      updateLocalStorage('state', state);
      return state;

    case 'deconnecter':
      state = {
        ...state,
        panier: 0,
        connecter: false,
        data: null,
      };
      deleteLocalStorage('state');
      return state;

    default:
      return state;
  }
};

export const store = createStore(reducer);
