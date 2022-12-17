import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../Providers/cartContext";
import { CartList } from "../ListCart";
import { StyleDiv } from "./style";

const Cart = () => {
  const { cart, setCart, removeFromCart, setModalIsOpen } =
    useContext(CartContext);

  const modalRef = useRef<HTMLDivElement>(null);
  const remove = () => {
    setCart([]);
    setModalIsOpen(false);
  };

  useEffect(() => {
    function modalOutClick(event: MouseEvent) {
      if (!modalRef.current) {
        return;
      }
      const target = event.target as HTMLDivElement;

      if (!modalRef.current.contains(target)) {
        setModalIsOpen(false);
      }
    }

    window.addEventListener("mousedown", modalOutClick);
  });

  const values = () => {
    const value = cart
      .reduce((acc, curr) => acc + curr.price * curr.count, 0)
      .toFixed(2);
    return value;
  };

  return (
    <StyleDiv>
      <div ref={modalRef} className="div-cart">
        <ul className="cart-ul">
          <div className="cart-div">
            <div>
              <h2>Carrinho de compras</h2>
              <button
                className="close-button"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </button>
            </div>
          </div>
          {cart.length > 0 ? (
            <CartList />
          ) : (
            <div className="div-appear">
              <h3>Sua sacola está vazia</h3>
              <span>Adicione itens</span>
            </div>
          )}

          {cart.length > 0 ? (
            <div className="total-div">
              <div>
                <h3>Total</h3>

                <p>{values()}</p>
              </div>
              <button onClick={() => remove()}>Remover Todos</button>
            </div>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </StyleDiv>
  );
};

export default Cart;
