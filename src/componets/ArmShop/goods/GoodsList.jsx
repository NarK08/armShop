import GoodsItem from "./GoodsItem";
const GoodsList = (props) => {
  const { good = [] ,addItem = Function.prototype } = props;

  if (!good.length) {
    return <h3>Ничего не найдено</h3>;
  }
  return <div className="goods">
    {good.map((item) => (
        <GoodsItem key = {item.id} {...item} addItem = {addItem} />
    ))}
  </div>
};

export default GoodsList;
