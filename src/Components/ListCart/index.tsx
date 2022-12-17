import { useContext } from "react";
import { CartContext } from "../../Providers/cartContext";
import { FiTrash } from "react-icons/fi";

export const CartList = () => {
  const { cart, removeFromCart, handleIcrement, handleDecrement } =
    useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <li className="cart-list" key={item.id}>
          <div>
            <img className="img-cart" src={item.img} alt="" />
          </div>
          <div className="div-list">
            <h3>{item.name}</h3>
            <div className="sub-add-div">
              <button
                className="add-sub-button"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
              <p>{item.count}</p>
              <button
                className="add-sub-button"
                onClick={() => handleIcrement(item)}
              >
                +
              </button>
            </div>
          </div>
          <button className="trash-li" onClick={() => removeFromCart(item)}>
            <FiTrash />
          </button>
        </li>
      ))}
    </>
  );
};
