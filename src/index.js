import React from 'react';
import ReactDOM from 'react-dom';
//importamos nuestro archivo para poder trabajr en el y renderizarlo en este archivo
import GiftExpertApp from './GiftExpertApp';
//estilos
import './index.css';


//componenete para denderizar mi archivo
ReactDOM.render(
  //archivo GiftExpertApp
    <GiftExpertApp />,
  document.getElementById('root')//indicamos el lugar donde vamos a renderizar(root), que esta en el index.html
);


