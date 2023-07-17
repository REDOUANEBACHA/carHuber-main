import { data } from "../type/actionType";


export const initialState = {
  panier: 0,
  data:null as data | null ,
  connecter: false,
};
export type AppState = typeof initialState;