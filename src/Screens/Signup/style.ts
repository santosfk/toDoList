import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #0781f5;
  letter-spacing: 2px;
`;
export const RightContent = styled.div`
  width: 50%;
  background-color: #f3f9f9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const EmailContent = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  input {
    width: 420px;
  }
  span {
    color: red;
  }
`;
export const PasswordContent = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  input {
    width: 420px;
  }
  span {
    color: red;
  }
`;
export const SubmitContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 300px;
  }
`;
export const LeftContent = styled.div`
  background-color: #31e089;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
