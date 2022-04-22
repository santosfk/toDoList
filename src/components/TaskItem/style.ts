import styled from "styled-components";

export const Container = styled.div<{
  boxChecked: Boolean;
  showDescription: Boolean;
}>`
  transition: 0.5s;
  background-color: ${({ boxChecked }) => (boxChecked ? "crimson" : "#31e089")};
  width: 800px;
  height: ${({ showDescription }) => (showDescription ? "100px" : "50px")};
  padding: 10px;
  margin: 20px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: white;
  font-weight: bold;
`;
export const Description = styled.text`
  color: white;
  font-weight: 400;
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DeleteDiv = styled.div`
  padding: 5px;
  border-radius: 5px;
  transition: 0.5s;
  color: white;
  :hover {
    background-color: #61a3f2;
  }
`;
