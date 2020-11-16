import styled from "styled-components";

interface ModalProps {
  status: boolean;
}

export const ModalContainer = styled.div`
  display: ${(props: ModalProps) => (props.status ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 445px;
  height: 602px;
  justify-content: center;
  align-items: center;
  padding-bottom: 23px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 20px 20px 0px 0px;
    & button:first-child {
      background-color: transparent;
      border: none;
      outline: none;
      width: fit-content;
    }
  }

  & > p {
    font-size: 22px;
    color: ${(props) => props.theme.terciaryColor};
    width: 300px;
    text-align: center;
  }

  & > img {
    width: 305px;
  }

  & > button {
    height: 60px;
    width: 305px;
    border: none;
    background-color: #32917b;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    outline: none;
  }

  & > a {
    margin-top: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.secundaryColor};
  }
`;
