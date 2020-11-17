import React from "react";
import Prod1 from "../../assets/Prod1.png";
import Prod2 from "../../assets/Prod2.png";
import Prod3 from "../../assets/Prod3.png";
import Prod4 from "../../assets/Prod4.png";
import LeftArrow from "../../assets/LeftArrow.png";
import RightArrow from "../../assets/RightArrow.png";
import { RecommendationsContainer, ColorRound, Item } from "./styles";

function Recommendations() {
  return (
    <RecommendationsContainer>
      <p>QUEM VIU, VIU TAMBÉM</p>
      <div>
        <Item index={1}>
          <img alt="Imagem do produto" src={Prod1} />
          <div>
            <p>R$ 204,90</p>
            <div>
              <ColorRound color="#A9095E" />
              <ColorRound color="#6B85C1" />
              <ColorRound color="#A14830" />
              <ColorRound color="#000000" />
            </div>
          </div>
        </Item>
        <Item index={2}>
          <img alt="Imagem do produto" src={Prod2} />
          <div>
            <p>R$ 204,90</p>
            <div>
              <ColorRound color="#A9095E" />
              <ColorRound color="#6B85C1" />
              <ColorRound color="#A14830" />
              <ColorRound color="#000000" />
            </div>
          </div>
        </Item>
        <Item index={3}>
          <img alt="Imagem do produto" src={Prod3} />
          <div>
            <p>R$ 204,90</p>
            <div>
              <ColorRound color="#A9095E" />
              <ColorRound color="#6B85C1" />
              <ColorRound color="#A14830" />
              <ColorRound color="#000000" />
            </div>
          </div>
        </Item>
        <Item index={4}>
          <img alt="Imagem do produto" src={Prod4} />
          <div>
            <p>R$ 204,90</p>
            <div>
              <ColorRound color="#A9095E" />
              <ColorRound color="#6B85C1" />
              <ColorRound color="#A14830" />
              <ColorRound color="#000000" />
            </div>
          </div>
        </Item>
      </div>
      <div>
        <button>
          <img alt="Seta para esquerda" src={LeftArrow} />
        </button>
        <p>1 de 3</p>
        <button>
          <img alt="Seta para direita" src={RightArrow} />
        </button>
      </div>
    </RecommendationsContainer>
  );
}

export default Recommendations;
