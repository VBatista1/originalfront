import styled from "styled-components";

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
`;

export const CartContainer = styled.div`
  display: flex;
  & > div:first-child {
    display: flex;
  }
`;
