import { SubmitHandler, useForm } from "react-hook-form";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { DivLoginStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../Providers/userContext";
import { iRegister } from "../../Providers/userContext";
import { useContext } from "react";
import { RegisterSchema } from "./registerSchema";
import { Input } from "../../Components/Input";
import { CartContext } from "../../Providers/cartContext";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(RegisterSchema),
  });

  const { RegisterFunction } = useContext(UserContext);

  const handleRegisterForm: SubmitHandler<iRegister> = (data: iRegister) => {
    RegisterFunction(data);
  };
  return (
    <DivLoginStyled>
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

      <form action="" onSubmit={handleSubmit(handleRegisterForm)}>
        <div className="register-form-title">
          <h2>Cadastro</h2>
          <Link to={"/"}>Retornar para login</Link>
        </div>

        <Input
          type="text"
          id="text"
          error={errors.name}
          placeholder="Digite seu nome"
          {...register("name")}
        />

        <Input
          type="email"
          id="email"
          error={errors.email}
          placeholder="Digite email"
          {...register("email")}
        />

        <Input
          type="password"
          id="password"
          error={errors.password}
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </DivLoginStyled>
  );
};
