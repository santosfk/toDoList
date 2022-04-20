import styled from "styled-components";

export const Container = styled.div<{
  done: boolean;
}>`
  position: relative;
  top: 8rem;
  margin-top: 2rem;
  color: white;
  font-size: 1.5rem;
  background-color: ${({ done }) => (done ? "green" : "black")};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  padding: 15px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  transition: 0.5s;
  :hover {
    border: 2px solid #008080;
  }

  input {
    margin-right: 10px;
  }
`;
export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
