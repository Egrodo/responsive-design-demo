import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/CarouselView.css';

class CarouselView extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
  }

  render() {
    const { title, blurb, image } = this.state;
    return (
      <div className="CarouselView">
        <div className="imgGradient">
          <img className="cover" src={image} alt={title} />
        </div>
        <div className="content">
          <h1 className="movieTitle">{title}</h1>
          <p className="blurb">
            {blurb}
          </p>
          <div className="btns">
            <button className="buy" type="button">
              <svg viewBox="0 0 200 200" alt="Play video">
                <circle cx="100" cy="100" r="90" fill="none" strokeWidth="15" stroke="white" />
                <polygon points="70, 55 70, 145 145, 100" fill="white" />
              </svg>
              <p>Buy Now</p>
            </button>
            <button className="watch" type="button">
              <p>Watch Now</p>
            </button>
          </div>
        </div>
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
