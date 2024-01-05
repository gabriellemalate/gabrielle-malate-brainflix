import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./VideoVid.scss"

import { apiKey } from "../../pages/Main/Main";

function VideoVid({ selectedVideo, isPlaying }) {
    const videoRef = useRef(null);
    const videoUrlWithApiKey = selectedVideo
        ? `${selectedVideo.video}?api_key=${apiKey}`
        : "";

    useEffect(() => {
        const video = videoRef.current;

        if (isPlaying) {
            video.play();
        } else {
            video.pause();
        }
    }, [isPlaying]);

    return (
        <video ref={videoRef} autoPlay className='video-vid' poster={selectedVideo ? selectedVideo.image : ""}>
            <source className='video-vid__source' src={videoUrlWithApiKey} />
        </video>
    );
}

VideoVid.propTypes = {
    selectedVideo: PropTypes.object,
    isPlaying: PropTypes.bool,
};

export default VideoVid;