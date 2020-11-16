import React, { useEffect, useState, Dispatch } from "react";
import Modal from "../../components/Modal";
import {
  DescriptionContainer,
  Title,
  Price,
  Color,
  Size,
  ColorRound,
  TamanhoSelect,
} from "./styles";
import { AppState } from "../../redux/reducers/index";
import { Cores } from "../../interfaces/Cores";
import { SacolaActions } from "../../redux/actions/SacolaActions";
import { useDispatch, useSelector } from "react-redux";

function ProductDescription() {
  const sacolaDispatch = useDispatch<Dispatch<SacolaActions>>();
  const { produto } = useSelector((state: AppState) => state.product);
  const [statusModal, setStatusModal] = useState<boolean>(false);
  const [color, setColor] = useState<Cores>({ nome: "", codigo: "" });
  const [tamanho, setTamanho] = useState<number>(0);

  function handleStatusModal() {
    setStatusModal(!statusModal);
  }

  function handleChangeColor(index: number) {
    setColor(produto.cores[index]);
  }

  function displayCores(): React.ReactNode {
    const cores = produto.cores.map((cor: Cores, index: number) => {
      return (
        <ColorRound
          onClick={() => handleChangeColor(index)}
          key={index}
          color={cor.codigo}
          active={cor === color}
        />
      );
    });
    return cores;
  }

  function handleChangeTamanho(index: number) {
    setTamanho(produto.tamanhos[index]);
  }

  function displayTamanho(): React.ReactNode {
    const tamanhos = produto.tamanhos.map((tam: number, index: number) => {
      return (
        <TamanhoSelect
          key={index}
          active={tam === tamanho}
          onClick={() => handleChangeTamanho(index)}
        >
          <p>{tam}</p>
        </TamanhoSelect>
      );
    });
    return tamanhos;
  }

  function addSacola() {
    sacolaDispatch({
      type: "ADD_SACOLA",
      payload: {
        nome: produto.nome,
        preco: produto.precoPromocional,
        quantidade: 1,
      },
    });
    handleStatusModal();
  }

  useEffect(() => {
    if (produto) {
      setColor(produto.cores[0]);
      setTamanho(produto.tamanhos[0]);
    }
  }, [produto]);

  return (
    <DescriptionContainer>
      <Title>
        <p>{produto.nome}</p>
        <p>
          {produto.codigo} | {produto.codigo2}
        </p>
      </Title>
      <Price>
        <p>
          <span>
            R${" "}
            {produto.preco.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            |
          </span>{" "}
          R${" "}
          {produto.precoPromocional.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p>
          Ou {produto.maxParcelas}x de R${" "}
          {(produto.precoPromocional / produto.maxParcelas).toLocaleString(
            "pt-BR",
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}
        </p>
      </Price>
      <Color>
        <p>
          Cor: <span>({color ? color.nome : null})</span>
        </p>
        <div>{displayCores()}</div>
      </Color>
      <Size>
        <div>
          <p>
            Tamanho: <span>({tamanho})</span>
          </p>
          <a href="#">Guia de Medidas</a>
        </div>
        <div>{displayTamanho()}</div>
      </Size>
      <button onClick={addSacola}>ADICIONAR À SACOLA</button>
      <p>
        Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui
        sola sempre na cor do cabedal.
      </p>
      <Modal status={statusModal} handleStatusModal={handleStatusModal} />
    </DescriptionContainer>
  );
}

export default ProductDescription;
