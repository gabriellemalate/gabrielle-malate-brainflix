import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import "./OtherOne.scss"

function OtherOne({ videoData, isSelected
}) {
    const { id, title, channel, image, } = videoData;

    return (
        <Link to={`/videos/${id}`} className={`other__one ${isSelected ? "selected" : ""}`}>
            <img className='other__one-preview' src={image} alt="Next Video Preview" />
            <div className='other__one-text'>
                <h4 className='other__one-text-title'>{title}</h4>
                <p className='other__one-text-creator'>{channel}</p>
            </div>
        </Link>
    );
}

OtherOne.propTypes = {
    videoData: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default OtherOne;