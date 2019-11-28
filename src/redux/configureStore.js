import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import { persistStore } from "redux-persist"

import rootReducer from "./reducers/rootReducer"

const middlewares = [reduxImmutableStateInvariant()] // Warns us any time we try to mutate state
// the reason we create a configureStore function instead of just the store itself is so we can REHYDRATE our app data!
const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)) // composeWithDevTools enables the chrome dev tools extension
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
