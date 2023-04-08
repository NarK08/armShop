const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    number,
    incriment = Function.prototype,
    deccriment = Function.prototype,
    removeBasket = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => deccriment(id)}
      >
        remove
      </i>{" "}
      x{number}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incriment(id)}
      >
        add
      </i>{" "}
      = {price * number} руб.
      <span className="secondary-content" onClick={() => removeBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
