import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Container,
  EmailContent,
  LeftContent,
  PasswordContent,
  RightContent,
  SubmitContent,
  Title,
} from "./style";
import SendIcon from "@mui/icons-material/Send";
import TasksAnimation from "../../animations/components/Tasks";

type Inputs = {
  email: string;
  password: string;
};
export default function Login() {
  const navigation = useNavigate();
  const handleChangeRoute = (route: string) => {
    navigation(`/${route}`);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        handleChangeRoute("home");
        console.log(user.uid);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Container>
      <LeftContent>
        <Title>Faça Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailContent>
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              size="medium"
              {...register("email", { required: true })}
            />
            {errors.email && <span>este campo é obrigatório</span>}
          </EmailContent>
          <PasswordContent>
            <TextField
              type="password"
              id="filled-basic"
              label="Password"
              variant="outlined"
              size="medium"
              {...register("password", { required: true })}
            />
            {errors.password && <span>este campo é obrigatório</span>}
          </PasswordContent>
          <SubmitContent>
            <Button
              size="large"
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </SubmitContent>
        </form>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleChangeRoute("")}
        >
          ou cadastre-se
        </Button>
      </LeftContent>
      <RightContent>
        <TasksAnimation />
      </RightContent>
    </Container>
  );
}
