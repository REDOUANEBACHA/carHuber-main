export const ajouter =()=> { return { type :'ajouter'} }
export const reduit =()=>  { return { type :'reduit'}  }
export const connecter =(user)=>  { return { type :'connecter'  , user:user}  }
export const deconnecter  =()=>  { return { type :'deconnecter'}  }