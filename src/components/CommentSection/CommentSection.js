import React, { useState } from "react";
import "./CommentSection.scss"

import CommentOld from "../CommentOld/CommentOld"
import CommentAdd from "../CommentAdd/CommentAdd"

function Comments({videoData}) {
    if (!videoData || !videoData.comments) {
        return null;
    }

    const { comments } = videoData;

    const addComment = (newComment) => {
        
    };

    return (
        <section className='comments'>
            <div className='comments__eq'>

                <h4 className='comments__counter'>{`${comments.length} ${comments.length === 1 ? "Comment" : "Comments"
                    }`}</h4>

                <CommentAdd onAddComment={addComment} />

                {comments.map((comments) => (
                        <CommentOld key={comments.id} comments={comments} />
                ))}
            </div>
        </section>
    );
}

export default Comments;