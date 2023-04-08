
const Cart = (props) => {
    const {number = 0, handleBasketShow = Function.prototype} = props
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {number ? <span className="cart-quantity">{number}</span> : null}
    </div>
  );
}

export default Cart
