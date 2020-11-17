import React from "react";
import OriginalLogo from "../../assets/LogoWhite.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import PinterestLogo from "../../assets/PinterestLogo.png";
import PlusIcon from "../../assets/PlusIcon2.png";
import VtexCertified from "../../assets/VtexCertified.png";
import SeloEbit from "../../assets/SeloEbit.png";
import {
  FooterContainer,
  Copyright,
  RedeSociais,
  Rodape,
  Newsletter,
  InfoMobile,
  Info,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <InfoMobile>
        <li>
          INSTITUCIONAL
          <img src={PlusIcon} />
        </li>
        <li>
          INFORMAÇÕES
          <img src={PlusIcon} />
        </li>
        <li>
          CONHEÇA
          <img src={PlusIcon} />
        </li>
      </InfoMobile>
      <RedeSociais>
        <div>
          <img src={FacebookLogo} />
          <img src={InstagramLogo} />
          <img src={PinterestLogo} />
        </div>
      </RedeSociais>
      <Rodape>
        <div>
          <div>
            <img src={VtexCertified} />
            <img src={SeloEbit} />
          </div>
          <div>
            <div>
              <Info>
                <li>INSTITUCIONAL</li>
                <li>A Marca</li>
                <li>Lojas</li>
                <li>Contato</li>
              </Info>
            </div>
            <div>
              <Info>
                <li>INFORMAÇÕES</li>
                <li>Formas de Pagamento</li>
                <li>Trocas e Devoluções</li>
                <li>Cuidados Com O Produto</li>
              </Info>
            </div>
            <div>
              <Info>
                <li>CONHEÇA</li>
                <li>Franquias e Multimarcas</li>
                <li>Trabalhe com a Gente</li>
                <li>Procon-RJ</li>
              </Info>
            </div>
          </div>
          <Newsletter>
            <p>ASSINE NOSSA NEWS</p>

            <input id="nome" placeholder="Nome" />
            <label htmlFor="nome">Nome</label>

            <input id="email" placeholder="Email" />
            <label htmlFor="email">Email</label>

            <button>ENVIAR</button>
          </Newsletter>
        </div>
      </Rodape>
      <Copyright>
        <div>
          <p>
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das
            Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de
            Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E:
            86.732.548 - E-mail: ecommerce@viamia.com.br
          </p>
          <img src={OriginalLogo} />
        </div>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
