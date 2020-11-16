import styled from "styled-components";

interface ModalProps {
  status: boolean;
}

export const SacolaContainer = styled.div`
  display: ${(props: ModalProps) => (props.status ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const SacolaContent = styled.div`
  background-color: white;
  width: 525px;
  height: 100%;
  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 20px 0px 0px;
    & > button {
      background-color: transparent;
      border: none;
      outline: none;
      width: fit-content;
    }
  }
`;

export const SacolaHeader = styled.div`
  margin: 0px 20px 10px 20px;
  border-bottom: 1px solid #e3e3e3;

  & > div {
    margin-left: 20px;
    & > p:first-child {
      font-size: 26px;
      color: ${(props) => props.theme.terciaryColor};
      margin: 0;
    }

    & > p {
      font-size: 18px;
      color: ${(props) => props.theme.secundaryColor};
      margin: 3px 0px 10px 0px;
    }
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 30px;

  & button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  & > img {
    align-self: center;
    width: 46px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p:first-child {
      font-size: 12px;
      color: #202020;
      margin: 0;
    }
    & > p:nth-child(2) {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;

    & > p {
      margin: 0px 10px;
      color: #5f75aa;
      font-size: 14px;
    }
  }

  & > div:nth-child(4) {
    display: flex;
    align-items: center;
  }
`;

export const SacolaFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vh;
  & > div:first-child {
    background-color: ${(props) => props.theme.secundaryColor};
    display: flex;
    & > p {
      color: white;
      margin: 20px 70px;
      & > span {
        font-weight: bold;
      }
    }
  }
  & > div:nth-child(2) {
    background-color: #e3e3e3;
    width: 100%;
    display: flex;
    align-items: center;
    & > div:nth-child(1) {
      margin: 25px 38px 25px 30px;
      & > p:first-child {
        font-size: 16px;
        color: #202020;
        font-weight: bold;
        margin: 0;
      }
      & > p:nth-child(2) {
        font-size: 12px;
        font-weight: 500;
        margin: 0;
      }
    }
    & > div:nth-child(2) {
      & > button {
        height: 42px;
        width: 235px;
        border: none;
        background-color: #32917b;
        color: white;
        font-size: 14px;
        border-radius: 3px;
        outline: none;
      }
    }
  }
`;
