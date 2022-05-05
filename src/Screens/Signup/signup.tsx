import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  Title,
  Container,
  LeftContent,
  RightContent,
  EmailContent,
  PasswordContent,
  SubmitContent,
} from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import ClipboardAnimation from "../../animations/components/ClipboardAnimation";
import LoadingAnimation from "../../animations/components/LoadingAnimation";
type Inputs = {
  email: string;
  password: string;
};
export default function Signup() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState<Boolean>(false);
  const handleChangeRoute = (route: string) => {
    navigation(`/${route}`);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(false);
    const email = data.email;
    const password = data.password;
    console.log(email);
    console.log(password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(true);
        handleChangeRoute("login");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Container>
        <LeftContent>
          <ClipboardAnimation />
        </LeftContent>
        <RightContent>
          {loading && <LoadingAnimation />}
          <Title>Cadastre-se</Title>
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
                variant="outlined"
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </SubmitContent>
          </form>
          <Button
            variant="text"
            size="large"
            onClick={() => handleChangeRoute("login")}
          >
            ou faça login
          </Button>
        </RightContent>
      </Container>
    </>
  );
}
