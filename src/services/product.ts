import { Produto } from "../interfaces/Produto";

export const getProduct = async (): Promise<Produto> => {
  const response = new Promise<Produto>(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        nome: "RASTEIRA TIRA DEDO",
        codigo: "RT 0568",
        codigo2: "03.07.0653",
        preco: 69.0,
        precoPromocional: 55.2,
        maxParcelas: 6,
        cores: [
          { nome: "Fucsia", codigo: "#A9095E" },
          { nome: "Azul", codigo: "#2A5A75" },
          { nome: "Marrom", codigo: "#A14830" },
          { nome: "Preto", codigo: "#000" },
        ],
        tamanhos: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
      });
    }, 3000);
  });

  return response;
};
