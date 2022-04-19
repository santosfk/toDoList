import React from "react";
import { TextField, Button } from "@mui/material";
import { Title, Container, LeftContent, RightContent } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};
export default function Signup() {
  const navigation = useNavigate();
  const handleChangeRoute = (route: string) => {
    navigation(`/${route}`);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email);
    console.log(password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        handleChangeRoute("login");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Container>
        <RightContent>
          <Title>Cadastre-se</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <TextField
              type="password"
              id="filled-basic"
              label="Password"
              variant="filled"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <Button type="submit">Enviar</Button>
          </form>
        </RightContent>
        <LeftContent></LeftContent>
      </Container>
    </>
  );
}
