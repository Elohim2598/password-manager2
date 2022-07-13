import React from 'react';
import './popup.css';

//Popup Component

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* Close popup button*/}
        <button
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        ></button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
