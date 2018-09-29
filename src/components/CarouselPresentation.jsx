import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselView from './CarouselView';

class CarouselPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesArray: props.moviesArray,
    };
  }

  /*
    Carousel container which renders all of the views side by side. When you click an arrow (or after x seconds),
    move the view to the right or left appropriately.
  */
  render() {
    const { moviesArray } = this.state;
    return (
      <div className="CarouselPresentation">
        <CarouselView item={moviesArray[0]} />
      </div>
    );
  }
}

CarouselPresentation.propTypes = {
  moviesArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

CarouselPresentation.defaultProps = {
  moviesArray: [],
};

export default CarouselPresentation;
