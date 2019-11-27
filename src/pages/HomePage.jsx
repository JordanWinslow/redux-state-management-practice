import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => (
  <div className="jumbotron">
    <h1>Learn React Router & Redux by Building This Website</h1>
    <p>
      I created this website to be as simple as possible in order to demonstrate
      how to set up the most common 3 libraries for enterprise-level
      applications in JavaScript.
    </p>
    <ul>
      <li>React</li>
      <li>React Router</li>
      <li>Redux</li>
    </ul>
    <p>
      It also uses simple bootstrap classes for styling so you don't have to
      think about styling.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
)

export default HomePage
