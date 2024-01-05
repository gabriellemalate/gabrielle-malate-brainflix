import React from "react";
import PropTypes from "prop-types";
import "./VideoVid.scss"

import { apiKey } from "../../pages/Main/Main";

function VideoVid({selectedVideo}) {
    const videoUrlWithApiKey = selectedVideo
        ? `${selectedVideo.video}?api_key=${apiKey}`
        : "";

    console.log("Video URL:", selectedVideo ? selectedVideo.video : "");
    return (
        <video autoPlay className='video-vid' poster={selectedVideo ? selectedVideo.image : ""}>
            <source className='video-vid__source' src={videoUrlWithApiKey} />
        </video>
    );
}

VideoVid.propTypes = {
    selectedVideo: PropTypes.object,
};

export default VideoVid;