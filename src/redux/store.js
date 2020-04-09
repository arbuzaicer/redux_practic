import { combineReducers, createStore } from "redux";
import homeReducer from "./reducers/home.reducer";
import contactsReducer from "./reducers/contacts.reducer";

const reducers = combineReducers({
  homeReducer,
  contactsReducer,
});

const store = createStore(reducers);

window.globalState = store.getState();

export default store;
