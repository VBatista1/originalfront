import { Sacola } from "../../interfaces/Sacola";

export interface AddSacolaAction {
  readonly type: "ADD_SACOLA";
  payload: Sacola;
}

export interface IncrementAction {
  readonly type: "INCREMENT_PRODUCT";
  payload: number;
}

export interface DecrementAction {
  readonly type: "DECREMENT_PRODUCT";
  payload: number;
}

export interface DeleteAction {
  readonly type: "DELETE_PRODUCT";
  payload: number;
}

export type SacolaActions =
  | AddSacolaAction
  | IncrementAction
  | DecrementAction
  | DeleteAction;
