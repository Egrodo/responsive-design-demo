import React from 'react';
import PropTypes from 'prop-types';
import '../css/CarouselView.css';

const CarouselView = (props) => {
  /* TODO: Need to move around the content in jsx too.
    I'm thinking header, img, desc, btns.
    Make 'small view', maybe use same event listener as other?
    Use same event listener, drill smallScreen down to CarouselView.
  */
  const { title, blurb, image } = props;
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
};

CarouselView.propTypes = {
  title: PropTypes.string,
  blurb: PropTypes.string,
  image: PropTypes.string,
};

CarouselView.defaultProps = {
  title: '',
  blurb: '',
  image: null,
};

export default CarouselView;
