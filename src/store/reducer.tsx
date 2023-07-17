import { createStore } from "redux";
import { AppAction } from "../type/actionType";
import {initialState, AppState } from "./state.tsx";

const reducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case 'ajouter':
      return { 
        ...state, 
        panier: state.panier + 1 };
    case 'reduit':
      return { 
        ...state, 
        panier: state.panier - 1 };
    case 'connecter':
      return {
        ...state, 
        data : action.data,
        connecter: true,
      };
    case 'deconnecter':
      return { 
        ...state, 
        connecter: false, 
        data: null };
    default:
      return state;
  }
};
export const store = createStore(reducer);
