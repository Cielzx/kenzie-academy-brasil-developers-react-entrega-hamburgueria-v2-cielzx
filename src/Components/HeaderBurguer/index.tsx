import { SetStateAction, useContext } from "react";
import Logo from "../../assets/img/Burguer_Kenzie.svg";
import { CartContext } from "../../Providers/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Head } from "./Header";
import { HeaderBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setModalIsOpen, cart } = useContext(CartContext);

  const navigate = useNavigate();

  function Logout() {
    window.localStorage.clear();
    navigate("/");
  }

  const { filtered, setFilter } = useContext(CartContext);
  const HandleForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleEvent = (e: { target: { value: SetStateAction<string> } }) => {
    setFilter(e.target.value);
  };
  return (
    <Head>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="search-cart-logout">
        <div>
          <form action="" onSubmit={HandleForm}>
            <input
              type="text"
              id="search"
              value={filtered}
              onChange={handleEvent}
            />
            <button className="search-button">
              <FiSearch />
            </button>
          </form>
        </div>

        <HeaderBtn onClick={() => setModalIsOpen(true)} className="cart-button">
          <FaShoppingCart />
        </HeaderBtn>
        <div className="counter-cart-box">
          <span>{cart.length}</span>
        </div>

        <HeaderBtn onClick={() => Logout()} className="cart-button">
          <FiLogOut />
        </HeaderBtn>
      </div>
    </Head>
  );
};

export default Header;
