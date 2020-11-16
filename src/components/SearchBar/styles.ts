import styled from "styled-components";

export const Icon = styled.img`
  padding-right: 17px;
  padding-bottom: 10px;
`;

export const SearchInput = styled.input`
  border: none;
  width: 42px;
  padding-bottom: 10px;
  outline: none;
`;

export const SearchContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
  width: 83px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
