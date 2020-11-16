import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: ${(props) => props.theme.widthContainer};
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin: 0px 0px 104px 0px;
    }
  }
`;
