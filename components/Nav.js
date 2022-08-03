import Link from "next/link"

const Nav = () => {
  return (
    <nav className={styles.nav}>
              <Link href="/sobreMi">
              <a> Sobre mi</a>
              </Link>
              <Link href="/proyectos">
                  <a> Proyectos</a>
                  </Link>
              <Link href="/sobreMi">
                  <a> Sobre mi</a>
                  </Link>
              <Link href="/contacto">
                <a> Contacto</a>
              </Link>
          </nav>
  )
}

export default Nav
