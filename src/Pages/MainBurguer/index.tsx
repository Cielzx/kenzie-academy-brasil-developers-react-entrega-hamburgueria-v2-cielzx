import { StyleMain } from "./style";
import Cart from "../../Components/CartList";
import List from "../../Components/ListBurguer";
import { useContext } from "react";
import { CartContext } from "../../Providers/cartContext";
import { Rout } from "../../routes";
import Header from "../../Components/HeaderBurguer";
import { UserContext } from "../../Providers/userContext";
import { Navigate } from "react-router-dom";

const Main = () => {
  const { user, modal } = useContext(CartContext);
  const { loading, setLoading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? (
    <>
      <Header />
      <StyleMain>
        <List />

        {modal ? <Cart /> : null}
      </StyleMain>
    </>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Main;
