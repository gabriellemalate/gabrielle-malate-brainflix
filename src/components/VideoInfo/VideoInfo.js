import "./VideoInfo.scss"

import Eye from "../../assets/images/icons/views.svg";
import Heart from "../../assets/images/icons/likes.svg";

function VideoInfo(props) {
    return (
        <section className='video-info'>
            <div className='video-info__eq'>
                <h1 className='video-info__head'>BMX Rampage: 2021 Highlights</h1>

                <article className='video-info__legend'>
                    <div className='video-info__legend-left'>
                        <h3 className='video-info__legend-left-author'>By Red Crow</h3>
                        <p className='video-info__legend-left-date'>07/11/2021</p>
                    </div>

                    <div className='video-info__legend-right'>
                        <p className='video-info__legend-right-views'>
                            <img className='video-info__legend-right-views-img' alt="Views Icon" src={Eye} />
                            <span className='video-info__legend-right-views-count'>1,001,023</span>
                        </p>
                        <p className='video-info__legend-right-likes'>
                            <img className='video-info__legend-right-likes-img' alt="Likes Icon" src={Heart} />
                            <span className='video-info__legend-right-likes-count'>110,985</span>
                        </p>
                    </div>
                </article>

                <p className='video-info__paragraph'>
                    On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
                </p>
            </div>
        </section>
    );
}

export default VideoInfo;