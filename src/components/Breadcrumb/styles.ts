import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  @media (max-width: 1057px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  & div {
    width: ${(props) => props.theme.widthContainer};
  }
  & ul {
    list-style-type: none;
    padding: 0;
  }
  & li:first-child {
    font-size: 12px;
    color: ${(props) => props.theme.secundaryColor};
    font-weight: normal;
    display: inline;
    margin-right: 7px;
  }
  & li {
    font-size: 12px;
    color: ${(props) => props.theme.secundaryColor};
    font-weight: bold;
    display: inline;
    margin-right: 7px;
  }
`;
