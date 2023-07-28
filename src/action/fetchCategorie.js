import { useEffect } from "react";
import axios from "axios";
import { categorie } from "./action.tsx";
import { useDispatch } from "react-redux";

function useFetchCategories() {

  const dispatch = useDispatch();
  async function fetchCategories() {
    try {
      const categories = await axios.get(`http://localhost:1000/menucategories`);
       const data = categories.data.data
       const result = data.reduce((acc, item) => {
        const {  name } = item || {}; 
        const { type_categorie } = item?.Categorie || {}
        if (type_categorie && name) {
          if (!acc[type_categorie]) {
            acc[type_categorie] = [name];
          } else {
            acc[type_categorie].push(name);
          }
        }
        return acc;
      }, {});
      
    dispatch(categorie(result));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategories(); 
  }, []);
  return; 
}



export default useFetchCategories;

