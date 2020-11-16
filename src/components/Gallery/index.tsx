import React from "react";
import ProductImage from "../../assets/ProdutoImage.png";
import UpArrow from "../../assets/UpArrow.png";
import DownArrow from "../../assets/DownArrow.png";
import Video from "../../assets/Vídeo.png";
import { GalleryContainer } from "./styles";

function Gallery() {
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
      <img src={ProductImage} />
    </GalleryContainer>
  );
}

export default Gallery;
