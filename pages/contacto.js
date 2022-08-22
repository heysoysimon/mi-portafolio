import Spinner from '../components/Spinner'
import styles from '../styles/Contacto.module.css'
import Layout from '../components/Layout'
import { useState } from 'react'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const form = useRef();

  const [alerta, setAlerta] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [cargando, SetCargando] = useState(false)
  const [ valor, setValues] = useState({
    nombre: "",
    asunto: "",
    mensaje: ""
})

 /*  const initialFomr= [
    nombre:""
   ] */

 function enviarCorreo(e){
  e.preventDefault();
  if(Object.values(valor).includes('')){
    /* console.log("por favor agregue texto") */

    setAlerta("todos los campos son obligatorios ")
    return
  } else{
    SetCargando(true)
    setAlerta('')
    /* envia el correo */
    emailjs.sendForm('service_9lcoksl', 'template_vs1s67i', 
    e.target, '1OO4GvnXd5-hUClpr').then((result) => {

      console.log(result.text);
      SetCargando(false)
      setMensaje('su mensaje se envio correctamente ')
  }, (error) => {

      console.log(error.text);

      setAlerta('Ocurrio un error :( ')
  });

   setTimeout(() =>{
      setMensaje('')
    }, 5000) 
  }
 } 

/* console.log(valor) */

 /* function handledChage(e){

  

  const {target} = e
  const {name, value} = target

  const newValues = {
    ...valor,
    [name]: value
  }

  setValues(newValues)
 } */
  return (
   <Layout
   pagina= "Contacto"
   >
      <h1 className={styles.titulo}> Hablemos! </h1>
    <div className={styles.contenedor}>

    <form ref={form} onSubmit={enviarCorreo}
      className={styles.formulario}>
        <label htmlFor='text'/>
          <input className={styles.mensaje} 
          type="text" 
          name="nombre" 
          id="nombre" 
          value={valor.nombre}
          placeholder='Nombre'
          onChange={e => setValues({
            ...valor,
            [e.target.name] : e.target.value
          })} />

          <input className={styles.email}
          type="text" 
          name="asunto" 
          id='asunto'
          value={valor.asunto} 
          placeholder='Asunto'
          onChange={e => setValues({
            ...valor,
            [e.target.name] : e.target.value
          })}/>

          <textarea className={styles.textarea}
          name="mensaje"
           id='mensaje'
           value={valor.mensaje} 
           placeholder='Mensaje'
           onChange={e => setValues({
            ...valor,
            [e.target.name] : e.target.value
          })}/>

          <input 
          className={styles.boton}
           type="submit" 
           value="enviar"/>
      </form>
      {alerta ? <div className={styles.error}>{alerta}</div> : 
      mensaje ? <div className={styles.enviado}>{mensaje}</div>
      : cargando  ? <Spinner/>  : ''}
    </div>
  
   </Layout>
  )
}

export default Contacto
