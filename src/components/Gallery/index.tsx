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
        <img src={Video} />
        <button>
          <img src={UpArrow} />
        </button>
        <img src={ProductImage} />
        <img src={ProductImage} />
        <img src={ProductImage} />
        <img src={ProductImage} />
        <button>
          <img src={DownArrow} />
        </button>
      </div>
      <div>
        <Title>
          <p>{produto.nome}</p>
          <p>
            {produto.codigo} | {produto.codigo2}
          </p>
        </Title>
        <img src={ProductImage} />
      </div>
    </GalleryContainer>
  );
}

export default Gallery;
