import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ color, onUpdate, onDelete }) {
  const [hasBeenCopied, setHasbeenCopied] = useState(false);
  if (hasBeenCopied) {
    setTimeout(() => setHasbeenCopied(false), 2000);
  }

  function HandleClick() {
    navigator.clipboard.writeText(color.colorCode);
    setHasbeenCopied(true);
  }

  function handleUpdate(event) {
    onUpdate(color.id, event.target.value);
  }

  return (
    <li
      className="color-box"
      style={{ backgroundColor: color.colorCode }}
      onClick={HandleClick}
    >
      <input
        value={color.colorCode}
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
