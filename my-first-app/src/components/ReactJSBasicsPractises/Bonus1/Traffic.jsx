import { useState } from "react";
import "./traffic.css";
const Traffic = () => {
  const [light, setLight] = useState("Red");
  function handleLight() {
    if (light === "Red") {
      setLight("Yellow");
    } else if (light === "Yellow") {
      setLight("Green");
    } else setLight("Red");
  }

  return (
    <div className="traffic">
      <h2>Click the Button to see the cycle like.. Red.. Yellow... Green </h2>

      <button onClick={handleLight}>Next</button>
      <h1
        style={{
          color:
            light === "Red" ? "red" : light === "Yellow" ? "gold" : "green",
        }}
      >
        {light}
      </h1>
    </div>
  );
};

export default Traffic;
