import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/apis";
import { CartContext } from "./cartContext";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export interface iRegister {
  name: string;
  email: string;
  password: number;
}

export interface iLogin {
  email: string;
  password: number;
}

interface iApiProvider {
  children: React.ReactNode;
}

interface iApiContext {
  RegisterFunction: (data: iRegister) => void;
  loginFunction: (data: iLogin) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iApiContext>({} as iApiContext);

export const ApiProvider = ({ children }: iApiProvider) => {
  const { setProd, setUser } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const RegisterFunction = async (data: iRegister) => {
    try {
      const response = await api.post("/users", data);

      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const loginFunction = async (data: iLogin) => {
    try {
      const response = await api.post("/login", data);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      window.localStorage.setItem(
        "@hamburgueria:token",
        response.data.accessToken
      );

      toast.success("Usuario logado com sucesso");

      setTimeout(() => {
        getList();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  async function getList() {
    const token = localStorage.getItem("@hamburgueria:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await api.get("/products");
      setUser(response.data);
      setProd(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <UserContext.Provider
      value={{ RegisterFunction, loginFunction, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
