import React, { useState } from "react";
import "./VideoSection.scss"
import VideoVid from "../VideoVid/VideoVid";
import VideoControls from "../VideoControls/VideoControls";

function VideoSection({ selectedVideo, duration }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className='video'>
            <div className='video-eq'>
                <VideoVid selectedVideo={selectedVideo} isPlaying={isPlaying} />
            </div>
            <VideoControls
                selectedVideo={selectedVideo}
                duration={duration}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause} />
        </section>
    );
}

export default VideoSection;