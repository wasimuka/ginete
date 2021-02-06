import { createStore,combineReducers, compose } from "redux";

import gallery from "./reducers/gallery";

const combinedStore = combineReducers({Gallery: gallery});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedStore, composeEnhancer());

export default store;