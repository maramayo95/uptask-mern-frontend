import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "../components/Alert";
import axios from 'axios'

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const [alert, setAlert] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password, password2 } = formInputs;
    if ([nombre, email, password, password2].includes('')) {
      setAlert({
        msg:'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password !== password2){
        setAlert({
          msg: 'Las contraseñas deben coincidir',
          error: true
        })
      return
    }

    if(password.length < 6){
      setAlert({
        msg: 'La contraseña debe tener mas de 6 caracteres',
        error: true
      })
    }
    
    setAlert({})
    try {
      const respuesta = await axios.post('api/usuarios', {
        nombre:nombre,
        password: password,
        email : email
      })
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }

    // const request = await fetch("http://localhost:8080/api/usuarios", {
    //   method: "POST",
    //   body : JSON.stringify({
    //     nombre,
    //     password,
    //     email
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
  
  };



  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const {msg} = alert

  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700"> Proyectos</span>
      </h1>

      {msg && <Alert alert={alert}/> }

      <form className="my-10 bg-white shadow-lg p-10" onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ingrese su nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
            value={formInputs.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
            value={formInputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="Password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingrese su password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
            value={formInputs.password}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repita su Password
          </label>
          <input
            id="password2"
            name="password2"
            type="password"
            placeholder="Repita su password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
            value={formInputs.password2}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-sky-700 py-3 w-full text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-900"
          to="/"
        >
          Inicia Sesion
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-900"
          to="/forgot-password"
        >
          Olvidé mi password
        </Link>
      </nav>
    </>
  );
};

export default Register;
