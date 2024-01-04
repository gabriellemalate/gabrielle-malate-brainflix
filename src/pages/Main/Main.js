import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { videoId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
                if (response.data.length > 0) {
                    setVideoData(response.data);

                    const selected =
                        videoId && response.data.find((video) => video.id === videoId);

                    setSelectedVideo(selected || response.data[0]);
                } else {
                    console.error("No videos found in the response.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [videoId]);

    useEffect(() => {
        const fetchSelectedVideoDetails = async () => {
            if (selectedVideo) {
                try {
                    const response = await axios.get(`${apiUrl}/videos/${selectedVideo.id}?api_key=${apiKey}`);

                    if (response.data) {
                        setSelectedVideo(response.data);
                    } else {
                        console.error("No details found for the selected video.");
                    }
                } catch (error) {
                    console.error("Error fetching selected video details:", error);
                }
            }
        };


        if (selectedVideo && !selectedVideo.comments) {
            fetchSelectedVideoDetails();
        }
    }, [selectedVideo]);

    const addComment = (newComment) => {
        setSelectedVideo((prevSelectedVideo) => ({
            ...prevSelectedVideo,
            comments: [...prevSelectedVideo.comments, newComment],
        }));
    };

    const handleSelectVideo = (selectedVideo) => {
        // update URL when a video is selected
        navigate(`/videos/${selectedVideo.id}`);
        setSelectedVideo(selectedVideo);
    };

    return (
        <main className="main">
            <VideoSection selectedVideo={selectedVideo} />
            <div className="main-eq">
                <section className="main-eq__all">
                    <div className="main-eq__section">
                        {loading ? (
                            <h2 className="main-eq__section-load">Loading...</h2>
                        ) : (
                            <>
                                <VideoInfo videoData={selectedVideo || videoData[0]} />
                                <Comments
                                    videoData={selectedVideo}
                                    onAddComment={addComment}
                                />
                            </>
                        )}
                    </div>
                    <Other
                        videoData={videoData}
                        onSelect={handleSelectVideo}
                        selectedVideo={selectedVideo}
                    />
                </section>
            </div>
        </main>
    );
}

export default Main;