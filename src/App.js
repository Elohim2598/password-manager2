import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import React, { useState, useEffect } from 'react';

const getLocalCards = () => {
  let cardsLocal = JSON.parse(localStorage.getItem('cards'));
  console.log(cardsLocal);

  if (cardsLocal) {
    return JSON.parse(localStorage.getItem('cards'));
  } else {
    return [];
  }
};

function App() {
  // States for the cards and the search/filter
  const [cards, setCards] = useState(getLocalCards());
  const [query, setQuery] = useState('');

  const saveLocalCards = () => {
    localStorage.setItem('cards', JSON.stringify(cards));
  };

  useEffect(() => {
    saveLocalCards();
  }, [cards]);

  return (
    <div className="App">
      <Header
        cards={cards}
        setCards={setCards}
        query={query}
        setQuery={setQuery}
      >
        <Content
          cards={cards}
          setCards={setCards}
          query={query}
          setQuery={setQuery}
        />
      </Header>
    </div>
  );
}

export default App;
