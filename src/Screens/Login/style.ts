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
  @media (min-width: 320px) {
    width: 100%;
    height: 100vh;
    button {
      font-size: 1rem;
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 2560px) {
    button {
      width: 2rem;
      width: 300px;
      height: 60px;
    }
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #31e089;
  @media (min-width: 320px) {
    font-size: 1.7rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 2560px) {
    font-size: 4rem;
  }
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
  @media (min-width: 320px) {
    margin: 30px 0px;
    width: 250px;
  }
  @media (min-width: 425px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
  @media (min-width: 2560px) {
    width: 600px;
    input {
      height: 40px;
      font-size: 2rem;
    }
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
  @media (min-width: 320px) {
    margin: 30px 0px;
    width: 250px;
  }
  @media (min-width: 425px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
  @media (min-width: 2560px) {
    margin: 40px 0px;
    width: 600px;
    input {
      height: 40px;
      font-size: 2rem;
    }
  }
`;
export const SubmitContent = styled.div`
  button {
    width: 100px;
    height: 15px;
    padding: 20px;
  }
  @media (min-width: 375px) {
    button {
      width: 150px;
    }
  }
  @media (min-width: 425px) {
    button {
      width: 200px;
      padding: 25px;
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    button {
      width: 270px;
      font-size: 1.2rem;
    }
  }
  @media (min-width: 2560px) {
    button {
      width: 350px;
      font-size: 2rem;
      height: 60px;
    }
  }
`;
export const RightContent = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    background-color: #136af2;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
