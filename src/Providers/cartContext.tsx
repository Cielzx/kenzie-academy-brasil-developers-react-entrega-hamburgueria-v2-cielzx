import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apis";
import { toast } from "react-toastify";

interface iContextChildren {
  children: React.ReactNode;
}

export interface iProducts {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  count: number;
}

interface iContextProvider {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  prod: iProducts[];
  filt: iProducts[];
  setProd: React.Dispatch<React.SetStateAction<iProducts[]>>;
  filtered: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  cart: iProducts[];
  setCart: React.Dispatch<React.SetStateAction<iProducts[]>>;
  removeFromCart: (item: iProducts) => void;
  addCart: (product: iProducts) => void;
  modal: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCart: (product: iProducts) => void;
  handleIcrement: (productId: iProducts) => void;
  handleDecrement: (productId: iProducts) => void;
}

export const CartContext = createContext<iContextProvider>(
  {} as iContextProvider
);

export const UserProvider = ({ children }: iContextChildren) => {
  const [user, setUser] = useState(null);
  const [prod, setProd] = useState<iProducts[]>([]);
  const [cart, setCart] = useState<iProducts[]>([]);
  const [modal, setModalIsOpen] = useState(false);
  const [filtered, setFilter] = useState("");

  const filt = !filtered
    ? prod
    : prod.filter((pro) =>
        pro.name.toLowerCase().includes(filtered.toLowerCase())
      );

  const removeFromCart = (item: iProducts) => {
    const filter = cart.filter((product) => product !== item);

    setCart(filter);
  };

  const addCart = (product: iProducts) => {
    const productData = cart.find(
      (prodData) => prodData.name.toLowerCase() === product.name.toLowerCase()
    );

    if (!productData) {
      setCart([...cart, product]);
    } else {
      toast.error("Você já possui esse item no carrinho");
    }
  };

  const handleCart = (product: iProducts) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updateCart);
    } else {
      setCart((old) => [...old, { ...product, count: 1 }]);
    }
  };

  const handleIcrement = (productId: iProducts) => {
    const update = cart.map((item) =>
      item.id === productId.id ? { ...item, count: item.count + 1 } : item
    );

    setCart(update);
  };

  const handleDecrement = (productId: iProducts) => {
    const newProd = cart.find((item) => item.id === productId.id);

    if (newProd?.count && newProd.count <= 1) {
      const prodFilter = cart.filter((item) => item.id != productId.id);

      setCart(prodFilter);
    } else {
      const update = cart.map((item) =>
        item.id === productId.id ? { ...item, count: item.count - 1 } : item
      );

      setCart(update);
    }
  };

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        prod,
        filt,
        setProd,
        filtered,
        setFilter,
        cart,
        setCart,
        removeFromCart,
        addCart,
        modal,
        setModalIsOpen,
        handleCart,
        handleIcrement,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
