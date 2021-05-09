import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import covidDataReducer from "./covidData";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";

// Persistor Configuration to whitelist and blacklist any reducer
const persistConfig = {
  key: "root",
  storage: storage
};

const combinedReducer = combineReducers({
    covidDataReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
window.store = store;
export const persistor = persistStore(store);