import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Pages from "./components/Pages"
import SeriesPage from "./components/SeriesPage"
import MoviesPage from "./components/MoviesPage"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"

function App() {
  return (
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
  );
}

export default App;
