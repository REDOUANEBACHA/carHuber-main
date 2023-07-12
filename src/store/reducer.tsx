import { createStore } from "redux";
type appAction = {
  type :'ajouter' ,
  stock : number
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



export type User = {
id:number,
name:string,
email:string,
password:string

}

const initialstate  =  {
  test  : 'test',
  stock : 10 ,
  user : null as User | null,
  connecter : false 

}
type appState = typeof  initialstate

const reducer = (state : appState  = initialstate , action :appAction ) =>{

  switch (action.type)
  {
  case 'ajouter' :
     return {...state , stock : state.stock+1 }
  case 'reduit' : 
    return {...state , stock : state.stock -1}  

  case 'connecter' :
    return {...state , user: { id : 1 , name : 'red' , email:'r@aitelbache.com',password:'tassa'} , connecter : true}  
    case 'deconnecter' :
    return {...state , connecter : false , user:null} 
  default : return state ;
}

}

export const store = createStore(reducer)
