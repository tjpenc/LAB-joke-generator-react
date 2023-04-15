import { PropTypes } from 'prop-types';

export default function JokeButton({ buttonText, jokeData }) {
  return (
    <>
      <h1>{jokeData.setup}</h1>
      <h2>{ buttonText !== 'Get Punchline' ? jokeData.delivery : ''}</h2>
    </>
  );
}

JokeButton.propTypes = {
  buttonText: PropTypes.string,
  jokeData: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }),
};

JokeButton.defaultProps = {
  buttonText: '',
  jokeData: {
    setup: '',
    delivery: '',
  },
};
