import React, { useState, useEffect } from "react";
import "./Main.scss"
import axios from "axios";
import VideoSection from '../../components/VideoSection/VideoSection';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from "../../components/CommentSection/CommentSection";
import Other from "../../components/OtherVideos/Other";

const apiKey = "c8f93081-09f2-4de0-baa5-ffe6fbc33fcf";
const apiUrl = "https://project-2-api.herokuapp.com";


function Main() {
    const [videoData, setVideoData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);

                if (response.data.length > 0) {
                    setVideoData(response.data);
                    setSelectedVideo(response.data[0]); // Select the first video by default
                } else {
                    console.error("No videos found in the response.");
                }
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };
        fetchVideoData();
    }, []); // empty dependency array. effect runs only once on component mount

    // useEffect(() => {
        
    // }, [selectedVideo]);

    const addComment = (newComment) => {
        setSelectedVideo((prevSelectedVideo) => ({
            ...prevSelectedVideo,
            comments: [...prevSelectedVideo.comments, newComment],
        }));
    };

    const handleSelectVideo = (selectedVideo) => {
        setSelectedVideo(selectedVideo);
    };

    return (
        <main className='main'>
            <VideoSection selectedVideo={selectedVideo} />
            <div className='main-eq'>
                <section className='main-eq__all'>
                    <div className='main-eq__section'>
                        <VideoInfo videoData={selectedVideo || videoData[0]} />
                        <Comments videoData={selectedVideo} onAddComment={addComment} />
                    </div>
                    <Other videoData={videoData} onSelect={handleSelectVideo} selectedVideo={selectedVideo}/>
                </section>
            </div>
        </main>
    );
}

export default Main;