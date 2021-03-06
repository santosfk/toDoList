import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
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
  margin: 20px 0px;
  :hover {
    background: none;
    color: #136af2;
    border: 1px solid #136af2;
  }
  @media (min-width: 320px) {
    width: 250px;
    height: 40px;
    margin: 20px 0px;
  }
  @media (min-width: 425px) {
    width: 300px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    margin: 0px 100px;
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
export const GithubLink = styled.div`
  a {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    background-color: #ffffff;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (min-width: 320px) {
      font-size: 1rem;
    }
    @media (min-width: 1440px) {
      font-size: 1.5rem;
    }
    @media (min-width: 2560px) {
      font-size: 2rem;
    }
  }
`;
export const SwitchContent = styled.div``;
