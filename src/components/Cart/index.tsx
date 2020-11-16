import React, { useState } from "react";
import CartIcon from "../../assets/CartIcon.svg";
import SacolaModal from "../SacolaModal";
import { Icon, CartCount, CartContainer } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/index";

function Cart() {
  const { produtos } = useSelector((state: AppState) => state.sacola);
  const [statusModal, setStatusModal] = useState(false);

  function handleStatusModal() {
    setStatusModal(!statusModal);
  }

  return (
    <CartContainer>
      <div onClick={handleStatusModal}>
        <Icon src={CartIcon} />
        <CartCount>{produtos.length}</CartCount>
      </div>
      <SacolaModal status={statusModal} handleStatusModal={handleStatusModal} />
    </CartContainer>
  );
}

export default Cart;
