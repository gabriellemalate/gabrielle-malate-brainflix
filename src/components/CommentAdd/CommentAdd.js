import "./CommentAdd.scss"

import Mohan from "../../assets/images/Mohan-muruge.jpg";
import SpeechBubble from "../../assets/images/icons/add_comment.svg";

function CommentAdd(props) {
    return (
        <article className='comments-add'>
        <div className='comments-add__all'>
            <img className="comments-add__img" src={Mohan} alt="Mohan's User Display" />

            <div className='comments-add__text'>
                <h3 className='comments-add__text-title'>JOIN THE CONVERSATION</h3>
                <form className="comments-add__text-form" action="post_comment.php" method="post">
                    <textarea className="comments-add__text-box" type="text" placeholder="Add a new comment"
                    ></textarea>
                    <button className="comments-add__text-button" type="submit">
                        <div className="comments-add__text-button-eq">
                            <img className="comments-add__text-button-icon" src={SpeechBubble} alt="Add a Comment" />
                            COMMENT
                        </div>
                    </button>
                </form>
            </div>
        </div>
    </article>
    );
}

export default CommentAdd;