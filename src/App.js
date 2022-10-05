import ColorBox from "./components/ColorBox";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const colorList = [
    {
      id: nanoid(),
      colorCode: "#CCC",
    },
    {
      id: nanoid(),
      colorCode: "#FF0000",
    },
    {
      id: nanoid(),
      colorCode: "#012345",
    },
    {
      id: nanoid(),
      colorCode: "#fedcba",
    },
  ];
  return (
    <main className="App">
      <ul className="card-grid">
        {colorList.map((color) => (
          <ColorBox key={color.id} color={color.colorCode} colorId={color.id} />
        ))}
      </ul>
    </main>
  );
}
