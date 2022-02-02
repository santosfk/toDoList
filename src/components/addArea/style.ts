import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  button {
    width: 10rem;
    padding: 5px 5px;
    font-size: 1.5rem;
    border-radius: 10px;
    background-color: black;
    color: white;
    border: none;
    transition: 0.4s;
    position: relative;
    :hover {
      background-color: green;
      letter-spacing: 1px;
    }
  }
  input {
    position: relative;
    width: 865px;
    outline: none;
    background-color: black;
    color: white;
    border: none;
    font-size: 1rem;
    padding: 20px 10px;
    margin: 0 10px;
    border-radius: 5px;
    border: 1px solid transparent;
    :focus-within {
      border: 1px solid #008080;
    }
  }
`;
