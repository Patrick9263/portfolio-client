import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./Home/Home";
import About from "./About/About";
import Career from "./Career/Career";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import "./App.scss";

// https://github.com/FormidableLabs/react-animations

const routes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/career", Component: Career },
  { path: "/education", Component: Education },
  { path: "/projects", Component: Projects },
  { path: "/contact", Component: Contact },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
    </BrowserRouter>
  );
};

export default App;
