import "./Profile.scss";
import Portrait from "../../assets/images/profilePhoto.png";
import Facebook from '../../assets/icons/blueFacebok.svg';
import Instagram from '../../assets/icons/blueInsta.svg';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile__background">
        <div className="profile">
            <div className='profile__top'>
                <img src={Portrait} alt='author' className='profile__image' />
                <p className='profile__quote'>
                    «If I were not a writer, I would become an actress, 
                    musician or traveller. Although I still play and 
                    travel all the time. And not only through the 
                    pages of books.»
                </p>
            </div>
            <div className="profile__bottom">
                <Link><img src={Instagram} alt="instagram"/></Link>
                <Link><img src={Facebook} alt="facebook"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Profile