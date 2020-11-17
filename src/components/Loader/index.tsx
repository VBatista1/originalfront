import React from "react";
import LoadingGif from "../../assets/loading.gif";
import { LoaderContainer } from "./styles";

interface props {
  status: boolean;
}

export default function Loader(props: props) {
  return (
    <LoaderContainer status={props.status}>
      <img alt="Ícone de carregamento" src={LoadingGif} />
    </LoaderContainer>
  );
}
