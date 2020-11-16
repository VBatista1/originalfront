import { SacolaActions } from "../actions/SacolaActions";
import { Sacola } from "../../interfaces/Sacola";

type SacolaState = {
  produtos: Sacola[];
};

const initialState: SacolaState = {
  produtos: [],
};

const SacolaReducer = (
  state: SacolaState = initialState,
  action: SacolaActions
) => {
  switch (action.type) {
    case "ADD_SACOLA":
      return {
        ...state,
        produtos: [...state.produtos, action.payload],
      };
    case "INCREMENT_PRODUCT":
      return {
        ...state,
        produtos: state.produtos.map((content, i) =>
          i === action.payload
            ? { ...content, quantidade: content.quantidade + 1 }
            : content
        ),
      };
    case "DECREMENT_PRODUCT":
      return {
        ...state,
        produtos: state.produtos.map((content, i) =>
          i !== action.payload
            ? content
            : content.quantidade > 1
            ? { ...content, quantidade: content.quantidade - 1 }
            : content
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        produtos: state.produtos.filter((content, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default SacolaReducer;
