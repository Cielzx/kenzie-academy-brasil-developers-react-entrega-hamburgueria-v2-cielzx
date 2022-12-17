import { Ul } from "./List";
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { CartContext, iProducts } from "../../Providers/cartContext";
const List = () => {
  const { filt, addCart, handleCart } = useContext(CartContext);

  const handleValue = (item: iProducts) => {
    handleCart(item);
  };

  return (
    <Ul className="list-ul">
      {filt.map((item) => (
        <li key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <span className="span-sand">{item.category}</span>
          <p className="span-rs">R$ {item.price.toFixed(2)}</p>
          <Button onClick={() => handleValue(item)}>Adicionar</Button>
        </li>
      ))}
    </Ul>
  );
};

export default List;
