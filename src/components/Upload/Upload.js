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
                    
                    <h3 className="">VIDEO THUMBNAIL</h3>
                    <img className="upload__preview" alt="Preview" src={bike} />
                    <h3>TITLE YOUR VIDEO</h3>
                    <textarea>Add a title to your video</textarea>
                    <h3>ADD A VIDEO DESCRIPTION</h3>
                    <textarea>Add a description to your video</textarea>
                    <button>
                        <div>
                            <img src={publish} alt="Publish" />
                            PUBLISH
                        </div>
                    </button>
                    <button>
                        CANCEL
                    </button>
                </div>
            </section>
        </>
    );
}

export default UploadPage;