import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <nav>
            <Link to={'/reserva'}>Reserva</Link>
            <Link to={'/'}>Home</Link>
        </nav>
        <h1>Hola Mundo, este es mi primer componente</h1>
        </>
    )
}

export default Home