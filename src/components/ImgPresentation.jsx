import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/ImgPresentation.css';

// shouldComponentUpdate is handled by PureComponent
class ImgPresentation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || '',
      content: props.content || '',
      image: props.image || '',
      dir: props.dir || 'left',
      small: false,
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    document.addEventListener('resize', this.resize);
  }

  componentWillReceiveProps(nextProps) {
    // If the data is updated, update it.
    this.setState(nextProps);
  }

  resize(test) {
    console.log(test);
  }

  render() {
    // TODO: Lazy load images.
    // eslint-disable-next-line
    const { title, content, image, dir, small } = this.state;

    // Ternary rendering to handle dir changes. Could also use conditional rendering
    // or switch statement, but ternary is faster iirc.

    // BUG: the direction also controls which one is on top when small screen size.
    // In order to fix, implement a resize handler with a debounce to disable dir if width < 1000px.
    return (
      <div className="ImgPresentation">
        {small || dir === 'left' ? (
          <Fragment>
            <img src={image} alt={title} className="img" />
            <div className="textContent">
              <h1 className="title">{title}</h1>
              <p className="content">{content}</p>
            </div>
          </Fragment>
        )
          : (
            <Fragment>
              <div className="textContent">
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
              </div>
              <img src={image} alt={title} className="img" />
            </Fragment>
          )}
      </div>
    );
  }
}

ImgPresentation.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  dir: PropTypes.string,
};

ImgPresentation.defaultProps = {
  title: '',
  content: '',
  image: '',
  dir: 'left',
};

export default ImgPresentation;
