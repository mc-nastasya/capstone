import axios from "axios";
import AdminForm from "../AdminForm/AdminForm";
import { useState } from "react";
import "./LogIn.scss";;


function LogIn() {

  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameValue, setUsernameValue] = useState(true);
  const [passwordValue, setPasswordValue] = useState(true);

  const handleClickUsername = ()=> {
    setUsernameValue(true);
  }

  const handleClickPassword = ()=> {
    setPasswordValue(true);
  }

  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username, password);

    if(!username) {
      setUsernameValue(false);
    }

    if(!password) {
        setPasswordValue(false);
    }

    if(!username || !password) {
      return;
    }


    axios.post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/login`, {
        username: username,
        password: password
      })
        .then((response) => {
          sessionStorage.setItem('JWTtoken', response.data.token);

          setIsLoginError(false);
          setErrorMessage("");
        })
        .catch((error) => {
          setIsLoginError(true);
          setErrorMessage(error.response.data.error.message);
          setPasswordValue(false);
          setUsernameValue(false);


        });
  };

  const renderLogin = () => (
    <div className='login'>
      <div className='login__container'>
        <h1 className='login__title'>Login</h1>
        <form className='login__form' onSubmit={handleLogin}>
          <div className="login__input-pair">
            <label className="login__label"> Username*</label>
            <input onClick={handleClickUsername} type='username' name='username' className={`login__input ${!usernameValue? "login__error-state" : null}`} placeholder="username"/>
          </div>
          <div className="login__input-pair">
            <label className="login__label"> Password*</label>
            <input onClick={handleClickPassword} type='password' name='password' className={`login__input ${!passwordValue? "login__error-state" : null}`} placeholder="password"/>
          </div>
          {isLoginError && <label className="login__error">{errorMessage}</label>}
          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );

  if (!sessionStorage.getItem("JWTtoken")) return renderLogin();

  return (
    <div className="App">
      <AdminForm />
    </div>
  );
}

export default LogIn;
