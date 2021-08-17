import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import City from "./pages/City";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 papu">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
