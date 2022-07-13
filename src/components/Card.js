import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'; //importing CopyToClipboard package to copy the password to clipboard easily.
import './card.css';
import PopupForm from './PopupForm';
import Swal from 'sweetalert2';

function Card({ url, name, username, password, cards, card, setCards }) {
  // Swal function for the CTC onClick
  const showAlert = () => {
    Swal.fire({
      text: 'Password copied to clipboard!',
      icon: 'success',
    });
  };

  // State for password show/hide buttons, default set to false
  const [passwordShown, setPasswordShown] = useState(false);
  // State for Edit button
  const [editId, setEditId] = useState(0);

  // Toggle password show/hide button
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // Delete card handler
  const handleDelete = () => {
    setCards(cards.filter((el) => el.id !== card.id));
  };

  // Edit card handler
  const handleEdit = () => {
    setEditId(card.id);
  };

  return (
    <div className="tile-container">
      {/* Making use of Clearbit API to get logos when typing the url. */}
      <img
        className="logo"
        src={'https://logo.clearbit.com/' + url + '?size=100'}
        alt="site icon"
      />
      <a
        href={'https://' + url}
        target="_blank"
        rel="noopener noreferrer"
        className="urlLink"
      >
        <h2 className="url">{url}</h2>
      </a>
      <h4 className="name">{name}</h4>
      <h4 className="username">
        Username:<br></br>
        {username}
      </h4>
      <div className="card-right-container">
        <input
          className="input"
          type={passwordShown ? 'text' : 'password'} // Password show/hide toggle, readOnly
          readOnly
          value={password}
        />
        {/* CopyToClipboard button */}
        <CopyToClipboard text={password}>
          <button className="ctc" onClick={showAlert}></button>
        </CopyToClipboard>
        {/* Toggle Password Visibility button */}
        <button className="showpassword" onClick={togglePassword}></button>
        {/* Edit button */}
        <button className="edit" onClick={handleEdit}></button>
        {/* Delete button */}
        <button className="delete" onClick={handleDelete}></button>
      </div>
      {/* Popup Form Component goes here */}
      <PopupForm
        cards={cards}
        setCards={setCards}
        showPopup={editId}
        setShowPopup={setEditId}
        data={{
          url: url,
          name: name,
          username: username,
          password: password,
          id: card.id,
        }}
      ></PopupForm>
    </div>
  );
}

export default Card;
