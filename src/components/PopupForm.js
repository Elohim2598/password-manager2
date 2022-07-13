import React, { useState } from 'react';
import Popup from './Popup';
import './popupForm.css';

//Popup Form Component
function PopupForm({ cards, setCards, showPopup, setShowPopup, data = {} }) {
  // States for the input fields and Handlers.
  const [inputTextUrl, setInputTextUrl] = useState(data.url);
  const [inputTextName, setInputTextName] = useState(data.name);
  const [inputTextPassword, setInputTextPassword] = useState(data.password);
  const [inputTextUsername, setInputTextUsername] = useState(data.username);
  const [passwordShown, setPasswordShown] = useState(false);

  // Again as in the Card Component, making the togglePassword for the Add Card button onClick Event.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  //Handle submit fuction for the form onSubmit event.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name) {
      setCards(
        cards.map((card) =>
          data.id === card.id
            ? {
                url: inputTextUrl,
                name: inputTextName,
                username: inputTextUsername,
                password: inputTextPassword,
                id: Math.floor(Math.random() * 10000),
              }
            : card
        )
      );
      return;
    }
    setCards([
      ...cards,
      {
        url: inputTextUrl,
        name: inputTextName,
        username: inputTextUsername,
        password: inputTextPassword,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInputTextUrl('');
    setInputTextName('');
    setInputTextUsername('');
    setInputTextPassword('');
  };

  // Input Handlers for every input field.
  const inputTextUrlHandler = (e) => {
    setInputTextUrl(e.target.value);
  };

  const inputTextNameHandler = (e) => {
    setInputTextName(e.target.value);
  };

  const inputTextUsernameHandler = (e) => {
    setInputTextUsername(e.target.value);
  };

  const inputTextPasswordHandler = (e) => {
    setInputTextPassword(e.target.value);
  };

  return (
    <div>
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="popup-input"
            value={inputTextUrl}
            type="text"
            placeholder="Type the URL without the http/https"
            onChange={inputTextUrlHandler}
            required
          />
          <input
            className="popup-input"
            value={inputTextName}
            type="text"
            placeholder="Type the website's name"
            onChange={inputTextNameHandler}
            required
          />
          <input
            className="popup-input"
            value={inputTextUsername}
            type="text"
            placeholder="Type your username"
            onChange={inputTextUsernameHandler}
            required
          />
          <div className="password-container">
            <input
              type={passwordShown ? 'text' : 'password'}
              value={inputTextPassword}
              placeholder="Type your password"
              className="popup-input"
              onChange={inputTextPasswordHandler}
              required
            />

            <button
              type="button"
              className="passwordshow"
              onClick={togglePassword}
            ></button>
          </div>
          <input className="popup-btn" type="submit" value="Submit"></input>
        </form>
      </Popup>
    </div>
  );
}

export default PopupForm;
