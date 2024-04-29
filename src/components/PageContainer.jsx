import PropTypes from "prop-types";
import defaultIcon from "../assets/default.svg";
import { useState } from "react";

const PageContainer = ({ value }) => {
  const [buttonState, setButtonState] = useState("default");
  const handleMouseEnter = () => {
    setButtonState("hover");
  };

  const handleMouseLeave = () => {
    setButtonState("default");
  };

  const handleMouseDown = () => {
    setButtonState("active");
  };

  const handleClick = () => {
    // Your click action logic here

    // Optionally reset state (as in previous example)
    setButtonState("default");
  };
  return (
    <div className="home">
      <p>{value}</p>
      <span className="icon-container">
        <img src={defaultIcon} alt="default image" />
      </span>
    </div>
  );
};
PageContainer.propTypes = {
  value: PropTypes.string,
};

export default PageContainer;
