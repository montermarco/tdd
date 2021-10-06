import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - react props.
 * @returns {JSX.Element} - Render component (or null if 'success' prop is false)
 */
export default function Congrats(props) {
  if(props.success){
    return (
      <div data-test="congrats">
        <span data-test="message">
          Congratulations! your guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="congrats" />
    )
  }  
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};