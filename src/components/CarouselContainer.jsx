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
    Carousel container which renders all of the views side by side.
    When you click an arrow (or after x seconds), move the view to the right or left appropriately.
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
