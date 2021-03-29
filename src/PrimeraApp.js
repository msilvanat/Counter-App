// 2 tipos de componentes: los que están basados en clases y los que están basados en funciones( funtional components)

//Funcional components ( regresa un html - en realidad en un JSX )
//imr = para importar React 
//En un return de una función, js sólo puede retornar un objeto a la vez
// <> Esto es un fragment


import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {

 
    return (  //DENTRO DEL RETURN ES JSX - ctl k c para comentarios 
        <>
            <h1> {saludo} </h1>
            {/*<pre> { JSON.stringify(saludo, null, 3 ) } </pre>*/}
            <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;