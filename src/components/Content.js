import React from 'react';
import Card from './Card';
import './content.css';

//Content Component

function Content({ cards, setCards, query }) {
  //Search-box functionality using filter method
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="content-container">
      <div className="Card-container">
        <div className="cards-list">
          {/* Calling the filteredCards I made and mapping through it to get the cards showing*/}
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              url={card.url}
              name={card.name}
              username={card.username}
              password={card.password}
              setCards={setCards}
              cards={cards}
              card={card}
            />
          ))}
          {/* I needed to provide attribution to Clearbit as it states under it's usage conditions */}
          <a className="attribution" href="https://clearbit.com">
            Logos provided by Clearbit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
