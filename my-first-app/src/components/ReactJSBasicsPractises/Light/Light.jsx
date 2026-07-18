import { useState } from "react";
import "./light.css";

const Light = () => {
  const [light, setLight] = useState(false);
  //   const [name,setName] =useState('Ali');
  //   const changeName =()=>{
  //     setName('John')
  //   }

  return (
    <div className="lit">
      <h4>s
        Light: We use ternary Condition Rendring and onClick where we reverse
        the state false to true and true to false
      </h4>
      <button onClick={() => setLight(!light)}> Light</button>
      <h2>Your Light is {light ? "ON 🔦" : "OFF 📴 "}</h2>
    </div>
  );
};

export default Light;
