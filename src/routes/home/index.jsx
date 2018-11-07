import React, { Component } from "react";
import TabMenu from "../../components/tabMenu";
import RenderToBody from "../../components/renderToBody";
import TopBar from "./components/TopBar";
import Slide from "./components/Slide";
import MovieItem from "./components/MovieItem";
import CityLayer from "./components/cityLayer";
import request from '../../helpers/resquest';
import "./index.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '', // 当前城市
      poster: [], // slide 海报
      movie: [], // 当前热映电影
      cityLayerVisible: false // 城市浮层是否展现
    };
    this.showCityLayer = () => {
     this.setState({
       cityLayerVisible: true
     });
    };
    this.hiddenCityLayer = () => {
      this.setState({
        cityLayerVisible: false
      });
    };
    this.onChangeCity = (city) => {
      this.setState({
        city,
      });
      this.hiddenCityLayer();
    };
  }

  componentWillMount() {
    this.getData();
    // this.getCity();
  }

  async getData() {
    const data = await request('/index');
    const {city, poster, movie} = data
    this.setState({
      city,
      poster,
      movie
    });
  }

  // async getCity() {
  //   const data = await request('/city');
  // }
  render() {
    const { city, poster, movie, cityLayerVisible } = this.state;

    return (
      <div className="home">
        <TopBar city={ city } showCityLayer={this.showCityLayer} />
        <div className="home__slide">
          <div className="home__slideWrap">
            <Slide data={poster} />
          </div>
        </div>
        <ul className="home__content">
          { movie.map(item => <li key={ item.name}><MovieItem data={ item }/></li>) }
        </ul>
        <TabMenu current="movie" />
        { cityLayerVisible && <RenderToBody><CityLayer onClose={this.hiddenCityLayer} onSelect={this.onChangeCity}/></RenderToBody> }
      </div>
    );
  }
}

Home.PropTypes = {};
