import { useEffect, useState } from "react";
import {GetGif} from '../helpers/GetGif'

//funcion que recibe como argumento la categoria del buscador
export const useFetchGif = (category) => {

  //hook que va a guardar mi estado P.E mi estado actual son los gifs que reciba del buscador
  const [Images, setImages] = useState([]);
  const [Loading, setLoading] = useState(true);

 const getImages = async() =>{
  const newImages = await GetGif( category);
  setImages(newImages)
 }

 useEffect( () => {
  getImages();
  setLoading(false);
 }, []);

  return {
    Images,
    Loading
  }
};
