import "./Other.scss"

import Preview from "../../assets/images/Upload-video-preview.jpg";

function Other(props) {
    return (
        <section className='other'>
            <div className='other__all'>
                <h3 className='other__head'>NEXT  VIDEOS</h3>
                <article className='other__one'>
                    <img className='other__one-preview' src={Preview} alt="Next Video Preview" />
                    <div className='other__one-text'>
                        <h4 className='other__one-text-title'>Become A Travel Pro In One Easy Lesson</h4>
                        <p className='other__one-text-creator'>Todd Welch</p>
                    </div>
                </article>
                <article className='other__one'>
                    <img className='other__one-preview' src={Preview} alt="Next Video Preview" />
                    <div className='other__one-text'>
                        <h4 className='other__one-text-title'>Les Houches The Hidden Gem Of The Chamonix</h4>
                        <p className='other__one-text-creator'>Todd Welch</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Other;