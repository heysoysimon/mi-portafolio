import React from 'react'
import Head from 'next/head'
import styles from  '../styles/Layout.module.css'
import Link from 'next/link'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Heysoysimon - {pagina}</title>
        <meta name='description' content=' Simon Rondon Front End developer'/>
      </Head>

      <nav className={styles.nav}>
      <Link href="/">
              <a> inicio</a>
              </Link>
              <Link href="/sobreMi">
              <a> Sobre mi</a>
              </Link>
              <Link href="/proyectos">
                  <a> Proyectos</a>
                  </Link>
              <Link href="/contacto">
                <a> Contacto</a>
              </Link>
          </nav>
      {children}

      <Footer></Footer>
    </div>
  )
}

export default Layout
