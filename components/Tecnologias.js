import styles from "../styles/Tecno.module.css"
import {
  FaHtml5,
/*   FaCss3Alt, */
  FaJs,
  FaReact,
  FaGitAlt,
 } from "react-icons/fa";

const Tecnologias = () => {
  return (
    <div className={styles.tecnologias}>

<div className={styles.tecno}>
      <a className={styles.svg}>
        <FaHtml5/>
      </a>
      <div>
      <h2>HTML 5</h2>
      </div>
    </div>

{/*     <div className={styles.tecno}>
      <a className={styles.svg}>
        <FaCss3Alt/>
      </a>
      <div>
      <h2>CSS 3</h2>
      </div>
    </div> */}
    
    <div className={styles.tecno}>
      <a className={styles.svg}>
        <FaJs/>
      </a>
      <div>
      <h2>JavaScript</h2>
      </div>
    </div>

    <div className={styles.tecno}>
      <a className={styles.svg}>
        <FaReact/>
      </a>
      <div>
      <h2>REACT JS</h2>
      </div>
    </div>

    <div className={styles.tecno}>
      <a className={styles.svg}>
        <FaGitAlt/>
      </a>
      <div>
      <h2>Git</h2>
      </div>
    </div>

</div>
  )
}

export default Tecnologias
