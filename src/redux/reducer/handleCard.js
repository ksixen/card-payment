const initialStore = {
  cards: [],
  error: false,
};

const handleCart = (state = initialStore, action) => {
  const payload = action.payload;

  const cards = initialStore.cards;

  const isExist = cards.find((p) => p.card === payload.card);
  const findIndex = cards.findIndex((p) => p.id === payload.id);

  switch (action.type) {
    case "ADD_CARD_ITEM":
      if (isExist) {
        return { ...state, error: true };
      } else {
        return [...cards, payload];
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
