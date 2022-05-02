import { REPAIR_DATA } from "./action";

const init = {
  data: {},
};

export const orderReducer = (store = init, { type, payload }) => {
  switch (type) {
    case REPAIR_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};
