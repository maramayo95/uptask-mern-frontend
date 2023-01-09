const NewPassword = () => {
  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Reestablece tu password y no pierdas acceso a {" "}
        <span className="text-slate-700"> Proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow-lg p-10">
      <div className="my-5">
          <label
            htmlFor="Password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nuevo Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu nuevo Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
          />
        </div>


        <input
          type="submit"
          value="Enviar"
          className="bg-sky-700 py-3 w-full text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

    </>
  );
};

export default NewPassword;
