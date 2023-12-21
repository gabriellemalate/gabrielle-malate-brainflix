// import axios from "axios";
import React, {useState} from 'react';

import './App.scss';

import Logo from "./assets/images/BrainFlix-logo.svg";
import MagnifyingGlass from "./assets/images/icons/search.svg"
import UserImage from "./assets/images/Mohan-muruge.jpg";
import Upload from "./assets/images/icons/upload.svg";
import Preview from "./assets/images/Upload-video-preview.jpg";
import Eye from "./assets/images/icons/views.svg";
import Heart from "./assets/images/icons/likes.svg";
import Mohan from "./assets/images/Mohan-muruge.jpg";
import SpeechBubble from "./assets/images/icons/add_comment.svg";
import Play from "./assets/images/icons/play.svg";
// import Scrubber from "./assets/images/icons/scrub.svg";
import Expand from "./assets/images/icons/fullscreen.svg";
import Volume from "./assets/images/icons/volume_off.svg";
import Empty from "./assets/images/empty-image.png";

function App() {
  return (
    <>
      <header className='header'>
        <div className='header__eq'>
          <img className="header__logo" src={Logo} alt="BrainFlix Logo" />

          <div className='header__right'>
            <div className='header__right-box-user'>
              <form className="header__form" action="" method="">
                <img className="header__form-magnifying-glass" src={MagnifyingGlass} alt="Search"/>
                <textarea className="header__form-box" type="search" placeholder="Search"/>
              </form>
              <img className="header__user--mobile" src={UserImage} alt="User" />
            </div>
            <button className="header__button">
              <div className="header__button-eq">
                <img className="header__button-icon" alt="Upload Icon" src={Upload} />
                UPLOAD
              </div>
            </button>
            <img className="header__user--tablet" src={UserImage} alt="User" />
          </div>
        </div>
      </header>

      <main className='main'>

        <section className='video'>
          <div className='video-eq'>
          <video autoPlay className='video-vid' poster="https://i.imgur.com/l2Xfgpl.jpg">
              <source  className='video-vid__source' src="" />
          </video>
          </div>
            <div className='video-controls'>
              <button className='video-controls__play'>
                <img className='video-controls__play-icon' src={Play} alt="Play"/>
              </button>
              <div className='video-controls__eq'>
                <div className='video-controls__scrub'>
                  {/* <img className='video-controls__scrubber' src={Scrubber} alt="Video scrubber"/> */}
                  <input type="range" className="video-controls__scrubber" 
                  // value="0" step="1" min="0" max="100" 
                  />
                  <p className='video-controls__scrub-time'>0:00/4:01</p>
                </div>
              </div>
              <div className='video-controls__right'>
                <p className='video-controls__right-link'><img className='video-controls__right-expand' src={Expand} alt="Full Screen"/></p>
                <p className='video-controls__right-link'><img className='video-controls__right-volume' src={Volume} alt="Volume On/Off"/></p>
              </div>
            </div>
        </section>

        <div className='main-eq'>

        <div className='main-section'>

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

        </div>

        <section className='other'>
          <div className='other__all'>
            <h3 className='other__head'>NEXT  VIDEOS</h3>
            <article className='other__one'>
              <img className='other__one-preview' src={Preview} alt="Next Video Preview"/>
              <div className='other__one-text'>
                <h4 className='other__one-text-title'>Become A Travel Pro In One Easy Lesson</h4>
                <p className='other__one-text-creator'>Todd Welch</p>
              </div>
            </article>
            <article className='other__one'>
              <img className='other__one-preview' src={Preview} alt="Next Video Preview"/>
              <div className='other__one-text'>
                <h4 className='other__one-text-title'>Les Houches The Hidden Gem Of The Chamonix</h4>
                <p className='other__one-text-creator'>Todd Welch</p>
              </div>
            </article>
          </div>
        </section>

        </div>

      </main>
    </>
  );
}

export default App;
