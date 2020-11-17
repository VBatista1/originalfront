import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  margin-right: 45px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 45px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1057px) {
      display: none;
    }
    & > p {
      font-size: 12px;
      color: ${(props) => props.theme.terciaryColor};
    }
    & > button {
      background-color: transparent;
      border: none;
      outline: none;
      width: fit-content;
    }
    & > img {
      width: 82px;
      margin-bottom: 10px;
      opacity: 0.5;
    }
    & > img:nth-child(4) {
      width: 82px;
      margin-bottom: 10px;
      opacity: 1;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    & > img {
      width: 100%;
      align-self: center;
      @media (max-width: 1057px) {
        margin-left: 30px;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 1057px) {
    display: none;
  }
  & > p:first-child {
    font-size: 18px;
    color: #de8f75;
    margin: 0;
  }
  & > p {
    margin: 5px 0px 0px 0px;
    font-size: 12px;
    color: #7f7f7f;
  }
`;
