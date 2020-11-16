import { createStore } from "redux";
import rootReducers from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

export const Store = createStore(
  rootReducers,
  /* preloadedState, */ devToolsEnhancer({})
  // Specify custom devTools options
);
