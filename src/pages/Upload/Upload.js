import "./Upload.scss"

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import publish from "../../assets/images/icons/publish.svg";
import bike from "../../assets/images/Upload-video-preview.jpg"

function UploadPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setVideoFile(file);
    };

    const handlePublish = async () => {
        try {
            // formdata object to handle file uploads
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("video", videoFile);

            // post request to localhost api
            const response = await axios.post("http://localhost:8080/videos", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // redirect to success page
            console.log("Video uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading video:", error);
        }
    };

    return (
        <>
            <main className="upload">
                <div className="upload-eq">
                    <h1 className="upload-head">Upload Video</h1>
                    <div className="upload-eq__all">
                        <article className="upload-thumb">
                            <h3 className="upload-thumb__head ">VIDEO THUMBNAIL</h3>
                            <img className="upload-thumb__preview" alt="Preview" src={bike} />
                        </article>

                        <div className="upload-eq__boxes">
                            <article className="upload-title">
                                <h3 className="upload-title__head">TITLE YOUR VIDEO</h3>
                                <textarea className="upload-title__box" placeholder="Add a title to your video" />
                            </article>

                            <article className="upload-description">
                                <h3 className="upload-description__head">ADD A VIDEO DESCRIPTION</h3>
                                <textarea className="upload-description__box" placeholder="Add a description to your video" />
                            </article>
                        </div>
                    </div>

                    <div className="upload-buttons">
                        <Link to="/success">
                            <button className="upload-button" onClick={handlePublish}>
                                <div className="upload-button-eq">
                                    <img className="upload-button-icon" src={publish} alt="Publish" />
                                    PUBLISH
                                </div>
                            </button>
                        </Link>
                        <Link to="/">
                        <button className="upload-cancel">
                            CANCEL
                        </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UploadPage;