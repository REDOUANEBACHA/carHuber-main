import React from 'react';
import { useSelector  , useDispatch} from 'react-redux';
import {ajouter  , reduit} from '../action/action.tsx'
export default function  Test() {
  const state =useSelector((state)=>state)
  const dispatch = useDispatch();
  const panier  =  useSelector((state)=>state.panier)

  console.log(state)
  return (
    <>
    {panier}
    <button onClick={()=>dispatch(ajouter())}>ajouter</button>
    <button onClick={()=>dispatch(reduit())}>reduit</button>

    </>
  );
}