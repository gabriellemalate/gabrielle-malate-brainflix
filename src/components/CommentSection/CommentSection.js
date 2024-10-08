import React from "react";
import "./CommentSection.scss"

import CommentOld from "../CommentOld/CommentOld"
import CommentAdd from "../CommentAdd/CommentAdd"

function Comments({ videoData, onAddComment }) {
    if (!videoData || !videoData.comments) {
        return null;
    }

    const { comments } = videoData;

    return (
        <section className='comments'>
            <div className='comments__eq'>

                <h4 className='comments__counter'>{`${comments.length} ${comments.length === 1 ? "Comment" : "Comments"
                    }`}</h4>

                <CommentAdd onAddComment={onAddComment} videoId={videoData.id} />

                {comments.map((comment) => (
                    <CommentOld key={comment.id} comments={comment} />
                ))}
            </div>
        </section>
    );
}

export default Comments;