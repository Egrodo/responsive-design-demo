import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.item,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}

CarouselView.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

CarouselView.defaultProps = {
  item: {
    title: '',
    blurb: '',
    image: null,
  },
};

export default CarouselView;
