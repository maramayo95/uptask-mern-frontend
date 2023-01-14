import { useState } from 'react'
import useProjects from '../hooks/useProjects';
import Alert from './Alert';

const FormProject = () => {
    const {showAlert, alert, submitProject} = useProjects()

    const [formInputValues, setFormInputValues] = useState({
        nombre: '',
        description: '',
        fechaEntrega: '',
        cliente: ''
    })

    const handleChange = (e) => {
        setFormInputValues({
            ...formInputValues,
            [e.target.name]: e.target.value,
        });

        submitProject({
            nombre,description,fechaEntrega,cliente
        })
    };

    const { msg} = alert

    const { nombre, description, fechaEntrega, cliente } = formInputValues

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, description, fechaEntrega, cliente].includes('')) {
            showAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
    }
    return (
        <form className='bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow'
            onSubmit={handleSubmit}
        >

            {msg && <Alert alert={alert}/>}
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold text-sm" htmlFor='nombre'>
                    Nombre Proyecto
                </label>

                <input
                    name='nombre'
                    id="nombre"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                    placeholder='Nombre del Proyecto'
                    onChange={handleChange}
                    value={nombre}
                />

            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold text-sm" htmlFor='description'>
                    Descripción
                </label>

                <textarea
                    name='description'
                    id="description"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                    placeholder='Descripción del Proyecto'
                    onChange={handleChange}
                    value={description}
                />

            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold text-sm" htmlFor='fechaEntrega'>
                    Fecha de Entrega
                </label>

                <input
                    name='fechaEntrega'
                    id="fechaEntrega"
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                    onChange={handleChange}
                    value={fechaEntrega}
                />

            </div>

            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold text-sm" htmlFor='cliente'>
                    Nombre del Cliente
                </label>

                <input
                    name='cliente'
                    id="cliente"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                    placeholder='Nombre del Cliente'
                    onChange={handleChange}
                    value={cliente}
                />

            </div>

            <input type="submit" value="Crear Proyecto" className='bg-sky-600 text-white w-full p-3 uppercase font-bold rounded cursor-pointer hover:bg-sky-800 transition-colors' />
        </form>
    )
}

export default FormProject