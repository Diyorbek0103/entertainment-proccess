import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Movies } from "./pages/Movies/Movies";
import { Search } from "./pages/Search/Search";
import { Series } from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import { Header } from "./components/Header/Header";
import { Info } from "./pages/Info/Info";
import { getMoviesGenresData, getSeriesGenresData } from "./redux/actions/entertainmentActions";
import "./App.css"
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux/es/exports";

// import SiteLoader from "./components/SiteLoader/SiteLoader";
export default function App() {
  const dispatch=useDispatch();
  // const [loading,setLoading]=useState(true);
  useEffect(() => {
 
 
    dispatch(getMoviesGenresData("movie"));
    dispatch(getSeriesGenresData("tv"))

  }, [])

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
