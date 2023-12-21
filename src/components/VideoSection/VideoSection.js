import "./VideoSection.scss"

import VideoVid from "../VideoVid/VideoVid";
import VideoControls from "../VideoControls/VideoControls";

function VideoSection(props) {
    return (
        <section className='video'>
            <div className='video-eq'>
                <VideoVid/>
            </div>
            <VideoControls/>
        </section>
    );
}

export default VideoSection;