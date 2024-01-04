import React from "react";
import PropTypes from "prop-types";
import "./OtherOne.scss"

function OtherOne({videoData, onSelect, isSelected}) {
    const { title, channel, image,} = videoData;
    const handleClick = () => {
        console.log('Clicked on:', videoData);
        onSelect(videoData);
    };

    return (
        <article className={`other__one ${isSelected ? "selected" : ""}`}  onClick={handleClick}>
            <img className='other__one-preview' src={image} alt="Next Video Preview" />
            <div className='other__one-text'>
                <h4 className='other__one-text-title'>{title}</h4>
                <p className='other__one-text-creator'>{channel}</p>
            </div>
        </article>
    );
}

OtherOne.propTypes = {
    videoData: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default OtherOne;