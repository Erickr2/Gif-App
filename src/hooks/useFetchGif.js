import { useEffect, useState } from "react";
import {GetGif} from '../helpers/GetGif'

//funcion que recibe como argumento la categoria del buscador
export const useFetchGif = (category) => {

  //hook que va a guardar mi estado P.E mi estado actual son los gifs que reciba del buscador
  const [Estado, setEstado] = useState({
    //va a recibir una data(arreglo de gifs)
    data: [],
    loading: true,
  });

  //me ayuda a evaluar si la categoria(estado) cambia
  useEffect(() => {
    //GetGif es una promesa, por lo que retornamos un "then"
    GetGif(category)
      //le indicamos que mi estado actual(imgs) modifique el estado(los gifs) 
      .then((img) => {
          //mandamos la respuesta despues de 2 segundos
        setTimeout(() => {

            //con ayuda del metodo setEstad renderiza la data(imgs(estado actual))
          setEstado({
            data: img,
            loading: false,
          });


        }, 2000);


      });

  }, [category]);

  return Estado;
};
