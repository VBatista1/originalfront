import React from "react";
import OriginalLogo from "../../assets/logo.png";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import {
  Container,
  Logo,
  List,
  ListItem,
  NavItem,
  SigUpAnchor,
  SigInAnchor,
  Nav,
  CategoriesAnchor,
} from "./styles";

function Header() {
  return (
    <Container>
      <Logo src={OriginalLogo} />
      <Nav>
        <NavItem>
          <List>
            <ListItem>
              <SigInAnchor>Entrar</SigInAnchor>
            </ListItem>
            <ListItem>
              <SigUpAnchor>Cadastrar-se</SigUpAnchor>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <CategoriesAnchor>SAPATOS</CategoriesAnchor>
            </ListItem>
            <ListItem>
              <CategoriesAnchor>BOLSAS</CategoriesAnchor>
            </ListItem>
            <ListItem>
              <CategoriesAnchor>ACESSÓRIOS</CategoriesAnchor>
            </ListItem>
            <ListItem>
              <CategoriesAnchor>OFF</CategoriesAnchor>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <SearchBar />
            </ListItem>
            <ListItem>
              <Cart />
            </ListItem>
          </List>
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Header;
