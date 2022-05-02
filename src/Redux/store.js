import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/reducer";
import { orderReducer } from "./Data/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: orderReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
