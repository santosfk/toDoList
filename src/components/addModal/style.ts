import styled from "styled-components";
import { TextField } from "@mui/material";
export const Backdrop = styled.div`
  background-color: rgb(190, 190, 190, 0.8);
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 2;
  right: -300px;
  top: -10px;
  padding: 100px;
  margin-top: -10px;
`;
export const Container = styled.div`
  position: absolute;
  z-index: 3;
  width: 550px;
  height: 400px;
  left: 30%;
  top: 20%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (min-width: 320px) {
    width: 100%;
    height: 100vh;
    left: 0;
    top: -15px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    height: 600px;
    top: 10%;
    left: 30%;
  }
  @media (min-width: 2560px) {
    width: 800px;
    height: 900px;
    top: 20%;
  }
`;
export const TextFieldContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    color: ${({ theme }) => theme.COLOR.TEXT};
    @media (min-width: 320px) {
      width: 200px;
    }
    @media (min-width: 375px) {
      width: 250px;
    }
    @media (min-width: 425px) {
      width: 300px;
    }
    @media (min-width: 768px) {
      width: 350px;
    }
  }
`;
export const CssTextField = styled(TextField)({
  background: "none",
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid crimson",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#31e089",
    },
  },
});

export const InputDescriptionTask = styled.textarea`
  width: 400px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLOR.RED};
  padding: 10px;
  outline: none;
  transition: 0.5s;
  background: none;
  color: ${({ theme }) => theme.COLOR.TEXT};
  :focus {
    height: 80px;
    border-color: ${({ theme }) => theme.COLOR.GREEN};
  }
  @media (min-width: 320px) {
    width: 250px;
  }
  @media (min-width: 768px) {
    width: 370px;
  }
  @media (min-width: 1440px) {
    width: 420px;
  }
  @media (min-width: 2560px) {
    width: 520px;
  }
`;
export const SubmitTaskButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-size: 1.2rem;
  border: none;
  outline: none;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.COLOR.RED};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  :hover {
    transform: translateY(2px);
    letter-spacing: 2px;
    background-color: ${({ theme }) => theme.COLOR.GREEN};
  }
`;
