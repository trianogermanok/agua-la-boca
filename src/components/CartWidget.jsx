function CartWidget () {
    return(
        <button type="button" className="btn position-relative">
            <i style={{color:'black'}} className="fa-solid fa-cart-shopping"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
            <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CartWidget

