import "./CommentSection.scss"

import Mohan from "../../assets/images/Mohan-muruge.jpg";
import SpeechBubble from "../../assets/images/icons/add_comment.svg";
import Empty from "../../assets/images/empty-image.png";

function Comments(props) {
    return (
        <section className='comments'>
            <div className='comments__eq'>

                <h4 className='comments__counter'>3 Comments</h4>

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

                <article className='comments-old'>
                    <div className='comments-old__eq'>
                        <img className='comments-old__img' src={Empty} alt=""></img>
                        <div className="comments-old__text">
                            <div className="comments-old__text-top">
                                <h3 className="comments-old__text-top-name">Micheal Lyons</h3>
                                <p className="comments-old__text-top-date">08/09/2021</p>
                            </div>
                            <p className="comments-old__text-comment">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed</p>
                        </div>
                    </div>
                </article>
                <article className='comments-old'>
                    <div className='comments-old__eq'>
                        <img className='comments-old__img' src={Empty} alt=''></img>
                        <div className="comments-old__text">
                            <div className="comments-old__text-top">
                                <h3 className="comments-old__text-top-name">Micheal Lyons</h3>
                                <p className="comments-old__text-top-date">08/09/2021</p>
                            </div>
                            <p className="comments-old__text-comment">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default Comments;