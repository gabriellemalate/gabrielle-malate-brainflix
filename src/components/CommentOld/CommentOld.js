import React from "react";
import "./CommentOld.scss"
import Empty from "../../assets/images/empty-image.png";

function CommentOld(props) {
    const {comments} = props;

    return (
        <article className='comments-old'>
            {comments.map((comment) => (
            <div key={comment.id} className='comments-old__eq'>
                <img className='comments-old__img' src={Empty} alt="Commenter Photo"></img>
                <div className="comments-old__text">
                    <div className="comments-old__text-top">
                        <h3 className="comments-old__text-top-name">{comment.name}</h3>
                        <p className="comments-old__text-top-date">{comment.date}</p>
                    </div>
                    <p className="comments-old__text-comment">{comment.comment}</p>
                </div>
            </div>
            ))}
        </article>
    );
}

export default CommentOld;