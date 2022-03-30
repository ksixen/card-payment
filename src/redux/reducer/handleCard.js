const initialStore = [];

const handleCart = (state = initialStore, action) => {
  const payload = action.payload;

  const isExist = state.find((p) => p["cc-number"] === payload["cc-number"]);
  const findIndex = state.findIndex(
    (p) => p["cc-number"] === payload["cc-number"]
  );

  switch (action.type) {
    case "ADD_CARD_ITEM":
      if (isExist) {
        throw Error;
      } else {
        return [...state, payload];
      }
    case "DELETE_CARD_ITEM":
      break;
    case "UPDATE_CARD_ITEM":
      break;
    default:
      return state;
  }
};

export default handleCart;
