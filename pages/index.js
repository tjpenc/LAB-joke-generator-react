import { useState } from 'react';
import JokeButton from '../components/JokeButton';
import getJoke from '../api/jokeData';

function Home() {
  const [buttonText, setButtonText] = useState('Get a joke!');
  const [jokeData, setJokeData] = useState({});

  const handleClick = (text) => {
    setButtonText(text);
  };

  const getNewJoke = () => {
    getJoke().then((data) => {
      setJokeData({
        setup: data.setup,
        delivery: data.delivery,
      });
    });
    handleClick('Get Punchline');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Lets joke around</h1>
      <JokeButton buttonText={buttonText} jokeData={jokeData} />
      {
        buttonText === 'Get a joke' || buttonText === 'Get a new joke'
          ? <button type="button" onClick={getNewJoke}>{buttonText}</button>
          : <button type="button" onClick={() => handleClick('Get a new joke')}>{buttonText}</button>
      }
    </div>
  );
}

export default Home;
