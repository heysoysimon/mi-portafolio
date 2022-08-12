import Link from "next/link"
import styled from "styled-components"
import BotonMenu from "../components/BotonMenu"
import { useState } from "react"
const Menu = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () =>{
    setOpen(!open)
  }
  return (
    <>
     <NavBar>
     <div className='burguer'>
          <BotonMenu open={open} handleClick={handleClick}/>
          </div>
        <div className={`links ${open ? 'active' : ''}`}>
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
    </NavBar> 
    </>
  )
}

export default Menu


const NavBar = styled.nav`
      text-align: right;
      padding: 30px;
      background: #202020;
      color: white;
      a{
        padding:20px;
      }

  
  @media only  screen and (max-width: 768px) {
    .links {
    display: none;
    }
    .links.active{
    display: flex;
    flex-direction: column;
    a{
      font-size: 20px;
    }

  }
}
.burguer{
    @media screen and (min-width: 800px) {
    display: none;
}
}
`
