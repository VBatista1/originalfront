import React from "react";
import OriginalLogo from "../../assets/LogoWhite.png";
import FacebookLogo from "../../assets/FacebookLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import PinterestLogo from "../../assets/PinterestLogo.png";
import VtexCertified from "../../assets/VtexCertified.png";
import SeloEbit from "../../assets/SeloEbit.png";
import {
  FooterContainer,
  Copyright,
  RedeSociais,
  Rodape,
  Newsletter,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
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
            <ul>
              <li>INSTITUCIONAL</li>
              <li>A Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>INFORMAÇÕES</li>
              <li>Formas de Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Cuidados Com O Produto</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>CONHEÇA</li>
              <li>Franquias e Multimarcas</li>
              <li>Trabalhe com a Gente</li>
              <li>Procon-RJ</li>
            </ul>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            molestie massa in nunc condimentum, vel placerat lacus pulvinar.
            Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
            semper leo nec tellus gravida faucibus.
          </p>
          <img src={OriginalLogo} />
        </div>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
