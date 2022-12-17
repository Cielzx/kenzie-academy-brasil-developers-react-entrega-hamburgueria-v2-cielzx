import { SubmitHandler, useForm } from "react-hook-form";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivLoginStyled } from "./style";
import Button from "@mui/material/Button";
import { iLogin, UserContext } from "../../Providers/userContext";
import { useContext } from "react";
import { LoginSchema } from "./loginSchema";
import { Input } from "../../Components/Input";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(LoginSchema),
  });

  const { loginFunction } = useContext(UserContext);

  const loginForm: SubmitHandler<iLogin> = (data) => {
    loginFunction(data);
  };

  return (
    <DivLoginStyled>
      <form action="" onSubmit={handleSubmit(loginForm)}>
        <h2>Login</h2>
        <Input
          type="email"
          id="email"
          error={errors.email}
          placeholder="Digite seu nome"
          {...register("email")}
        />
        <Input
          type="password"
          id="password"
          error={errors.password}
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <Button variant="contained" type="submit">
          Logar
        </Button>
        <div>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>

          <Link to={"register"}>Cadastrar</Link>
        </div>
      </form>

      <div className="content-div">
        <h1>
          Burguer <span className="title-span">Kenzie</span>
        </h1>

        <div className="content-text">
          <FiShoppingBag />
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </div>
      </div>
    </DivLoginStyled>
  );
};
