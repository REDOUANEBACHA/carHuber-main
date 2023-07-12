import React from 'react';
import { useSelector  , useDispatch} from 'react-redux';
import {ajouter  , reduit} from '../action/action.tsx'
export default function  Test() {
  const state =useSelector((state)=>state)
  const dispatch = useDispatch();

  console.log(state)
  return (
    <>
    {state.stock}
    <button onClick={()=>dispatch(ajouter())}>ajouter</button>
    <button onClick={()=>dispatch(reduit())}>reduit</button>

    </>
  );
}