import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_IMAGE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.url !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      }
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store, false);

export { store, persistor };
