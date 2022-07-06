import React from "react";
import { Route, Switch } from "react-router-dom";
import { Movies } from "./pages/Movies/Movies";
import { Search } from "./pages/Search/Search";
import { Series } from "./pages/Series/Series";
import { Trending } from "./pages/Trending/Trending";
import { Header } from "./components/Header/Header";
import "./App.css"
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
      <Footer/>
    </>
  );
}
