import {Link} from "react-router-dom"

const Error404 = () => {
    return(
        <div className="container text-center">
            <div className="row">
                <h1 className="text-warning">Error 404 - Página no encontrada</h1>
                <br />
                <h5>La página que ha solicitado no existe. Haz clic <Link to={"/"}>aquí</Link> para continuar la compra.</h5>
            </div>
        </div>
    )
}

export default Error404;