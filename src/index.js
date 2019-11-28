import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import configureStore from "./redux/configureStore"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
)
