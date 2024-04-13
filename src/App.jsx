import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App(){
    return(
        <>
            <NavBar />
            <ItemListContainer mensaje={"Recorda iniciar sesion y/o registrarte para comprar."}/>
        </>
        
    )
}

export default App