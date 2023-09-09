import {useEffect} from 'react'
import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  useEffect( () => {
      if(pacientes.length > 0){
      }
  }, [pacientes]);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ?  
      <>
        <h2 className="font-black text-3xl  text-center">Listado de pasientes </h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
        </p>
          
        {pacientes.map( paciente=>( 
          <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente= {eliminarPaciente}
          />
            
        ))} 
      </> 
      :<>
      <h2 className="font-black text-3xl  text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza a agregar pacientes {''}
          <span className="text-indigo-600 font-bold ">y se mostraran a continuación</span>
        </p>
      
      </>}

   </div>
    
  )
}

export default ListadoPacientes