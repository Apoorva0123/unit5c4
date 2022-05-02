export const REPAIR_DATA = "REPAIR_DATA";

// Action Creator
export const handleData = (data) => {
  return {
    type: REPAIR_DATA,
    payload: data,
  };
};
