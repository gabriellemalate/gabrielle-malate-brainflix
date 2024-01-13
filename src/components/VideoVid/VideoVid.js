import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./VideoVid.scss"

function VideoVid({ selectedVideo, isPlaying }) {
    const videoRef = useRef(null);
    const videoUrl = selectedVideo ? selectedVideo.video : "";
    const posterImageUrl = selectedVideo ? `${selectedVideo.image}`: "";


    useEffect(() => {
        const video = videoRef.current;

        if (isPlaying) {
            video.play();
        } else {
            video.pause();
        }
    }, [isPlaying]);

    console.log("Poster Image URL:", posterImageUrl);

    return (
        <video ref={videoRef} autoPlay className='video-vid' poster={posterImageUrl}>
            <source className='video-vid__source' src={videoUrl} />
        </video>
    );
}

VideoVid.propTypes = {
    selectedVideo: PropTypes.object,
    isPlaying: PropTypes.bool,
};

export default VideoVid;