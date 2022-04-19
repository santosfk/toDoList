import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const LeftContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #31e089;
`;
export const EmailContent = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    width: 400px;
  }
  span {
    color: red;
  }
`;
export const PasswordContent = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  span {
    color: red;
  }
`;
export const SubmitContent = styled.div``;
export const RightContent = styled.div`
  background-color: #136af2;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
