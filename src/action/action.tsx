import { data } from "../type/actionType"

export const ajouter =()=> { return { type :'ajouter'} }
export const reduit =()=>  { return { type :'reduit'}  }
export const connecter =(data:data)=>  { return { type :'connecter'  , data:data}  }
export const deconnecter  =()=>  { return { type :'deconnecter'}  }