import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Proyectos.module.css"
import Layout from "./Layout"
import { proyectos } from "../data"

const Proyectos = () => {
  return (
    
    <div className={styles.contenedorPrpyectos}>
    <div className={styles.proyectos}>
      {proyectos.map(({nombre, descricion, image, urlDemo, urlCode}, i)=>(
        <div className={styles.proyecto} key={i}>
        <div className={styles.imagenProyectos}>
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
        <Link href={urlDemo}>
    <a target="_blank" rel="noreferrer">Demo</a>
    </Link>

    <Link href={urlCode}>
    <a target="_blank" rel="noreferrer">Codigo</a>
    </Link>
      </div>
      ))}    
      </div>
</div>
  )
}

export default Proyectos
