import React, { Component } from "react";
import PropTypes from "prop-types";
import TopBar from "./components/TopBar";
import Slide from "./components/Slide";
import MovieItem from "./components/MovieItem";
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
          <li><MovieItem /></li>
          <li><MovieItem /></li>
          <li><MovieItem /></li>
        </ul>
      </div>
    );
  }
}

Home.PropTypes = {};
