import React, {useState} from 'react'
//importamos nuestra funcion del archivo addCategory
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

//componente que va a recibir algun argumento o NO
const GiftExpertApp = () => {
    
    //con este hook vamos a declarar un arreglo de categorias 
    const [categories, setCategories] = useState(['rick & morty'])

    /* const handleAdd = () => {
        
        //forma 1 de agregar un objeto con ayuda del operador "spret"(...x) agregamos nuestro arreglo a uno nuevo
        //y le mandamos el argumento que queremos agregar
        //setCategories([...categories,'el chavo']);

        //forma 2
        //aqui le agregamos un callback donde el primer argumento es el estado anterior de mi hook y el otro el nuevo argumento a agregar
        setCategories(cats =>[...cats,'el chavo' ]);
    } */
  
    return(
        <>

            <h2>Busca ti gif aqui</h2>
            {/* aqui estamos renderizando nuestro componente AddCategory*/}
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* aqui agergamos nuestro evento onClick a mi componente handleAdd */}
             {/* <button onClick={handleAdd}>Agregar categoria</button> */}

            <ol>

            {/* se debe mandar entre llaves el contenido del ol */}

            {
                /* le indicamos que de nuestras categorias recorra cada valor/ le asignamos el valor a category*/
                categories.map(category => (
                    //aqui le mandamos la category y le asignamos la categorya actual(category)
                <GifGrid

                key={category} //aqui mandamos la "key" con ayuda del desestructuring
                category= { category } //aqui mandamos con ayuda del desestructuring

                />
                 ))
                
            }

            </ol>
            
        </>
    )

}


export default GiftExpertApp;