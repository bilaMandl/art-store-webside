import { combineReducers, createStore } from "redux";
import { ProductReducer } from "./productReducer";
import { UserReducer } from "./userReducer";

const reducer=combineReducers({ProductReducer,UserReducer})
export const store = createStore(reducer)
window.store=store;