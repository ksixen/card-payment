export const addCardItem = (state) => {
  return {
    type: "ADD_CARD_ITEM",
    payload: state,
  };
};

export const deleteCardItem = (state) => {
  return {
    type: "DELETE_CARD_ITEM",
    payload: state,
  };
};

export const updateCardItem = (state) => {
  return {
    type: "UPDATE_CARD_ITEM",
    payload: state,
  };
};
