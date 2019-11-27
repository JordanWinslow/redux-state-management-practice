import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "./redux/configureStore"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"

const REHYDRATE_STATE = {
  totalCourses: 1,
  courses: { 1: { title: "Demo Course" } } // this could come from local storage or backend.
}

const store = configureStore(REHYDRATE_STATE)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
