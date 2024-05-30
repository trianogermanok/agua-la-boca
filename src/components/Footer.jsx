import { NavLink } from "react-router-dom";

function Footer () {
    const estilos = {
        text:{
            decoration: 'none',
            color: 'back',
        },
    }
    return(
        <div className="row  bg-white text-center">
            <div className="col">
                <ul class="list-unstyled">
                    <li><NavLink className="text-decoration-none text-secondary" to={"/terminos-y-condiciones"}>Términos y Condiciones</NavLink></li>
                    <li><NavLink className="text-decoration-none text-secondary" to={"/politica-de-reembolso"}>Política de Reembolsos</NavLink></li>
                    <li><NavLink className="text-decoration-none text-secondary" to={"/politica-de-privacidad"}>Política de Privacidad</NavLink></li>
                </ul>
            </div>
            <div className="col">
                <ul class="list-unstyled">
                    <li><NavLink className="text-decoration-none text-secondary" to={"https://www.instagram.com/paniesdelicioso/"}>Instagram</NavLink></li>
                    <li><NavLink className="text-decoration-none text-secondary" to={"https://www.facebook.com/paniesdelicioso/?locale=es_LA"}>Facebook</NavLink></li>
                    <li><NavLink className="text-decoration-none text-secondary" to={"*"}>WhatsApp</NavLink></li>
                </ul>
            </div>
            <div className="col">
                <p className="text-decoration-none text-secondary">© 2024, 
                    <NavLink to={"/"} title> PANI</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Footer;