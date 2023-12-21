import React, { useState } from "react";
import "./Other.scss";
import OtherOne from "../OtherOne/OtherOne";

function Other(props) {
    const { videoData, onSelect } = props;
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    const handleSelectVideo = (videoData) => {
        setSelectedVideo(videoData);
        onSelect(videoData);
    };

    // Filter the list to exclude the selected video
    const filteredVideoData = videoData.filter(
        (video) => video.id !== selectedVideo.id
    );

    return (
        <section className='other'>
            <div className='other__all'>
                <h3 className='other__head'>NEXT  VIDEOS</h3>
                {filteredVideoData.map((data) => (
                    <OtherOne
                        key={data.id}
                        videoData={data}
                        onSelect={handleSelectVideo}
                        isSelected={selectedVideo && selectedVideo.id === data.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default Other;
