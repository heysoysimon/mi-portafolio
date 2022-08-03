import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Proyectos from '../components/Proyectos'
import Tecnologias from '../components/Tecnologias'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
<Layout 
pagina="inicio"
>
<header className={styles.header}>
        <div className={styles.textosHeader}>
            <h1> mi nombre</h1>
            <h2> desarollador</h2>
        </div>

        <div className={styles.wave}>
          {/* estilos en linea para el efecto de wave */}
          <div style={{
            height : '150px', 
            overflow : 'hidden'}} 
            >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" 
          style={{
          height: '100%',
           width: '100%'
          }}
          ><path d="M-1.41,109.86 C279.06,156.23 385.15,-27.30 509.31,110.84 L500.00,150.00 L0.00,150.00 Z" 
          style={{
          stroke: 'none',
          fill : '#f0efeb'
           }}>
          
          </path></svg></div>
        </div>
      </header>
              <section className={styles.bio}>
                    <div className={styles.contenedor}>
                  <div className={styles.bioTexto}>

                          <div className={styles.imagen}>
                          <Image
                            className={styles.img}
                            alt='Simon Rondon' 
                            width={400} 
                            height={700}
                            float = 'left' 
                            src="/imagenYo.JPG" />
                          </div>

                        <div>
                      <h2> Sobre mi</h2>

                    <p>Soy un joven que desde pequeño, sentí la vocación de armar y formas estructuras
                        con distintos materiales y/o objectos. ya en mi adolescencia  descubrí en las 
                        computadoras una gran gama de posibilidades creativas para el desarrollo de ideas, conceptos  
                        y aplicación en distintos ámbitos.
                    </p>

                    <div className={styles.verMas}>
                  <Link href="/sobreMi">
                  <a> Sobre mi</a>
                  </Link>
                    </div>
                        </div>

                        </div>
                    </div>
              </section>

              <div className={styles.contenedor}>
              <h2> Tecnologias que manejo </h2>
                    <Tecnologias></Tecnologias>
                    <Proyectos/>
              </div>
</Layout>

    </div>
  )
}