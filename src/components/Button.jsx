import "./Button.css";

const Button = ({ id, text, action }) => {
  const handleClick = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
