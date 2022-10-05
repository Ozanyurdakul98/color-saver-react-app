import "./ColorBox.css";

export default function ColorBox({ colorId, color, onUpdate, onDelete }) {
  function HandleClick() {
    navigator.clipboard.writeText(color);
  }

  return (
    <li
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={HandleClick}
    >
      <p>{color}</p>
    </li>
  );
}
