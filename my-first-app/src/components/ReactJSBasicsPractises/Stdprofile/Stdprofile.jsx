import { useState } from "react";
import "./stdprofile.css";

const Stdprofile = () => {
  const [profile, setprofile] = useState(false);

  return (
    <div className="btn1">
      
      <button onClick={() => setprofile(!profile)}> Your Profile </button>
      <p> {profile ? "Show Profile" : "Hide Profile "}</p>
      {profile && (
        <div className="card1">
          <p>
            <strong>Name: </strong>Muhammad shahzaib
          </p>
          <p>
            <strong>Age: </strong>23
          </p>
          <p>
            <strong>Course: </strong>IBM Full Stack Developer
          </p>
        </div>
      )}
    </div>
  );
};

export default Stdprofile;
