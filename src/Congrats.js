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
