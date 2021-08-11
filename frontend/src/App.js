import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 papu">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
