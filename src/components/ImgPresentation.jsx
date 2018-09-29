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

    this.resize = this.debounce(200, this.resize.bind(this));
  }

  componentDidMount() {
    if (this.state.dir === 'left') {
      if (window.innerWidth < 1000) this.setState({ small: true });
      window.addEventListener('resize', this.resize);
    }
  }


  componentWillReceiveProps(nextProps) {
    // Update state if there's new props.
    this.setState(nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    // BUG: the direction also controls which one is on top when small screen size.
    // In order to fix, implement a resize handler with a debounce to disable dir if width < 1000px.
    if (window.innerWidth < 1000) {
      this.setState({ small: true });
    } else if (this.state.small) this.setState({ small: false });
  }

  debounce(delay, fn) {
    let timerId;
    return function () {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn();
        timerId = null;
      }, delay);
    }
  }

  render() {
    // TODO: Lazy load images.
    // eslint-disable-next-line
    const { title, content, image, dir, small } = this.state;

    // Ternary rendering to handle dir changes. Could also use conditional rendering
    // or switch statement, but ternary is faster iirc.
    return (
      <div className={`ImgPresentation${dir === 'right' ? ' right' : ' left'}`}>
        {small || dir === 'right' ? (
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
