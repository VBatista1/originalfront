import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.secundaryColor};
`;

export const Copyright = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.terciaryColor};
  display: flex;
  justify-content: center;

  & div {
    display: flex;
    width: 1150px;
    justify-content: space-between;
  }

  & p {
    font-size: 12px;
    width: 728px;
    color: white;
  }

  & img {
    align-self: center;
  }
`;

export const RedeSociais = styled.div`
  display: flex;
  justify-content: center;

  & div {
    width: ${(props) => props.theme.widthContainer};
  }

  & img {
    padding: 21px 30px 14px 0px;
  }
`;

export const Rodape = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 59px;

  & > div {
    display: flex;
    width: ${(props) => props.theme.widthContainer};
    height: 100px;
    justify-content: space-between;

    & div:first-child {
      display: flex;
      align-items: center;
      padding-right: 32px;
    }

    & img:first-child {
      padding-right: 32px;
    }

    & ul {
      list-style-type: none;
      margin: 0;
    }

    & li:first-child {
      font-size: 12px;
      color: ${(props) => props.theme.secundaryColor};
      padding: 0px 0px 6px 0px;
    }

    & li {
      font-size: 14px;
      color: #202020;
      padding: 6px 0px;
    }
  }
`;

export const Newsletter = styled.div`
  width: 293px;
  height: 293px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.secundaryColor};
  border-radius: 200px;
  position: relative;
  top: -168px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & p {
    font-weight: bold;
    margin-bottom: 40px;
  }

  & label {
    position: relative;
    bottom: 47px;
    font-size: 12px;
    left: -97px;
    transition: all 0.3s ease-out;
    color: rgba(32, 32, 32, 0.5);
  }

  & input {
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secundaryColor};
    margin-bottom: 27px;
    width: 230px;
  }

  & input::placeholder {
    color: transparent;
  }

  & input:not(:placeholder-shown) + label,
  input:focus + label {
    position: relative;
    bottom: 63px;
    font-size: 12px;
    left: -99px;
    color: rgba(32, 32, 32, 0.5);
  }

  & button {
    width: 110px;
    height: 50px;
    background-color: ${(props) => props.theme.terciaryColor};
    border: none;
    border-radius: 3px;
    color: white;
    outline: none;
  }
`;
