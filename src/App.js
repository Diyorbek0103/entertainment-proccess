import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Movies } from "./pages/Movies/Movies";
import { Search } from "./pages/Search/Search";
import { Series } from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import { Header } from "./components/Header/Header";
import { Info } from "./pages/Info/Info";
import "./App.css"
import Footer from "./components/Footer/Footer";
// import SiteLoader from "./components/SiteLoader/SiteLoader";
export default function App() {
  // const [loading,setLoading]=useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000);

  // }, [])

  // if(loading){
  //   return(
  //    <SiteLoader/>
  //   )

  // }
  
  return (
    <>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/info/:type/:id" component={Info} />
        </Switch>
      </div>
      <Footer/>
    </>
  );
}
