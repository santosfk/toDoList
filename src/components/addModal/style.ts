import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: rgb(190, 190, 190, 0.8);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  display: flex;
`;
export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 550px;
  height: 400px;
  left: 30%;
  top: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const InputTitleTask = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 2px solid #31e089;
  transition: 0.5s;
  :focus {
    height: 30px;
    font-size: 1rem;
  }
`;
export const InputDescriptionTask = styled.textarea`
  width: 400px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #31e089;
  padding: 10px;
  outline: none;
  transition: 0.5s;
  :focus {
    height: 50px;
  }
`;
export const SubmitTaskButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  color: white;
  background-color: #31e089;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  :hover {
    transform: translateY(2px);
    letter-spacing: 2px;
  }
`;
