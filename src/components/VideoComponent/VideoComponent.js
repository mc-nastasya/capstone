import PropTypes from "prop-types";
import "./VideoComponent.scss";

const VideoComponent = ({ embedId }) => (
    <iframe
        className="video-youtube__iframe"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
);

VideoComponent.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoComponent;