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
                <ul>
                    <li><NavLink className="text-decoration-none text-black" to={"/terminos-y-condiciones"}>Términos y Condiciones</NavLink></li>
                    <li><NavLink className="text-decoration-none text-black" to={"/politica-de-reembolso"}>Política de Reembolsos</NavLink></li>
                    <li><NavLink className="text-decoration-none text-black" to={"/politica-de-privacidad"}>Política de Privacidad</NavLink></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><NavLink className="text-decoration-none text-black" to={"#"}>Instagram</NavLink></li>
                    <li><NavLink className="text-decoration-none text-black" to={"#"}>Facebook</NavLink></li>
                    <li><NavLink className="text-decoration-none text-black" to={"#"}>WhatsApp</NavLink></li>
                </ul>
            </div>
            <div className="col">
                <p>© 2024, 
                    <NavLink to={"/"} title> PANI</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Footer;