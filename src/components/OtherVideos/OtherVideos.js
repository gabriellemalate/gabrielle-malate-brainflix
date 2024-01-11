import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom'; 
import "./OtherVideos.scss";
import OtherOne from "../OtherOne/OtherOne";

function Other({ videoData, selectedVideo }) {
    const navigate = useNavigate();

    // is selectedVideo truthy? if yes, then access its properties
    const filteredVideoData = videoData.filter(
        (video) => selectedVideo && video.id !== selectedVideo.id
    );


    return (
        <section className='other'>
            <div className='other__all'>
                <h3 className='other__head'>NEXT  VIDEOS</h3>
                {filteredVideoData.map((data) => (
                    <div key={data.id} className="other__link" onClick={() => navigate(`/videos/${data.id}`)}>
                        <OtherOne
                            key={data.id}
                            videoData={data}
                            isSelected={selectedVideo && selectedVideo.id === data.id}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
Other.propTypes = {
    videoData: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object,
};
export default Other;
