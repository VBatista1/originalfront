import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.secundaryColor};
`;

export const Copyright = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.terciaryColor};
  display: flex;
  justify-content: center;

  & div {
    display: flex;
    width: 1150px;
    justify-content: space-between;

    @media (max-width: 1057px) {
      flex-direction: column;
      padding: 0px 20px;
    }
  }

  & p {
    font-size: 12px;
    width: 100%;
    max-width: 728px;
    color: white;
  }

  & img {
    align-self: center;
    margin: 10px 0px;
  }
`;

export const RedeSociais = styled.div`
  display: flex;
  justify-content: center;

  & div {
    width: 100%;
    max-width: ${(props) => props.theme.widthContainer};

    @media (max-width: 1057px) {
      display: flex;
      justify-content: center;
    }
  }

  & img {
    padding: 21px 30px 14px 0px;
  }
`;

export const Rodape = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 59px;
  @media (max-width: 1057px) {
    display: flex;
    flex-direction: column;
  }

  & > div {
    display: flex;
    width: 100%;
    max-width: 1280px;
    height: 100px;
    justify-content: space-between;

    @media (max-width: 1057px) {
      height: 100%;
      flex-direction: column;
    }

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      padding-right: 32px;
      justify-content: center;
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      @media (max-width: 1057px) {
        display: none;
      }
    }

    & img {
      padding-right: 32px;
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

  @media (max-width: 1057px) {
    border: none;
    top: 0;
    width: 100%;
  }

  & p {
    font-weight: bold;
    margin-bottom: 40px;

    @media (max-width: 1057px) {
      color: #aeb6c1;
      font-weight: 100;
    }
  }

  & label {
    position: relative;
    bottom: 47px;
    font-size: 12px;
    left: -99px;
    transition: all 0.3s ease-out;
    color: rgba(32, 32, 32, 0.5);
    @media (max-width: 1057px) {
      left: -189px;
    }
  }

  & input {
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secundaryColor};
    margin-bottom: 27px;
    width: 230px;

    @media (max-width: 1057px) {
      width: 86%;
    }
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
    @media (max-width: 1057px) {
      left: -189px;
    }
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

export const Info = styled.ul`
  list-style-type: none;
  margin: 0;

  & > li:first-child {
    font-size: 12px;
    color: ${(props) => props.theme.secundaryColor};
    padding: 0px 0px 6px 0px;
  }

  & > li {
    font-size: 14px;
    color: #202020;
    padding: 6px 0px;
  }
`;

export const InfoMobile = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1057px) {
    display: none;
  }

  & li {
    font-size: 14px;
    color: #aeb6c1;
    border-bottom: 1px solid #aeb6c1;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
`;
