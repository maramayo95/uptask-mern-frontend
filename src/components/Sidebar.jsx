import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {
  const {auth} = useAuth()
  console.log(auth.nombre)
  return ( 
    <aside className=" md:w-80 lg:w-96 bg-white p-4">
        <p className="text-xl font-bold text-sky-800"> Bienvenido {auth.nombre} </p>
        <Link to="create-project" className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>
            Nuevo Proyecto
        </Link>
    </aside>
  )
}

export default Sidebar