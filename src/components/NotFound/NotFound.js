import React from "react";
import "./NotFound.scss"
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <article>
            <h1>PAGE NOT FOUND Please return to <Link to="/">HOME PAGE</Link></h1>
        </article>
    );
}

export default NotFound;