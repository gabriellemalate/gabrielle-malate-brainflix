import React from "react";
import "./VideoSection.scss"
import VideoVid from "../VideoVid/VideoVid";
import VideoControls from "../VideoControls/VideoControls";

function VideoSection({selectedVideo}) {
    return (
        <section className='video'>
            <div className='video-eq'>
                <VideoVid posterImage={selectedVideo ? selectedVideo.image : ""} />
            </div>
            <VideoControls/>
        </section>
    );
}

export default VideoSection;