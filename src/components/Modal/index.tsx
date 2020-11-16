import React from "react";
import CloseIcon from "../../assets/CloseIcon.png";
import ProductImage from "../../assets/ProdutoImage.png";
import { ModalContainer, ModalContent } from "./styles";

interface props {
  status: boolean;
  handleStatusModal: () => void;
}

function Modal(props: props) {
  return (
    <ModalContainer status={props.status}>
      <ModalContent>
        <div>
          <button onClick={props.handleStatusModal}>
            <img src={CloseIcon} />
          </button>
        </div>
        <img src={ProductImage} />
        <p>PRODUTO ADICIONADO COM SUCESSO!</p>
        <button>FINALIZAR COMPRA</button>
        <a href="#" onClick={props.handleStatusModal}>
          Continuar Comprando
        </a>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
