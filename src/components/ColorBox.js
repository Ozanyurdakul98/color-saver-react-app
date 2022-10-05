import { useEffect, useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ color, onUpdate, onDelete }) {
  const [hasBeenCopied, setHasbeenCopied] = useState(false);
  const [colorName, setColorName] = useState("");
  if (hasBeenCopied) {
    setTimeout(() => setHasbeenCopied(false), 2000);
  }

  useEffect(() => {
    async function fetchName() {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${color.slice(1)}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      } catch (message) {
        console.error(message);
        setColorName("");
      }
    }
    fetchName();
  }, [color]);

  function HandleClick() {
    navigator.clipboard.writeText(color);
    setHasbeenCopied(true);
  }

  function handleUpdate(event) {
    onUpdate(event.target.value);
  }

  return (
    <li
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={HandleClick}
    >
      <span className="color-box__name-display">{colorName}</span>
      <input
        value={color}
        onClick={(event) => event.stopPropagation()}
        onChange={handleUpdate}
      />
      <button
        className="delete-button"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      >
        ✕
      </button>
      {hasBeenCopied && <p className="message">copied!</p>}
    </li>
  );
}
