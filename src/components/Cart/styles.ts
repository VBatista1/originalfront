import styled from "styled-components";

interface props {
  mobile: boolean;
}

export const Icon = styled.img`
  padding-right: 5px;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CartCount = styled.p`
  color: ${(props) => props.theme.fontColor};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1057px) {
    position: relative;
    left: -22px;
    top: 23px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  @media (min-width: 1057px) {
    display: ${(props: props) => (props.mobile ? "none" : "flex")};
  }
  & > div:first-child {
    display: flex;
    & > img:first-of-type {
      @media (max-width: 1057px) {
        display: none;
      }
    }
    & > img:nth-of-type(2) {
      @media (min-width: 1057px) {
        display: none;
      }
    }
  }
`;
