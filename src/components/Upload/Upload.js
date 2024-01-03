import "./Upload.scss"
import React from "react";
import publish from "../../assets/images/icons/publish.svg";
import bike from "../../assets/images/Upload-video-preview.jpg"

function UploadPage() {
    return (
        <>
            <section className="upload">
                <div className="upload-eq">
                    <h1 className="upload-head">Upload Video</h1>
                    <article className="upload-thumb">
                        <h3 className="upload-thumb__head ">VIDEO THUMBNAIL</h3>
                        <img className="upload-thumb__preview" alt="Preview" src={bike} />
                    </article>
                    <article className="upload-title">
                        <h3 className="upload-title__head">TITLE YOUR VIDEO</h3>
                        <textarea className="upload-title__box" placeholder="Add a title to your video" />
                    </article>

                    <article className="upload-description">
                        <h3 className="upload-description__head">ADD A VIDEO DESCRIPTION</h3>
                        <textarea className="upload-description__box" placeholder="Add a description to your video" />
                    </article>

                    <div className="upload-buttons">
                        <button className="upload-button">
                            <div className="upload-button-eq">
                                <img className="upload-button-icon" src={publish} alt="Publish" />
                                PUBLISH
                            </div>
                        </button>
                    </div>
                    <button className="upload-cancel">
                        CANCEL
                    </button>
                </div>
            </section>
        </>
    );
}

export default UploadPage;