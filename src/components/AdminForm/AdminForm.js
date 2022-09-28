import axios from 'axios';
import { useState } from 'react';
import SuccessModal from '../SuccessModal/SuccessModal';
import UnsuccessModal from '../UnsuccessModal/UnsuccessModal';
import './AdminForm.scss';

function AdminForm() {
  //validation states
  const [titleValue, setTitleValue] = useState(true);
  const [descriptionValue, setDescriptionValue] = useState(true);
  const [linkValue, setLinkValue] = useState(true);

  //states for modals
  const [success, setSuccess] = useState(false);
  const [unsuccess, setUnsuccess] = useState(false);


  const handleSubmit = (event) => {
      event.preventDefault();

      const title = event.target.title.value;
      const description= event.target.description.value;
      const link = event.target.link.value;
      const audince = event.target.audience.value;

      //validation
      //____________________
      if(!title) {
          setTitleValue(false);
      }

      if(!description) {
          setDescriptionValue(false);
      }

      if(!link) {
          setLinkValue(false);
      }

      if(!title || !description || !link ) {
          return ;
      }
      //validation ends
      //____________________

      const newBook = {
          title: title,
          description: description,
          amazon_link: link,
          age: audince
      };

      axios
          .post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/add-book`, newBook)
          .then(()=>{
              setSuccess(true);
              event.target.title.value = "";
              event.target.description.value = "";
              event.target.link.value = "";
              event.target.audience.value = "children";
          })
          .catch((error)=>{
              console.log(error);
              setUnsuccess(true);
          })
  }


  const handleClickTitle = () => {
    setTitleValue(true);
  }

  const handleClickDescription = () => {
    setDescriptionValue(true);
  }

  const handleClickLink = () => {
    setLinkValue(true);
  }

  return (
    <div className='admin-form'>
      {!success? null: <SuccessModal heading1='Nice!' heading2='Book successfully added' text='You can add one more here.' button="Add another book" setSuccess={setSuccess}/>}
      {!unsuccess? null : <UnsuccessModal setUnsuccess={setUnsuccess} />}
      <div className='admin-form__container'>
        <h1 className='admin-form__title'>Add new book</h1>
        <form className='admin-form__form' onSubmit={handleSubmit}>
          <div className="admin-form__input-pair">
              <label  className="admin-form__label" > Title*</label>
              <input onClick={handleClickTitle} type='text' name='title' className={`admin-form__input ${!titleValue && 'admin-form__error'}`} placeholder="Title"/>
          </div>
          <div className="admin-form__input-pair">
              <label  className="admin-form__label" > Description*</label>
              <textarea onClick={handleClickDescription} name='description' className={`admin-form__text ${!descriptionValue && 'admin-form__error' }`} placeholder="Description"/>
          </div>
          <div className="admin-form__input-pair">
              <label  className="admin-form__label" > Amazon link*</label>
              <input onClick={handleClickLink} type='text' name='link' className={`admin-form__input ${!linkValue && 'admin-form__error'}`} placeholder="https://amazon.com/your-book"/>
          </div>
          <div className='admin-form__input-pair admin-form__input-radio'>
            <label className='admin-form__radio-label'><input type='radio' className='admin-form__radio' name='audience' value='children' defaultChecked/>
            Children </label>
            <label className='admin-form__radio-label'><input type='radio' className='admin-form__radio' name='audience' value='young-adult' />
            Young-adult</label>
          </div>
          <button className='admin-form__button'>Add new book</button>
        </form>
      </div>
    </div>
  )
}

export default AdminForm