import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div className="CarouselContainer">
        <CarouselView item={moviesArray[0]} />
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
