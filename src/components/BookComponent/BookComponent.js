import './BookComponent.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BookComponent() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [selectedBook, setSelectedBook] = useState();

    useEffect(()=>{
        axios
          .get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/books/book/${id}`)
          .then((response)=>{
            setSelectedBook(response.data[0]);
          }) 
    }, [id])

    if(!selectedBook) {
        return <p>Loading...</p>
    }
    
  return (
    <div className='book-component__background'>
        <div className='book-component'>
            <div className='book-component__navigate'>
                <p onClick={()=>{navigate(-1)}} className='book-component__back'>Back</p>
            </div>
            <div className='book-component__info'>
                <div className='book-component__top'>
                    <img src={selectedBook.image} alt='book cover' className='book-component__cover'/>
                </div>
                <div className='book-component__content'>
                    <h1 className='book-component__title'>{selectedBook.title}</h1>
                    <p className='book-component__description'>
                        {selectedBook.description}
                    </p>
                    <div className='book-component__buttons'>
                        <a href={`http://localhost:3000/${selectedBook.sample_link}`} rel="noreferrer" target="_blank" className='book-component__link book-component__link--secondary'>Read Sample</a>
                        <a href={`${selectedBook.amazon_link}`} className='book-component__link book-component__link--primary'>Buy on Amazon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookComponent;