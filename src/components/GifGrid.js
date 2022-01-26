import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

//funcion que recibe una category, que viene del buscador
export const GifGrid = ({ category }) => {

  //le mandamos como argumento la category(categoria que me mandan en el buscador)
  const { data:images,loading } = useFetchGif( category );//desestructuramos la data(arr de gifs) y el loading(para indicar si ya cargo la data)
//aqui arriba en data, cambiamos el nombre a images de esta manera (data:images)

  return (

    <>
      {/* aqui estamos renderizando lo que recibimos en el buscador de mi app */}
      <h3 className="animate__slideOutDown">{category}</h3>

      {/* con el operador and indicamos que si cumple la carga(nos mande un cargando) */}
      {loading && <p>Loading...</p>}

    

  <div className="card-grid"> 

      {
        /* aqui le decimos que retorne nuestro arreglo de imagenes y que recorra una x una */
        images.map( img => ( //le mandamos la imagen actual
        //aqui hacemos referencia a nuestro archivo GifGridItem(imprime las imagenes)
         <GifGridItem
          key={img.id}
          {...img} //mandamos cada imagen como independiente con ayuda del operado "spret(...)"
         />
          ))
      }

  </div>  

    </>
  );
};
