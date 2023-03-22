import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem.jsx";

//funcion que recibe una category, que viene del buscador
export const GifGrid = ({ category }) => {

  const { Images, Loading } = useFetchGif(category)

  return (

    <>
      {/* aqui estamos renderizando lo que recibimos en el buscador de mi app */}

      <h3>{category}</h3>
      {
        Loading && (<h2> Cargando...</h2>)
      }
      <div className="card-grid">

        {
          /* aqui le decimos que retorne nuestro arreglo de imagenes y que recorra una x una */
          Images.map((image) => ( //le mandamos la imagen actual
            //aqui hacemos referencia a nuestro archivo GifGridItem(imprime las imagenes)
            <GifGridItem
              key={image.id}
              {...image} //mandamos cada imagen como independiente con ayuda del operado "spret(...)"
            />
          ))
        }

      </div>

    </>
  );
};
