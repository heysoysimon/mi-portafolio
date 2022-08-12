import styles from "../styles/Tecno.module.css"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
 } from "react-icons/fa";

const Tecnologias = () => {
  return (
    <div className={styles.tecnologias}>
                    
    {/* <div className={styles.tecno}>
    <svg className={styles.svg} 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
     width="100"
     height="100"
    >
    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        <h2>HTML 5</h2>
    </div> */}

<div className={styles.tecno}>
      <a className={styles.svg}>
        <FaHtml5/>
      </a>
      <div>
      <h2>HTML 5</h2>
      </div>
    </div>

    <div className={styles.tecno}>
      <a className={styles.svg}>
        <FaCss3Alt/>
      </a>
      <div>
      <h2>CSS 3</h2>
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
