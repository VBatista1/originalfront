import { Produto } from "../../interfaces/Produto";

export interface ISetProductAction {
  readonly type: "SET_PRODUCT";
  payload: Produto;
}

export type ProductActions = ISetProductAction;
