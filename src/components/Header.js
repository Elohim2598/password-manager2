import React from 'react';
import './header.css';

import { useState } from 'react';
import PopupForm from './PopupForm';
import { useSpring, animated } from 'react-spring';

function Header({
  //Prop names are self explanatory
  children,
  cards,
  setCards,
  query,
  setQuery,
}) {
  // Declaring the Show or Hide Add Card PopUp. Default set to false.
  const [showPopup, setShowPopup] = useState(false);

  //Animations using React-Spring
  const styleOne = useSpring({
    from: { opacity: 0, marginLeft: -1000 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 300,
    config: {
      mass: 1,
      tension: 40,
      friction: 10,
    },
  });

  return (
    <animated.div style={styleOne}>
      <div className="header-container">
        <h1 className="header-title">Password Manager</h1>
        {/* Search-bar  */}
        <div className="searchbar-container">
          <form>
            <input
              className="search-box"
              type="text"
              placeholder="Search my vault..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          {/* Add Card button for displaying the Popup */}
          <button
            onClick={() => setShowPopup(true)}
            className="addbtn"
          ></button>
        </div>
        {/* The Popup form*/}
        <PopupForm
          cards={cards}
          setCards={setCards}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        ></PopupForm>
      </div>
      {children}
    </animated.div>
  );
}

export default Header;
