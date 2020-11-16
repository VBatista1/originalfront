import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  padding: 26px 0px;
  width: fit-content;
`;

export const Nav = styled.nav`
  border-top: 1px solid ${(props) => props.theme.navBorder};
  border-bottom: 1px solid ${(props) => props.theme.navBorder};
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.theme.widthContainer};
  justify-content: space-between;
`;

export const SigInAnchor = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  padding-right: 10px;
  border-right: 1px solid ${(props) => props.theme.fontColor};
`;

export const SigUpAnchor = styled.a`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  padding-left: 10px;
`;

export const CategoriesAnchor = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  padding-right: 50px;
`;
