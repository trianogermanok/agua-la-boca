import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Carrusel from "./components/Carrusel"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Error404 from "./components/Error404"
import Productos from "./components/Productos"
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import TerminosYCondiciones from "./components/TerminosYCondiciones"
import PoliticaDeReembolso from "./components/PoliticaDeReembolso"
import PoliticaDePrivacidad from "./components/PoliticaDePrivacidad"

function App(){
    return(
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />} />
                    <Route path={"/categoria/:id"} element={<ItemListContainer />} />
                    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route path={"/cart"} element={<Cart />} />
                    <Route path={"/checkout"} element={<Checkout />} />
                    <Route path={"*"} element={<Error404 />} />
                    <Route path={"/terminos-y-condiciones"} element={<TerminosYCondiciones />} />
                    <Route path={"/politica-de-reembolso"} element={<PoliticaDeReembolso />} />
                    <Route path={"/politica-de-privacidad"} element={<PoliticaDePrivacidad />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App