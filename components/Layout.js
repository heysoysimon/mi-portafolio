import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Heysoysimon - {pagina}</title>
        <meta name='description' content=' Simon Rondon Front End developer'/>
      </Head>
      <Menu></Menu>
      {children}

      <Footer></Footer>
    </div>
  )
}

export default Layout
