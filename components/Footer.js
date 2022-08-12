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
                    <a href='#'>
                      <FaGithub/>
                     </a>

                    <a href="#">
                    <FaTwitter/>
                    </a>

                    <a href="#">
                      <FaInstagram/>
                    </a>

                    <a href="#">
                      <FaLinkedin/>
                    </a>
                    
                </div>
            </div>
            <div className={styles.textos}>
                <div className={styles.texto}>
                    {/* textos */}
                    <div> ©2022</div>
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
