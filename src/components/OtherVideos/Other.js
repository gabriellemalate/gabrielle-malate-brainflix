import React from "react";
import PropTypes from "prop-types";
import "./Other.scss";
import OtherOne from "../OtherOne/OtherOne";

function Other(props) {
    const { videoData, onSelect, selectedVideo } = props;

    // Check if selectedVideo is truthy before accessing its properties
    const filteredVideoData = videoData.filter(
        (video) => selectedVideo && video.id !== selectedVideo.id
    );
    
    return (
        <section className='other'>
            <div className='other__all'>
                <h3 className='other__head'>NEXT  VIDEOS</h3>
                {filteredVideoData.map((data) => (
                    <OtherOne
                        key={data.id}
                        videoData={data}
                        onSelect={onSelect}
                        isSelected={selectedVideo && selectedVideo.id === data.id}
                    />
                ))}
            </div>
        </section>
    );
}
Other.propTypes = {
    videoData: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedVideo: PropTypes.object,
};
export default Other;
