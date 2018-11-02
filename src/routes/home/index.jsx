import React, { Component } from "react";
import TabMenu from "../../components/tabMenu";
import RenderToBody from "../../components/renderToBody";
import TopBar from "./components/TopBar";
import Slide from "./components/Slide";
import MovieItem from "./components/MovieItem";
import CityLayer from "./components/cityLayer";
import "./index.css";

export default class Home extends Component {
  showCityLayer() {
    console.log("show city layer");
  }
  render() {
    return (
      <div className="home">
        <TopBar city="杭州" showCityLayer={this.showCityLayer} />
        <div className="home__slide">
          <div className="home__slideWrap">
            <Slide data={[]} />
          </div>
        </div>
        <ul className="home__content">
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
        </ul>
        <TabMenu current="movie" />
        <RenderToBody><CityLayer /></RenderToBody>
      </div>
    );
  }
}

Home.PropTypes = {};
