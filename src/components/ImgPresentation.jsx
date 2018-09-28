import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ImgPresentation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || '',
      content: props.content || '',
      image: props.image || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // If the data is updated, update it.
    const { title, content, image } = nextProps;
    this.setState({ title, content, image });
  }

  render() {
    const { title, content, image } = this.state;
    return (
      <div className="ImgPresentation">
        <img src={image} />
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

ImgPresentation.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

ImgPresentation.defaultProps = {
  title: '',
  content: '',
  image: '',
};

export default ImgPresentation;