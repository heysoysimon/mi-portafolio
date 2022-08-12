import Layout from "../components/Layout"
import Image from "next/image"
import { proyectos } from "../data"
const ProyectoMas = () => {
  return (
    <Layout>
      {proyectos.map(({nombre, descricion, image}, i)=>(
        <div key={i}>
        <div className='imagenProyectos'>
            <Image
            alt=""
            src={`/${image}`}
            width={400}
            height={300}
            />
        </div>
        <div className='titulo'>
            <h3>{nombre}</h3>
        </div>
        <div className='descricion'>
        <p>{descricion}</p>
        </div>
      </div>
      ))}
    </Layout>
  )
}

export default ProyectoMas
