import React from "react";
import PropTypes from "prop-types";
import "./VideoVid.scss"

function VideoVid({selectedVideo}) {

    console.log("Video URL:", selectedVideo ? selectedVideo.video : "");
    return (
        <video autoPlay className='video-vid' poster={selectedVideo ? selectedVideo.image : ""}>
            <source className='video-vid__source' src={selectedVideo ? selectedVideo.video : ""} />
        </video>
    );
}

VideoVid.propTypes = {
    selectedVideo: PropTypes.object,
};

export default VideoVid;