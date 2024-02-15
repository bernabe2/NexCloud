import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Redux/store"; 

import "./App.css";
import HomePage from "./home/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SeriesPage from "./components/SeriesPage";
import MoviesPage from "./components/MoviesPage";
import Pages from "./components/Pages";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/series" component={SeriesPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/pages" component={Pages} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
