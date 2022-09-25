import VideoComponent from '../VideoComponent/VideoComponent';
import './Video.scss';

function Video() {
  return (
    <div className='video'>
        <div className='video__info'>
            <h1 className='video__title'>Video Interview</h1>
            <p className='video__text'>
                Let's get to know the author Eva Solska better.
            </p>
            <p className='video__text'>
                The writer's books "Hedgehog and Maple Leaf", 
                "Kitten and Ladybug" and others have already 
                become real hits. And this year, the publishing 
                house "Morning" will publish a new novel by 
                Eva Solska for teenagers.
            </p>
            <p className='video__text'>
                While we are waiting for this event, we 
                suggest watching the video and learning more 
                about the author's vocation.
            </p>
        </div>
        <div className='video__container'>
            <VideoComponent embedId="JUWO3q0wN48" />
        </div>
    </div>
  )
}

export default Video