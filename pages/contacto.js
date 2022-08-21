import Spinner from '../components/Spinner'
import styles from '../styles/Contacto.module.css'
import Layout from '../components/Layout'
import { useState } from 'react'
const Contacto = () => {

  const [alerta, setAlerta] = useState('')
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
    console.log("enviando...")
    setAlerta('')
    SetCargando(true)
    setTimeout(() =>{
      SetCargando(false)
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

    <form onSubmit={enviarCorreo}
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
      {alerta ? <div className={styles.error}>{alerta}</div> 
      : cargando  ? <Spinner/>  : ''}
    </div>
  
   </Layout>
  )
}

export default Contacto
