import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'
import LogIn from './LogIn'

function NavBar() {
    return (
        <div className="d-flex bg-white justify-content-center">
            <nav style={{ maxWidth: '100%' }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid justify-content-center">
                    <Link to={"/"} className="navbar-brand">
                        <img src="https://www.pani.com.ar/cdn/shop/files/Pani-Banderita-2_140x.png?v=1613699994" alt="logo-pani" />
                    </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nosotros</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to={"/nuestra-historia"}>Nuestra historia</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/contacto"}>Contacto</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Regala PANI</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to='/categoria/torta'>Tortas entereas</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/categoria/porcion">Porciones</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eventos</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/categoria/desayuno">Box desayunos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/categoria/mesa-dulce">Box mesa dulce</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                <LogIn />
                <CartWidget />
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
