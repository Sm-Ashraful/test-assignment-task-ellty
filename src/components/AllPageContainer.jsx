import PropTypes from "prop-types";
import defaultIcon from "../assets/default.svg";
import variant2Icon from "../assets/variant2.svg";
import variant3Icon from "../assets/variant3.svg";
import variant4Icon from "../assets/variant4.svg";
import variant5Icon from "../assets/variant5.svg";
import { useEffect, useState } from "react";

const AllPageContainer = ({ title, handleAllSelectPage, activePages }) => {
  const [buttonState, setButtonState] = useState("default");

  const handleMouseEnter = () => {
    if (buttonState === "active") {
      setButtonState("isActive");
    } else {
      setButtonState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (buttonState !== "active") {
      setButtonState("default");
    }
    if (buttonState === "isActive") {
      setButtonState("active");
    }
  };

  const handleMouseDown = () => {
    if (buttonState === "isActive") {
      setButtonState("active");
    } else {
      setButtonState("activating");
    }
  };

  const handleClick = () => {
    if (buttonState === "active") {
      setButtonState("hover");
    } else {
      setButtonState("isActive");
    }
    handleAllSelectPage();
  };

  useEffect(() => {
    if (buttonState === "default" || buttonState === "active") {
      if (activePages.length === 6) {
        setButtonState("active");
      } else {
        setButtonState("default");
      }
    }
    if (activePages.length === 0) {
      setButtonState("default");
    }
  }, [activePages.length, buttonState]);

  return (
    <div
      className="home"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <p className="title">{title}</p>
      <span className="icon-container">
        <img
          src={
            buttonState === "hover"
              ? variant2Icon
              : buttonState === "activating"
              ? variant3Icon
              : buttonState === "isActive"
              ? variant4Icon
              : buttonState === "active"
              ? variant5Icon
              : defaultIcon
          }
          alt="default image"
        />
      </span>
    </div>
  );
};
AllPageContainer.propTypes = {
  title: PropTypes.string,
  activePages: PropTypes.array,
  selectAllPage: PropTypes.bool,
  handleAllSelectPage: PropTypes.func,
};

export default AllPageContainer;
