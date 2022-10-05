import { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorForm from "./components/ColorForm";
import { nanoid } from "nanoid";
import "./App.css";

const COLORS = [
  {
    id: "0",
    colorCode: "#ff0000",
  },
  {
    id: "1",
    colorCode: "#00ff00",
  },
  {
    id: "2",
    colorCode: "#0000ff",
  },
];

export default function App() {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const savedList =
      JSON.parse(window.localStorage.getItem("colorList")) || COLORS;
    setColorList(savedList);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("colorList", JSON.stringify(colorList));
  }, [colorList]);

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
            color={color.colorCode}
            onDelete={() => handleDeleteColor(color.id)}
            onUpdate={(newColor) => handleUpdateColor(color.id, newColor)}
          />
        ))}
      </ul>
    </main>
  );
}
