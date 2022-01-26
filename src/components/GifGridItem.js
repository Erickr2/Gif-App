import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className=" tarjeta animate__slideOutDown">

            <img src={ url } alt={ title } />
            <p> { title } </p>
            
        </div>
    )
}
