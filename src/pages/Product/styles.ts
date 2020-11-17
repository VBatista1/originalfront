import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  & > div:nth-child(2) {
    width: 100%;
    max-width: ${(props) => props.theme.widthContainer};
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin: 0px 0px 104px 0px;
      @media (max-width: 1057px) {
        flex-direction: column;
        margin: 0px;
        align-items: center;
        padding: 0px 20px;
      }
    }
  }
`;
