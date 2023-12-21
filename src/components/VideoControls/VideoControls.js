import Play from "../../assets/images/icons/play.svg";
// import Scrubber from "./assets/images/icons/scrub.svg";
import Expand from "../../assets/images/icons/fullscreen.svg";
import Volume from "../../assets/images/icons/volume_off.svg";

import "./VideoControls.scss"

function VideoControls(props) {
    return (
        <div className='video-controls'>
            <button className='video-controls__play'>
                <img className='video-controls__play-icon' src={Play} alt="Play" />
            </button>
            <div className='video-controls__eq'>
                <div className='video-controls__scrub'>
                    {/* <img className='video-controls__scrubber' src={Scrubber} alt="Video scrubber"/> */}
                    <input type="range" className="video-controls__scrubber"
                    // value="0" step="1" min="0" max="100" 
                    />
                    <p className='video-controls__scrub-time'>0:00/4:01</p>
                </div>
            </div>
            <div className='video-controls__right'>
                <p className='video-controls__right-link'><img className='video-controls__right-expand' src={Expand} alt="Full Screen" /></p>
                <p className='video-controls__right-link'><img className='video-controls__right-volume' src={Volume} alt="Volume On/Off" /></p>
            </div>
        </div>
    );
}

export default VideoControls;