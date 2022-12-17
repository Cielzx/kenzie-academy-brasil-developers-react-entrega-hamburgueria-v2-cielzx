import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import Main from "../Pages/MainBurguer";
import { RegisterPage } from "../Pages/Register";

export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="dashboard" element={<Main />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};
