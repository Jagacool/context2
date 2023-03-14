import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  // const color = "crimson";
  const [color, setColor] = useState("skyblue");
  //const colorList = ["orange", "pink", "red", "green"];
  const [colorList, setColorList] = useState([
    "orange",
    "pink",
    "red",
    "green",
  ]);
  const styles = {
    backgroundColor: color,
  };
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
      <div className="add-color">
        <input
          style={styles}
          type="text"
          onChange={handleChange}
          value={color} />
        {/* copy the colorList and add newColor */}
        <button onClick={() => setColorList([...colorList, color])}>
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
