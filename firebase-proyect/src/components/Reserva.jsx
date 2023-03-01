import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebase";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";

function Reserva(){
    // console.log(import.meta.env.VITE_BACKEND_HOLA)
    // console.log(import.meta.env.DB_PASSWORD)
     const [users,setuser]= useState([])
     const useCollectionRef= collection(db,'reservaciones')
      const [name, setName]= useState("")
     const [correo, setCorreo]= useState("")
      const [mesa, setMesa]= useState(0)
   
     const createUser = async() => {
       await addDoc(useCollectionRef, { nombre: name, correo: correo, mesa: mesa });
       getUsers() 
      }

     const getUsers = async() =>{
       const data = await getDocs(useCollectionRef)
       console.log(data)
      setuser(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
     }

     useEffect(()=>{
     getUsers();
     },[]); 

    return(
        <>
        <nav>
            <Link to={'/reserva'}>Reserva</Link>
            <Link to={'/'}>Home</Link>
        </nav>
        <h1>Reservaciones</h1>
        <input type="text" placeholder="Nombre" onChange={(e) =>{setName(e.target.value)}} />
        <input type="text" placeholder="Correo" onChange={(e) =>{setCorreo(e.target.value)}} />
        <input type="number" placeholder="Mesa"onChange={(e) =>{setMesa(e.target.value)}} />
        <button onClick={createUser}>Enviar</button>

        {users.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>Nombre: {item.nombre}</h1>
                    <h1>Correo: {item.correo}</h1>
                    <h1>Mesa: {item.mesa}</h1>
                </div>
            )
        })} 

        </>
    )
}

export default Reserva