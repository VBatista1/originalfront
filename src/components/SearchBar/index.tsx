import React from "react";
import SearchIcon from "../../assets/SearchIcon.png";
import { Icon, SearchInput, SearchContainer } from "./styles";

function SearchBar() {
  return (
    <SearchContainer>
      <Icon src={SearchIcon} />
      <SearchInput placeholder="Buscar" />
    </SearchContainer>
  );
}

export default SearchBar;
