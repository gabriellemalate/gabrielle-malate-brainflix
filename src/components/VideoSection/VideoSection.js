import React from "react";
import "./VideoSection.scss"
import VideoVid from "../VideoVid/VideoVid";
import VideoControls from "../VideoControls/VideoControls";

function VideoSection({selectedVideo, duration}) {
    return (
        <section className='video'>
            <div className='video-eq'>
                <VideoVid selectedVideo={selectedVideo} />
            </div>
            <VideoControls duration={duration}/>
        </section>
    );
}

export default VideoSection;