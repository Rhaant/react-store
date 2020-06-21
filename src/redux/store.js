import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

const midddlewares = [];

if(process.env.NODE_ENV === 'development') {
  midddlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...midddlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
