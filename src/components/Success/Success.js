import React from "react";
import "./Success.scss"
import {Link} from "react-router-dom";

function Success() {
    return (
        <article>
            <h1>Upload Successful</h1>
            <p>You'll be redirected shortly. Or you can click <Link to="/">here</Link></p>
        </article>
    );
}

export default Success;