import React, { useState } from "react";
import CartIcon from "../../assets/CartIcon.svg";
import CartIcon2 from "../../assets/CartIcon2.png";
import SacolaModal from "../SacolaModal";
import { Icon, CartCount, CartContainer } from "./styles";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/index";

interface props {
  mobile?: boolean;
}

function Cart(props: props) {
  const { produtos } = useSelector((state: AppState) => state.sacola);
  const [statusModal, setStatusModal] = useState(false);

  function handleStatusModal() {
    setStatusModal(!statusModal);
  }

  return (
    <CartContainer mobile={props.mobile ? props.mobile : false}>
      <div onClick={handleStatusModal}>
        <Icon src={CartIcon} />
        <Icon src={CartIcon2} />
        <CartCount>{produtos.length}</CartCount>
      </div>
      <SacolaModal status={statusModal} handleStatusModal={handleStatusModal} />
    </CartContainer>
  );
}

export default Cart;
