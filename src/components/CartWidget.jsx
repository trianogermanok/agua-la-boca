function CartWidget () {
    return(
        <button type="button" style={{backgroundColor:'green'}} class="btn position-relative">
        <i style={{color:'white'}} className="fa-solid fa-cart-shopping"/>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
            <span class="visually-hidden">unread messages</span>
        </span>
        </button>
    )
}

export default CartWidget

