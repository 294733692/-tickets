import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Slide.css";

const PosterSlide = ({ data }) => {
  const settings = {
    dots: true,
    autoplay: true,
    className: "posterSlide",
    dotsClass: "posterSlide__dots"
  };
  return (
    <Slider {...settings}>
      {/* data.map() */}
      <div>
        <img
          className="posterSlide__image"
          src="/source/slide/slide1.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlide__image"
          src="/source/slide/slide2.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlide__image"
          src="/source/slide/slide3.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlide__image"
          src="/source/slide/slide4.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="posterSlide__image"
          src="/source/slide/slide5.jpeg"
          alt=""
        />
      </div>
    </Slider>
  );
};
Slider.propTypes = {
  data: PropTypes.string.isReuired
};

export default PosterSlide;
