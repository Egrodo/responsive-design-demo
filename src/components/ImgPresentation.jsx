import React, { PureComponent } from 'react';
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
    /* NOTE:
       I'm using a debounced resize listener to change the direction of content so
       it doesn't cause css problems. In the real world css changes are much less expensive
       than JS calls so I'd modify my CSS Grid setup to add named areas and rearrange content
       based on media queries instead.
    */
    // The direction also controls which one is on top when there's a small screen size,
    // in order to fix implement a resize handler with a debounce to disable dir if width < 1000px.
    if (this.props.dir === 'left') {
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
    const { title, content, image, dir } = this.props;
    const { smallScreen } = this.state;
    // Ternary rendering to handle dir changes. Could also use if block
    // or switch statement, but ternary is faster IIRC.
    return (
      <div className={`ImgPresentation${dir === 'right' ? ' right' : ' left'}`}>
        {smallScreen || dir === 'right' ? (
          <>
            <div className="textContent">
              <h1 className="title">{title}</h1>
              <p className="content">{content}</p>
            </div>
            <img src={image} alt={title} className="img" />
          </>
        )
          : (
            <>
              <img src={image} alt={title} className="img" />
              <div className="textContent">
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
              </div>
            </>
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
