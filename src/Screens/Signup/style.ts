import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (min-width: 320px) {
    button {
      font-size: 1rem;
    }
  }
  @media (min-width: 2560px) {
    button {
      font-size: 2rem;
    }
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #0781f5;
  letter-spacing: 2px;
  @media (min-width: 320px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;
export const RightContent = styled.div`
  width: 50%;
  background-color: #f3f9f9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 320px) {
    margin: auto;
  }
  @media (min-width: 320px) {
    width: 100%;
    height: 100vh;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
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
  @media (min-width: 320px) {
    margin: auto;
    margin-bottom: 30px;
    width: 250px;
    input {
      height: 20px;
    }
  }
  @media (min-width: 375px) {
    width: 300px;
  }
  @media (min-width: 425px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    input {
      height: 30px;
    }
  }
  @media (min-width: 2560px) {
    width: 800px;
    margin: 50px 0px;
    input {
      height: 50px;
      font-size: 2rem;
    }
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
  @media (min-width: 320px) {
    margin: auto;
    margin-bottom: 30px;
    width: 250px;
    input {
      height: 20px;
    }
  }
  @media (min-width: 375px) {
    width: 300px;
  }
  @media (min-width: 425px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    input {
      height: 30px;
    }
  }
  @media (min-width: 2560px) {
    width: 800px;
    margin: 50px 0px;
    input {
      height: 50px;
      font-size: 2rem;
    }
  }
`;
export const SubmitContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 300px;
  }
  @media (min-width: 320px) {
    button {
      width: 200px;
    }
  }
  @media (min-width: 425px) {
    button {
      width: 250px;
    }
  }
  @media (min-width: 1440px) {
    button {
      width: 300px;
      height: 50px;
    }
  }
  @media (min-width: 2560px) {
    width: 800px;
    button {
      height: 70px;
      font-size: 2rem;
    }
  }
`;
export const LeftContent = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    background-color: #31e089;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
