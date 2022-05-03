import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'

     // Diferencia entre LInk y Navlink

     /* 
     ~ link --> se utiliza como un <A HREF=""
     ~ Navlink --> determina si está en la ruta dependiendo el path y asi poner una clase de activo o no
      */

const Navigation = () => {

  return (

       <BrowserRouter>
          <div className="main-layout">
               <nav>
                    <img src={logo} alt="React logo" />
               <ul>
                    <li>
                         <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : ''  }  >Home</NavLink>
                    </li>
                    <li>
                         <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >about</NavLink>
                    </li>
                    <li>
                         <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >users</NavLink>
                    </li>
               </ul>
               </nav>


               <Routes>
                    <Route path="about" element={<h1>About page</h1>} />
                    <Route path="users" element={<h1>users page</h1>}/>
                    <Route path="/" element={<h1>Home page</h1>}/>

                    <Route path="/*" element={<Navigate to="/" replace /> }/>
               </Routes>

          </div>
       </BrowserRouter>

  )
}

export default Navigation