import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 20px;
`;
export const ButtonAddTask = styled.button`
  width: 300px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  background-color: #136af2;
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    background-color: white;
    color: #136af2;
    border: 1px solid #136af2;
  }
  @media (min-width: 320px) {
    width: 250px;
    height: 40px;
  }
  @media (min-width: 425px) {
    width: 300px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 350px;
    height: 60px;
    font-size: 1.7rem;
  }
  @media (min-width: 2560px) {
    width: 400px;
    height: 70px;
    font-size: 2.1rem;
  }
`;
