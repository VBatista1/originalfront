import React from "react";
import ProductImage from "../../assets/ProdutoImage.png";
import UpArrow from "../../assets/UpArrow.png";
import DownArrow from "../../assets/DownArrow.png";
import Video from "../../assets/Vídeo.png";
import { GalleryContainer, Title } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/index";

function Gallery() {
  const { produto } = useSelector((state: AppState) => state.product);
  return (
    <GalleryContainer>
      <div>
        <p>Vídeo</p>
        <img alt="Imagem do vídeo" src={Video} />
        <button>
          <img alt="Icone de movimentação para cima" src={UpArrow} />
        </button>
        <img alt="Imagem do produto" src={ProductImage} />
        <img alt="Imagem do produto" src={ProductImage} />
        <img alt="Imagem do produto" src={ProductImage} />
        <img alt="Imagem do produto" src={ProductImage} />
        <button>
          <img alt="Icone de movimentação para baixo" src={DownArrow} />
        </button>
      </div>
      <div>
        <Title>
          <p>{produto.nome}</p>
          <p>
            {produto.codigo} | {produto.codigo2}
          </p>
        </Title>
        <img alt="Imagem do Produto" src={ProductImage} />
      </div>
    </GalleryContainer>
  );
}

export default Gallery;
