import styled from "styled-components";

interface Props {
  color: string;
}

export const RecommendationsContainer = styled.div`
  margin-bottom: 145px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 26px;
    color: ${(props) => props.theme.terciaryColor};
  }
  & > div {
    display: flex;
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    margin-top: 24px;
    & > button {
      background-color: transparent;
      border: 1px solid #2a5a75;
      border-radius: 24px;
      height: 35px;
      padding: 6px 10px;
      outline: none;
      width: 35px;
    }
    & > p {
      font-family: open sans;
      font-size: 14px;
      color: #2a5a75;
      margin: 0px 15px;
    }
  }
`;

export const ColorRound = styled.div`
  width: 13px;
  height: 13px;
  background-color: ${(props: Props) => props.color};
  border-radius: 13px;
  margin: 0px 6px 0px 0px;
`;

export const Item = styled.div`
  margin-right: 13px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
      margin: 5px 0px;
    }
    & > div {
      display: flex;
    }
  }
`;
