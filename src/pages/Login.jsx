import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Inicia sesion y administra tus{" "}
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
        <div className="my-5">
          <label
            htmlFor="Password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="Password"
            type="Password"
            placeholder="Ingrese su password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
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
          to="/forgot-password"
        >
          Olvidé mi password
        </Link>
      </nav>
    </>
  );
};

export default Login;
