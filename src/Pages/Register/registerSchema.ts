import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
