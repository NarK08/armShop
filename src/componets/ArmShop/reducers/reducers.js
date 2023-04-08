import { ActionTypes } from "../actions/actions";

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.setOrder:
      return {
        ...state,
        order: payload,
      };
    case ActionTypes.setIsBasketShow:
      return {
        ...state,
        isBasketShow: payload,
      };
    case ActionTypes.setLoading:
      return {
        ...state,
        loading: payload,
      };
    case ActionTypes.setGoods:
      return {
        ...state,
        goods: payload,
      };

    default:
      return state;
  }
};
