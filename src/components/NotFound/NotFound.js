import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className='not-found__background'>
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <h3 className='not-found__text'>
                Ooops! Something went wrong :(((
                But we are already figuring it out.
                Thank you for your patience!
            </h3>
            <div className='not-found__links'>
                <Link className='not-found__link not-found__link--secondary'>Go Back</Link>
                <Link className='not-found__link not-found__link--primary'>Go to Main</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound