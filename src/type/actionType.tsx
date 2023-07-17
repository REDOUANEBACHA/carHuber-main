export type AppAction =
  | {
      type: 'ajouter';
      panier: number;
    }
  | {
      type: 'reduit';
      panier: number;
    }
  | {
      type: 'connecter';
      data: data;
    }
  | {
      type: 'deconnecter';
      data: data;
    };

export type User = {
  id:number,
  nam:string,
  email:string,
  
  }

  export type Achat = {
    id:number,
    id_user:number,
    nam_articl:string,
    prix:number
    
    }

export type data  = {
  user: User,
  achat : Achat
}


