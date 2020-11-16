import styled from "styled-components";

interface Props {
  color?: string;
  onClick: (e: Event) => void;
  active: boolean;
}

export const DescriptionContainer = styled.div`
  width: 444px;
  height: 533px;
  border: 2px solid #d2e1df;
  padding: 20px;

  & > button {
    height: 60px;
    width: 100%;
    border: none;
    background-color: #32917b;
    color: white;
    font-size: 18px;
    border-radius: 3px;
    margin: 53px 0px 0px 0px;
    outline: none;
  }

  & > p {
    font-size: 15px;
    line-height: 200%;
  }
`;

export const Title = styled.div`
  & > p:first-child {
    font-size: 26px;
    font-weight: bold;
    margin: 0;
  }
  & > p {
    margin: 5px 0px 0px 0px;
  }
`;

export const Price = styled.div`
  margin: 24px 0px 0px 0px;

  & p:first-child {
    font-size: 20px;
    color: #686868;
    font-weight: bold;
    margin: 0;
  }
  & span {
    color: #e35443;
    font-size: 14px;
    font-weight: normal;
  }
  & p {
    color: #7f7f7f;
    margin: 5px 0px 0px 0px;
    font-size: 12px;
  }
`;

export const Color = styled.div`
  margin: 34px 0px 0px 0px;

  & span {
    color: #5f75aa;
  }

  & p {
    margin: 0;
  }

  & > div {
    display: flex;
    margin: 14px 0px 0px 0px;
  }
`;

export const ColorRound = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${(props: Props) => props.color};
  border-radius: 22px;
  margin: 0px 15px 0px 0px;
  box-shadow: ${(props: Props) =>
    props.active
      ? "white 0px 0px 0px 1px inset, rgb(222, 143, 117) 0px 0px 0px 2px;"
      : null};
  &:hover {
    cursor: pointer;
  }
`;

export const Size = styled.div`
  margin: 20px 0px 0px 0px;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      color: #5f75aa;
    }
    & a {
      color: ${(props) => props.theme.terciaryColor};
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;

export const TamanhoSelect = styled.div`
  border: 1px solid #ebebeb;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  background-color: ${(props: Props) => (props.active ? "#DE8F75" : "#fff")};
  & p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: ${(props: Props) => (props.active ? "#fff" : "#5f75aa")};
  }
  &:hover {
    cursor: pointer;
  }
`;
