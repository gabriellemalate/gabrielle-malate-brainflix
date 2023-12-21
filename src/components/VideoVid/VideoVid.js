import "./VideoVid.scss"

function VideoVid({posterImage}) {
    return (
        <video autoPlay className='video-vid' poster={posterImage}>
            <source className='video-vid__source' src="" />
        </video>
    );
}

export default VideoVid;