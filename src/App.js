import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=0924721fb5c641e299ee7e18b92a96b6`;

      const respuesta = await fetch(url);
      const noticias =  await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
