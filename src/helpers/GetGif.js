

 //declaramos una funcion asyncrona, o sea que no va a bloquear el hilo mientras se ejecuta
 export const GetGif = async(category) => {//aqui estamos recibiendo la categoria(category)

    //le guardamos la url de mi peticion para que me traiga un gif de naruto
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ynjcxQ2qMidhx6EorsxXR39k5lZcnsZy&q=${ encodeURI (category) }&limit=10`;
    //en la parte de la desestructuracion insertamos la categoria que nos manden en el buscador
    //el encodeURI sirve para reemplazar espacios o cosas que no vallana en el buscador
    
    //le indicamos que espere la respuesta de la nueva API "url" quu es la que esta arriba solo que se guardo en la variable "url"
    const resp = await fetch(url);
    //guardamos la respuesta que nos mande en formato json en la variable "data"
    const { data } = await resp.json();//desestructuramos la data para que solo me traiga el arreglo de datos

    //aqui creamos una funcion que me va a traer una imagen con la informacion que le mande en el return
     const gifs = data.map( img => {
        return{

            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    }); 

    return gifs;

}