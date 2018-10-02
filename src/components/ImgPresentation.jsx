import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/ImgPresentation.css';

const debounce = (delay, fn) => {
  let timerId;
  return function () {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(); // No args to take care of in this case.
      timerId = null;
    }, delay);
  };
};

class ImgPresentation extends PureComponent {
  constructor(props) {
    super(props);

    // It's an anti-pattern to copy props that never change to the state.
    this.state = { smallScreen: false };

    this.resize = debounce(200, this.resize.bind(this));
  }

  componentDidMount() {
    // The direction also controls which one is on top when there's a small screen size,
    // in order to fix implement a resize handler with a debounce to disable dir if width < 1000px.
    if (this.state.dir === 'left') {
      if (window.innerWidth < 1000) this.setState({ smallScreen: true });
      window.addEventListener('resize', this.resize);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Update state if there's new props, aka support dynamic server-provided content.
    this.setState(nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    if (window.innerWidth < 1000) {
      this.setState({ smallScreen: true });
    } else if (this.state.smallScreen) this.setState({ smallScreen: false });
  }

  render() {
    // eslint-disable-next-line
    const { title, content, image, dir, smallScreen } = this.props;

    // Ternary rendering to handle dir changes. Could also use conditional rendering
    // or switch statement, but ternary is faster IIRC.
    return (
      <div className={`ImgPresentation${dir === 'right' ? ' right' : ' left'}`}>
        {smallScreen || dir === 'right' ? (
          <Fragment>
            <div className="textContent">
              <h1 className="title">{title}</h1>
              <p className="content">{content}</p>
            </div>
            <img src={image} alt={title} className="img" />
          </Fragment>
        )
          : (
            <Fragment>
              <img src={image} alt={title} className="img" />
              <div className="textContent">
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
              </div>
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
