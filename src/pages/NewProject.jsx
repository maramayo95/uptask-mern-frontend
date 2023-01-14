import FormProject from '../components/FormProject'
import useProjects from '../hooks/useProjects'


const NewProject = () => {

  return (
    <div>

      <h1 className="text-4xl font-black text-sky-700 text-center">Crear Proyecto</h1>

      <div className="mt-10 flex justify-center">
        <FormProject/>
      </div>
    </div>
  )
}

export default NewProject