import { combineReducers } from "redux";
import product from "./product";
import sacola from "./sacola";
const rootReducer = combineReducers({
  product: product,
  sacola: sacola,
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
