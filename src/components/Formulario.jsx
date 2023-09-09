import {useState, useEffect} from "react"
import Error from "./Error";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechas, setFechas] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError]= useState(false);

  useEffect(() =>{
      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFechas(paciente.fechas)
        setSintomas(paciente.sintomas)
      }
  }, [paciente])

  const generarId = () =>{
    const random= Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random+fecha
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      //Validando formulario
        if([nombre, propietario, email, fechas, sintomas].includes('')){
          console.log('Hay almenoas un campo vacio mi mai')
          setError(true)
          return; 
        }
        setError(false)

        const objetoPaciente={
          nombre, 
          propietario, 
          email, 
          fechas, 
          sintomas
        }

        if(paciente.id){

          objetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
          setPacientes(pacientesActualizados);
          setPaciente({})

        }else{
          objetoPaciente.id= generarId();
          setPacientes([...pacientes, objetoPaciente]);
        }

        // console.log(objetoPaciente)
       
        setNombre('')
        setPropietario('')
        setEmail('')
        setFechas('')
        setSintomas('')
  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Aañade pacientes y {''}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-5 py-10 ml-5 mb-10 mr-5">
        {error && <Error>
          <p>Todos los campos son obligatorios</p>
          </Error>}

        <div className="mb-5">
          
          <label htmlFor="Mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='Mascota' 
          type="text" 
          placeholder="Nombre de la mascota" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={ (e) => setNombre(e.target.value) }
          />

        </div>

        <div className="mb-5">
          
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input id='propietario' 
          type="text" 
          placeholder="Nombre del propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={ (e) => setPropietario(e.target.value) }/>

        </div>

        <div className="mb-5">
          
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input id='email' 
          type="email" 
          placeholder="email contacto propietario" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          />

        </div>
        
        <div className="mb-5">
          
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input id='alta' 
          type="date" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fechas}
          onChange={ (e) => setFechas(e.target.value) }
          />


        </div>

        <div className="mb-5">
          
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange={ (e) => setSintomas(e.target.value) }
          />

        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
        value={paciente.id ? 'Editar paciente': 'agregar paciente'} />

      </form>

    </div>
      
    
  )
}

export default Formulario