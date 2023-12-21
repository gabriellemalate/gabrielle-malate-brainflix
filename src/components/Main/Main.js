import "./Main.scss"

import VideoSection from '../VideoSection/VideoSection';
import VideoInfo from '../VideoInfo/VideoInfo';
import Comments from "../CommentSection/CommentSection";
import Other from "../OtherVideos/Other";

function Main(props) {
    return (
        <main className='main'>
            <VideoSection/>
            <div className='main-eq'>

                <div className='main-section'>
                    <VideoInfo/>
                    <Comments/>
                </div>
            </div>

            <Other/>
        </main>
    );
}

export default Main;