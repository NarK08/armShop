export const ActionTypes = {
  setOrder: "setOrder",
  setIsBasketShow: "setIsBasketShow",
  setLoading: "setLoading",
  setGoods: "setGoods",
};

export const setOrder = (order) => ({
  type: ActionTypes.setOrder,
  payload: order,
});
export const toggleBasketShow = (isBasketShow) => ({
  type: ActionTypes.setIsBasketShow,
  payload: isBasketShow,
});
export const setLoading = (loading) => ({
  type: ActionTypes.setLoading,
  loading,
});

export const setGoods = (goods) => ({
  type: ActionTypes.setGoods,
  payload: goods,
});
