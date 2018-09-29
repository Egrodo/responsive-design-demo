import React, { Component } from 'react';
import carouselData from '../carouselData';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = props.moviesArray;

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Carousel.proptypes = {
  moviesArray: 
};

Carousel.defaultProps = {

};

export default Carousel;
