import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorForm from "./components/ColorForm";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [colorList, setColorList] = useState([]);
  function handleAddColor(newColor) {
    setColorList((prevList) => [
      {
        id: nanoid(),
        colorCode: newColor,
      },
      ...prevList,
    ]);
  }

  function handleDeleteColor(id) {
    const updatedColorList = colorList.filter((color) => color.id !== id);
    setColorList(updatedColorList);
  }

  function handleUpdateColor(id, colorCode) {
    const updatedColorList = colorList.map((color) =>
      color.id === id
        ? {
            ...color,
            colorCode,
          }
        : color
    );
    setColorList(updatedColorList);
  }

  return (
    <main className="App">
      <ColorForm onSubmit={handleAddColor} />
      <ul className="card-grid">
        {colorList.map((color) => (
          <ColorBox
            key={color.id}
            color={color}
            onDelete={() => handleDeleteColor(color.id)}
            onUpdate={handleUpdateColor}
          />
        ))}
      </ul>
    </main>
  );
}
