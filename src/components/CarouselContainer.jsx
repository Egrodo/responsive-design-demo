import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CarouselView from './CarouselView';
import '../css/CarouselContainer.css';

const CarouselContainer = (props) => {
  /*
    I'm using React port of Slick carousel library for deadline efficiency.
    I could implement a custom carousel if I had the time, here's one I've coded previously:
    https://github.com/Egrodo/giphyreact/blob/master/src/Search.jsx
  */

  const settings = {
    infinite: true,
    dots: true,
    // autoplay: true,
    speed: 500,
    lazyLoad: 'progressive',
  };

  const { moviesArray } = props;
  return (
    <div className="CarouselContainer">
      <Slider {...settings}>
        {moviesArray.map(item => <CarouselView key={item.title} {...item} />)}
      </Slider>
    </div>
  );
};

CarouselContainer.propTypes = {
  moviesArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

CarouselContainer.defaultProps = {
  moviesArray: [],
};

export default CarouselContainer;
