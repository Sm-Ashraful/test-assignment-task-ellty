import { useEffect } from "react";

const Button = () => {
  const handleButtonClick = () => {
    // Include 'event' parameter
  };

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
    <button onClick={handleButtonClick} className="btn">
      Done
    </button>
  );
};

export default Button;
