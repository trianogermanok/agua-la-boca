import CartWidget from './CartWidget'

function NavBar () {
    return(
        <nav style={{width:'100vw'}} className="navbar justify-content-around navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <img style={{ width: '4rem', margin: '1rem', height: 'auto'}} src="../public/images/logo1.png" alt="" />
                <a className="navbar-brand" href="#">Agua la boca</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Paquetes</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Para Mamá</a></li>
                                <li><a className="dropdown-item" href="#">San Valentin</a></li>
                                <li><a className="dropdown-item" href="#">Pascuas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Donnuts</a></li>
                                <li><a className="dropdown-item" href="#">Berlinesas</a></li>
                                <li><a className="dropdown-item" href="#">Brownies</a></li>
                                <li><a className="dropdown-item" href="#">Bombones</a></li>
                            </ul>
                        </li>
                        <div className='ms-auto d-flex'> 
                            <button style={{margin:'0rem 1rem'}} className="btn btn-primary" href="#">Iniciar sesion</button>
                            <button style={{margin:'0rem 1rem'}} className="btn btn-primary" href="#">Registrarse</button>
                        </div>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar