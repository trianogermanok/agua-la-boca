function Carrusel () {
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.pani.com.ar/cdn/shop/files/Desayunos_Pani_2024_Banner_3_1296x.jpg?v=1710872876" className="d-block vh-100 w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text-black">Nuevos ingresos</h1>
                        <h3 className="text-secondary-emphasis">Super desayunos</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.pani.com.ar/cdn/shop/files/Banner_Recortes_Web_Desayunos_2024_2_1296x.jpg?v=1710952890" className="d-block vh-100 w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text-black">Nuevas PANI GRAN CAKES</h1>
                        <h3 className="text-secondary-emphasis">Tortas enteras</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.pani.com.ar/cdn/shop/files/Banner_Recortes_Web_Desayunos_2024_2_2_1296x.jpg?v=1710957127" className="d-block vh-100 w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text-black">Desayuno en lata</h1>
                        <h3 className="text-secondary-emphasis">Anti coleccionistas</h3>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Carrusel