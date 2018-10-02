import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CarouselView from './CarouselView';
import '../css/CarouselContainer.css';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesArray: props.moviesArray,
    };
  }

  /*
    Using React port of Slick carousel library for deadline efficiency. Could implement custom carousel if
    I had the time, here's one I've coded previously https://github.com/Egrodo/giphyreact/blob/master/src/Search.jsx
  */

  render() {
    const { moviesArray } = this.state;
    const settings = {
      infinite: true,
      dots: true,
      autoplay: true,
      speed: 500,
      lazyLoad: 'progressive',
    };
    return (
      <div className="CarouselContainer">
        <Slider {...settings}>
          {moviesArray.map(item => <CarouselView item={item} key={item.title} />)}
        </Slider>
      </div>
    );
  }
}

CarouselContainer.propTypes = {
  moviesArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

CarouselContainer.defaultProps = {
  moviesArray: [],
};

export default CarouselContainer;
