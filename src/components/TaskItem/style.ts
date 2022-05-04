import styled from "styled-components";

export const Container = styled.div<{
  boxChecked: Boolean;
  showDescription: Boolean;
}>`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 0.5s;
  background-color: ${({ boxChecked }) =>
    boxChecked ? "#dc143c" : ({ theme }) => theme.COLOR.WHITE};
  width: 800px;
  height: ${({ showDescription }) => (showDescription ? "100px" : "50px")};
  padding: 10px;
  margin: 20px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
  @media (min-width: 320px) {
    width: 270px;
    height: ${({ showDescription }) => (showDescription ? "80px" : "30px")};
  }
  @media (min-width: 375px) {
    width: 320px;
  }
  @media (min-width: 425px) {
    width: 370px;
  }
  @media (min-width: 768px) {
    width: 500px;
    height: ${({ showDescription }) => (showDescription ? "100px" : "40px")};
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1440px) {
    width: 700px;
    height: ${({ showDescription }) => (showDescription ? "100px" : "50px")};
  }
  @media (min-width: 2560px) {
    width: 1500px;
    height: ${({ showDescription }) => (showDescription ? "120px" : "70px")};
  }
`;
export const ViewContent = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const TitleContent = styled.div`
  flex: 1;
`;
export const Title = styled.h1<{ boxChecked: Boolean }>`
  text-decoration: ${({ boxChecked }) =>
    boxChecked ? "line-through" : "none"};
  color: black;
  font-weight: bold;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 2.2rem;
  }
`;
export const Description = styled.text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-weight: 400;
  @media (min-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.7rem;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DeleteDiv = styled.div`
  padding: 5px;
  border-radius: 5px;
  transition: 0.5s;
  color: ${({ theme }) => theme.COLOR.TEXT};
  :hover {
    background-color: #61a3f2;
  }
`;
