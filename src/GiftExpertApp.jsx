import React, {useState} from 'react'
//importamos nuestra funcion del archivo addCategory
import { AddCategory, GifGrid } from "./components";
//componente que va a recibir algun argumento o NO
const GiftExpertApp = () => {
    
    //con este hook vamos a declarar un arreglo de categorias 
    const [categories, setCategories] = useState(['rick and morty'])

    const onAddCategory = ( newCategory ) => {
        setCategories([newCategory, ...categories])
    }

  
    return(
        <>

            <h2>Busca tu gif aqui</h2>
            {/* aqui estamos renderizando nuestro componente AddCategory*/}
            <AddCategory 
            onNewCategory = { (value) => onAddCategory(value)}
            />
            <hr />

            {
                /* le indicamos que de nuestras categorias recorra cada valor/ le asignamos el valor a category*/
                categories.map( category => (
                    //aqui le mandamos la category y le asignamos la categorya actual(category)
                <GifGrid
                key={category} //aqui mandamos la "key" con ayuda del desestructuring
                category= { category} //aqui mandamos con ayuda del desestructuring

                />
                 ))
                
            }

        
            
        </>
    )

}


export default GiftExpertApp;