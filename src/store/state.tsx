import { produit, data } from "../type/actionType";

export const initialState = {
  selectCategorie : 'Electronique',
  panier: 0,
  data:null as data | null ,
  connecter: false,
  produit : [] as produit[] ,
  categorie : [] as any []
};
export type AppState = typeof initialState;