import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth'

export default function Header() {
    const [show, setshow] = useState(false);
    const {auth} = useAuth()
    return (
        <div className=" bg-white ">
            <nav className="2xl:container 2xl:mx-auto  sm:py-6 sm:px-7 py-5 px-4">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between ">
                    <div className=" sm:flex flex-row items-center space-x-6">
                        <h2 className="text-4xl text-sky-600 font-black text-center">Uptask</h2>
                    </div>
                    <div className="hidden sm:flex md:flex lg:flex space-x-3 items-center">
                        <input type="search" placeholder='Buscar proyecto' className='rounded-lg lg:w-96 block p-2 border' />

                    </div>
                    <div className="hidden sm:flex flex-row space-x-4 items-center ">
                        <Link to="/projects" className="font-bold uppercase">Proyectos</Link>
                        <button type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold ">Cerrar Sesion</button>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={() => setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>

                    <div className="flex flex-col  gap-4 mt-4 w-80 mx-auto ">
                        <p className="text-xl font-bold text-center">Hola : {auth.nombre}</p>
                        <Link to="/projects" className="font-bold uppercase text-center"> Proyectos</Link>
                        <input type="search" placeholder='Buscar proyecto' className='rounded-lg lg:w-96 block p-2 border' />
                        <Link to="create-project" className='bg-sky-500 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>
                            Nuevo Proyecto
                        </Link>

                        <button type="button" className="text-white text-sm bg-sky-700 p-3 rounded-md uppercase font-bold ">Cerrar Sesion</button>
                    </div>
                </div>
            </nav>
        </div>

    );


}
