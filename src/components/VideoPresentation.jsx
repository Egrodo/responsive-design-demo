import React from 'react';
import PropTypes from 'prop-types';
import '../css/VideoPresentation.css';

const VideoPresentation = (props) => {
  const { title, content, videoId } = props;
  return (
    <div className="VideoPresentation">
      <iframe
        title="Vimeo Video"
        src={`https://player.vimeo.com/video/${videoId}`}
        width="640"
        height="360"
        frameBorder="0"
        className="vimeoVideo"
        allowFullScreen
      />
      <div className="textContent">
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

VideoPresentation.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  videoId: PropTypes.string,
};

VideoPresentation.defaultProps = {
  title: '',
  content: '',
  videoId: '',
};

export default VideoPresentation;
