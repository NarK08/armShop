import { useEffect } from "react";
import PreLoader from "./PreLoader";
import GoodsList from "../goods/GoodsList";
import Cart from "../goods/Cart";
import BasketList from "../basket/BasketList";

import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../selector/selectorOrder";
import { goods } from "../selector/selectorGoods";
import { isBasketShow } from "../selector/selectorBasketShow";
import {
  setGoods,
  toggleBasketShow,
  setLoading,
  setOrder,
} from "../actions/actions";

const VitShop = () => {

  const orders = useSelector(order);
  const good = useSelector(goods);
  const basketShow = useSelector(isBasketShow);
  const dispatch = useDispatch();

  const addItem = (item) => {
    const itemIndex = orders.findIndex((orderItem) => orderItem.id === item.id);
    console.log(itemIndex);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        number: 1,
      };
      dispatch(setOrder([...orders, newItem]));
    } else {
      const newOrder = orders.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            number: orderItem.number + 1,
          };
        } else {
          return orderItem;
        }
      });
      dispatch(setOrder(newOrder));
    }
  };

  const incriment = (itemId) => {
    const newOrder = orders.map((el) => {
      if (el.id === itemId) {
        const newNumber = el.number + 1;
        return {
          ...el,
          number: newNumber,
        };
      } else {
        return el;
      }
    });
    dispatch(setOrder(newOrder));
  };

  const deccriment = (itemId) => {
    const newOrder = orders.map((el) => {
      if (el.id === itemId) {
        const newNumber = el.number - 1;
        return {
          ...el,
          number: newNumber >= 0 ? newNumber : 0,
        };
      } else {
        return el;
      }
    });
    dispatch(setOrder(newOrder));
  };

  const removeBasket = (itemId) => {
    const newOrder = orders.filter((el) => el.id !== itemId);
    dispatch(setOrder(newOrder));
  };

  // ?????
  const handleBasketShow = () => {
    dispatch(toggleBasketShow(!basketShow));
  };

  const API_URL = "https://fortniteapi.io/v1/shop?lang=ru";
  const API_KEY = "d56d6707-c10cefe6-c7de7ec0-8e14bab2";

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && dispatch(setGoods(data.featured));
        dispatch(setLoading(false));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container content">
      <Cart number={orders.length} handleBasketShow={handleBasketShow} />
      {orders.loading ? (
        <PreLoader />
      ) : (
        <GoodsList good={good} addItem={addItem} />
      )}
      {basketShow && (
        <BasketList
          orders={orders}
          handleBasketShow={handleBasketShow}
          removeBasket={removeBasket}
          incriment={incriment}
          deccriment={deccriment}
        />
      )}
    </main>
  );
};

export default VitShop;
