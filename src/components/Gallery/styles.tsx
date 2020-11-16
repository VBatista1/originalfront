import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  & > div {
    display: flex;
    flex-direction: column;
    margin-right: 90px;
    justify-content: center;
    align-items: center;
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
`;
