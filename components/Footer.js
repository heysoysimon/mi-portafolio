import styles from "../styles/Footer.module.css"
import Link from "next/link"
import { 
  FaGithub, 
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='contenedor'>
            <div className={styles.iconos}>
                  {/* iconos */}
                <div className={styles.icono}>
                    <a href='https://github.com/heysoysimon' target="blacnk">
                      <FaGithub/>
                     </a>

                    <a href="https://twitter.com/simon56963872" target="blacnk">
                    <FaTwitter/>
                    </a>

                    <a href="https://www.instagram.com/heysoysimon/" target="blacnk">
                      <FaInstagram/>
                    </a>

                    <a href="https://www.linkedin.com/in/sim%C3%B3n-rond%C3%B3n-mart%C3%ADnez-6b8a64233/" target="blacnk">
                      <FaLinkedin/>
                    </a>
                    
                </div>
            </div>
            <div className={styles.textos}>
                <div className={styles.texto}>
                    {/* textos */}
                    <div> {`© ${new Date().getFullYear()}`}</div>
                    <div> • </div>
                    <div> Simon Rondon</div>
                </div>
                <div className={styles.navegacion}>
                    <div className={styles.nav}>
                        {/* nav */}
                        <Link href="/">
                        <a> inicio</a>
                        </Link>

                        <Link href="/pagePro">
                            <a> Proyectos</a>
                            </Link>
                            
                        <Link href="/contacto">
                            <a> Contacto</a>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
