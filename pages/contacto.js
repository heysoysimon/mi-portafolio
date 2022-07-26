import React from 'react'
import Link from 'next/link'
import styles from '../styles/Contacto.module.css'
const Contacto = () => {
  return (
   <div>
      <h1 className={styles.titulo}> Contacto</h1>
    <div className={styles.contenedor}>
      <form className={styles.formulario}>
          <input className={styles.mensaje} 
          type="text" placeholder='nombre' />
          <input className={styles.email}
          type="email" placeholder='correo'/>
          <textarea className={styles.textarea}
          name='mensaje' placeholder='mensaje'/>
          <input 
          className={styles.boton}
           type="submit" 
           value="enviar"/>
      </form>
    </div>
<Link href="/">
    <a>Home</a>
  </Link>
   </div>
  )
}

export default Contacto
