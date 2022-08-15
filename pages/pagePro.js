import React from 'react'
import Layout from '../components/Layout'
import Image from "next/image"
import { proyectos } from "../data"
import styles from "../styles/PagePro.module.css"
import Link from 'next/link'

const Proyectos = () => {
  return (
    <Layout
    pagina= "Proyectos"
    >
    <div className="contenedor">
    <div className={styles.proyectos}>
    {proyectos.map(({nombre, descricion, image, urlDemo, urlCode}, i)=>(
        <div className={styles.proyecto} key={i}>
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
    </Layout>
  )
}

export default Proyectos
