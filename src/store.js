import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import baskettReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import restaurantsReducer from "./reducers/restaurantReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: baskettReducer,
  restaurants: restaurantsReducer,
});

//applymiddleleware herhanhi bir arayazılımı redux'a dahil etmeye yarar biz burda thunk dahil etmek için kullandık artık thunk aksiyonları yazabileceğiz

export default createStore(rootReducer, applyMiddleware(thunk));
