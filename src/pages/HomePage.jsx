import React from "react"
import { Link } from "react-router-dom"
import { Tab, Row, Col, ListGroup } from "react-bootstrap"

const HomePage = () => (
  <div className="jumbotron">
    <h1>Practice Makes Perfect</h1>
    <p>
      This time completely from memory. Set up Redux, Router, Action Creators &
      Dev Tools Middleware, then styled with basic bootstrap
    </p>
    <br />
    <h3>Made With:</h3>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#react">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#react">
              React
            </ListGroup.Item>
            <ListGroup.Item action href="#redux">
              Redux
            </ListGroup.Item>
            <ListGroup.Item action href="#router">
              React Router
            </ListGroup.Item>
            <ListGroup.Item action href="#bootstrap">
              React Bootstrap
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col
          sm={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #AAAAAA",
            padding: "2rem"
          }}
        >
          <Tab.Content>
            <Tab.Pane eventKey="#react">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </Tab.Pane>
            <Tab.Pane eventKey="#redux">
              Redux helps you write applications that behave consistently, run
              in different environments (client, server, and native), and are
              easy to test.
            </Tab.Pane>
            <Tab.Pane eventKey="#router">
              React Router is a collection of navigational components that
              compose declaratively with your application. Whether you want to
              have bookmarkable URLs for your web app or a composable way to
              navigate in React Native, React Router works wherever React is
              rendering
            </Tab.Pane>
            <Tab.Pane eventKey="#bootstrap">
              React-Bootstrap replaces the Bootstrap JavaScript. Each component
              has been built from scratch as a true React component, without
              unneeded dependencies like jQuery.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </div>
)

export default HomePage
