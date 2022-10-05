import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm({ onSubmit }) {
  const [colorCode, setColorCode] = useState("#cccccc");
  return (
    <form
      action=""
      className="color-form"
      style={{ backgroundColor: colorCode }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(colorCode);
      }}
    >
      <input
        type="color"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      />
      <input
        type="text"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      />
      <button>Create</button>
    </form>
  );
}
