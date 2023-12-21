import "./VideoVid.scss"

function VideoVid(props) {
    return (
        <video autoPlay className='video-vid' poster="https://i.imgur.com/l2Xfgpl.jpg">
            <source className='video-vid__source' src="" />
        </video>
    );
}

export default VideoVid;