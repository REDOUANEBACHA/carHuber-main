import { createStore } from "redux";
import { User } from "../type/userType";

type appAction = {
  type :'ajouter' ,
  stock : number , 

}
|
{
  type : 'reduit' ,
  stock : number

}
| 
{
  type : 'connecter',
  user : User;
}
| 
{
  type : 'deconnecter',
  user : User;
}





const initialstate  =  
{
  panier : 0 as number  ,
  user : null as User | null,
  connecter : false  as boolean
}
type appState = typeof  initialstate

const reducer = (state : appState  = initialstate , action :appAction ) =>{

  switch (action.type)
  {
  case 'ajouter' :
     return {...state , panier : state.panier +1}
  case 'reduit' : 
     return {...state , panier : state.panier -1}  
  case 'connecter' :
    return {...state  ,user:action.user , connecter : true}  
    case 'deconnecter' :
    return {...state , connecter : false , user:null} 
  default : return state ;
}

}

export const store = createStore(reducer)
