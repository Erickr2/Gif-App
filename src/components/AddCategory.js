
import React, {useState} from 'react'
//importamos nuestros prop-types
import PropTypes from 'prop-types';


//los componentes(AddCategory) siempre la primera debe ir capitalizada
export const AddCategory = ({setCategories}) => { //aqui debemos desestructurar{} para recibir los argumentos de otro archivo

    //este es nuestro hook/ recibe el valor del input y tiene el argumento para modificar el input
    const [inputValue, setInputValue] = useState('')//el useState NUNCA debe estar vacio/ en este caso es un strin vacio ''

    //este componenet va a recibir un evento que viene de mi input
    const handleInputChange = (e) =>{
        //aqui le decimos que vamos a modificar el estado de mi input/e.target se refiere al elemento clikeado
        //value hace refrencia a mi variable inputValue que es donde se guarda la info que me mandan
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{

        //el preventDefault me sirve para cancelar un evento en caso de ser cancelable sin que se detenga todo el evento
        e.preventDefault();

        //si nuestro valor no tiene nada atras ni adelante y su tamaño es mayor a dos letras
        if(inputValue.trim().length > 2){
            //aqui le agregamos un callback donde el primer argumento es el estado anterior de mi hook y el otro el nuevo argumento a agregar
                    setCategories(cats =>[inputValue,...cats,]);//hicimos un cambio para que el 1er argumento sea lo que mandan en el buscador 
            //aqui le decimos que limpie la caja con un string vacio haciendo referencia a nuestro modificadorde input
            setInputValue('');
        }

    }

    return (
        //aqui le indicamos que cuando de enter(submit) llame a mi componente handleSubmit
        <form onSubmit={handleSubmit}>

            <input 
                    type="text" 
                    //le decimos que el valor que vamos a recibir esta guardado en la variable "inputValue"
                    value={inputValue}
                    //aqui le mandamos nuestro componente al onChange para cuando cambie el estado
                    onChange={ handleInputChange }       
                    placeholder='busca un gif'
            />

        </form>
    )
}

//aqui hacemos referencia a nuestro componente y a los proptypes
AddCategory.propTypes = {
    //aqui le decimos que el argumento que recibimos(setCategorias).func(es una funcion).isRequired(debe venir awb)
    setCategories: PropTypes.func.isRequired
}