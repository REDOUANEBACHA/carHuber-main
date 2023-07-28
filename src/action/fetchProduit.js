import { useEffect } from "react";
import axios from "axios";
import { produitData } from "./action.tsx";
import { useDispatch } from "react-redux";

function useFetchProduit() {

  const dispatch = useDispatch();
  async function fetchProduit() {
    try {
      const produit = await axios.get(`http://localhost:1000/produit`);
    dispatch(produitData(produit.data.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduit(); 
  }, []);
  return; 
}

export default useFetchProduit;
