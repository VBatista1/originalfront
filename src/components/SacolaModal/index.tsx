import React, { Dispatch, useEffect, useState } from "react";
import CloseIcon from "../../assets/CloseIcon.png";
import CloseIcon2 from "../../assets/CloseIcon2.png";
import MinusIcon from "../../assets/MinusIcon.png";
import PlusIcon from "../../assets/PlusIcon.png";
import ProductImage from "../../assets/ProdutoImage.png";
import {
  SacolaContainer,
  SacolaContent,
  SacolaHeader,
  ProductItem,
  SacolaFooter,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/index";
import { SacolaActions } from "../../redux/actions/SacolaActions";
import { Sacola } from "../../interfaces/Sacola";

interface props {
  status: boolean;
  handleStatusModal: () => void;
}

function SacolaModal(props: props) {
  const sacolaDispatch = useDispatch<Dispatch<SacolaActions>>();
  const { produtos } = useSelector((state: AppState) => state.sacola);
  const [totalSacola, setTotalSacola] = useState<number>(0);

  function addQuantity(index: number) {
    sacolaDispatch({
      type: "INCREMENT_PRODUCT",
      payload: index,
    });
  }

  function removeQuantity(index: number) {
    sacolaDispatch({
      type: "DECREMENT_PRODUCT",
      payload: index,
    });
  }

  function deleteItem(index: number) {
    sacolaDispatch({
      type: "DELETE_PRODUCT",
      payload: index,
    });
  }

  function handleTotal() {
    let total: number = 0;
    produtos.map((produto, index) => {
      total += produto.preco * produto.quantidade;
      if (index === produtos.length - 1) setTotalSacola(total);
    });
  }

  function displayProdutos() {
    const itens = produtos.map((produto: Sacola, index: number) => {
      return (
        <ProductItem key={index}>
          <img alt="Imagem do produto" src={ProductImage} />
          <div>
            <p>{produto.nome}</p>
            <p>
              R${" "}
              {produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div>
            <button onClick={() => removeQuantity(index)}>
              <img alt="Ícone de subtração" src={MinusIcon} />
            </button>
            <p>{produto.quantidade}</p>
            <button onClick={() => addQuantity(index)}>
              <img alt="Ícone de adição" src={PlusIcon} />
            </button>
          </div>
          <div>
            <button onClick={() => deleteItem(index)}>
              <img alt="Ícone de remoção" src={CloseIcon2} />
            </button>
          </div>
        </ProductItem>
      );
    });
    return itens;
  }

  useEffect(() => {
    if (produtos.length > 0) {
      handleTotal();
    } else {
      setTotalSacola(0);
    }
  }, [produtos]);

  return (
    <SacolaContainer status={props.status}>
      <SacolaContent>
        <div>
          <button onClick={props.handleStatusModal}>
            <img alt="Ícone de fechamento" src={CloseIcon} />
          </button>
        </div>
        <SacolaHeader>
          <div>
            <p>SACOLA</p>
            <p>{produtos.length} itens</p>
          </div>
        </SacolaHeader>
        {displayProdutos()}
        <SacolaFooter>
          <div>
            <p>
              Faltam R$ 40,00 para você <span>Ganhar Frete Grátis</span>
            </p>
          </div>
          <div>
            <div>
              <p>
                Total: R${" "}
                {totalSacola.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>
                até 3x de R${" "}
                {(totalSacola / 3).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                sem juros
              </p>
            </div>
            <div>
              <button onClick={props.handleStatusModal}>
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </SacolaFooter>
      </SacolaContent>
    </SacolaContainer>
  );
}

export default SacolaModal;
