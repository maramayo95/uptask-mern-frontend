import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
            <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Recupera tu acceso y no pierdas tus{" "}
        <span className="text-slate-700"> Proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow-lg p-10">
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
          />
        </div>
        
        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-700 py-3 w-full text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-900"
          to="/register"
        >
          ¿No tenes cuenta? Registrate
        </Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-900"
          to="/"
        >
          Inicia Sesion
        </Link>
      </nav>
    </>
  )
}

export default ForgotPassword