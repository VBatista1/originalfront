import { ProductActions } from "../actions/ProductActions";
import { Produto } from "../../interfaces/Produto";

type ProductState = {
  produto: Produto;
};

const initialState: ProductState = {
  produto: {
    nome: "",
    codigo: "",
    codigo2: "",
    preco: 0,
    precoPromocional: 0,
    maxParcelas: 0,
    cores: [],
    tamanhos: [],
  },
};

const ProductReducer = (
  state: ProductState = initialState,
  action: ProductActions
) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        produto: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
