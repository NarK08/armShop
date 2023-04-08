//Construction
import BasketItem from "./BasketItem"

const BasketList = (props) => {
  const {
    orders = [],
    handleBasketShow = Function.prototype,
    removeBasket = Function.prototype,
    incriment = Function.prototype,
    deccriment = Function.prototype,
  } = props;
  const totalPrice = orders.reduce((sum, el) => {
    return sum + el.price * el.number;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {orders.length ? (
        orders.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeBasket={removeBasket}
            incriment={incriment}
            deccriment={deccriment}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая сумма: <h6>{totalPrice} руб.</h6>
      </li>
      <li className="collection-item">
        <button className="btn btn-small"><strong>Оформление заказа</strong></button>
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export default BasketList;
