import PropTypes from "prop-types";
import { useEffect } from "react";

const Button = ({ handleClick }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("mousedown", () => {
        button.classList.add("active");
      });
      button.addEventListener("mouseup", () => {
        button.classList.remove("active");
      });
    });
  }, []);

  return (
    <button onClick={handleClick} className="btn">
      Done
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
