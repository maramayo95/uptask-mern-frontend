import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const ProjectsContext = createContext()


const ProjectsProvider =  ({children} ) => { 
    const [projects, setProjects] = useState([])
    const [alert, setAlert] = useState({})

    const showAlert = alert => {
        setAlert(alert)

        setTimeout(()=> {
         setAlert({})
        }, 2000)
    }


    const submitProject = async (project) => {
        try {
            const token = localStorage.getItem('token')
            if(!token) {
                return
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${token}`
                }
            }

            const {data} = await axios.post('/api/proyectos', project, config)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ProjectsContext.Provider
        value={{
            projects,
            showAlert,
            alert,
            submitProject
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export {
    ProjectsProvider
}

export default ProjectsContext