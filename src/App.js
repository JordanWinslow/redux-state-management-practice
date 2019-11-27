import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header"
import PageNotFound from "./pages/404"
import CoursesPage from "./pages/CoursesPage"

function App() {
  return (
    <div id="App" className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App
