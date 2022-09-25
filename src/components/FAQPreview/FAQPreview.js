import { Link } from 'react-router-dom';
import './FAQPreview.scss';

function FAQPreview() {
    const text = "Before we dive in to the your career, tell me a little bit about yourself and what’s important to you outside of work?";
    return (
        <div className='faq-preview'>
            <h3 className='faq-preview__title'>Read Author’s FAQ - know more!</h3>
            <p className='faq-preview__text'>
                {text.length > 65 ? `${text.substring(0, 64)}...` : text}
            </p>
            <Link className='faq-preview__link'>Read FAQ</Link>
        </div>
    )
}

export default FAQPreview