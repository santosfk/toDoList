import styled from "styled-components";

export const Container = styled.div<{
  boxChecked: Boolean;
  showDescription: Boolean;
}>`
  transition: 0.5s;
  background-color: ${({ boxChecked }) => (boxChecked ? "#F0541D" : "#d0d0d0")};
  width: 800px;
  height: ${({ showDescription }) => (showDescription ? "100px" : "50px")};
  padding: 10px;
  margin: 20px 0px;
  border-radius: 5px;
`;
export const ViewContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.h1<{ boxChecked: Boolean }>`
  flex: 1;
  text-decoration: ${({ boxChecked }) =>
    boxChecked ? "line-through" : "none"};
`;
export const Description = styled.text``;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
