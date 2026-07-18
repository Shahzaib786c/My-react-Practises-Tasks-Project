import { useState } from "react";
import "./Studentprofile.css";
import Detail from "../../Pages/Detail";
import Marks from "../../Pages/Marks";
import Attendence from "../../Pages/Attendence";

const Studentprofile = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [views, setViews] = useState(0);
  const [marksViews, setMarksViews] = useState(0);

  return (
    <div className="profile-container">
      <h1>Student Profile</h1>

      <div className="tab-buttons">
        {/* <button onClick={() => setActiveTab("details")}>Details</button> */}
        <button
          onClick={() => {
            setActiveTab("details");
            setViews(views + 1);
          }}
        >
          Details
        </button>

        <button onClick={() => setActiveTab("marks")}>Marks</button>

        <button onClick={() => setActiveTab("attendance")}>Attendance</button>
      </div>

      {activeTab === "details" && <Detail views={views} />}

      {activeTab === "marks" && (
        <Marks marksViews={marksViews} setMarksViews={setMarksViews} />
      )}

      {activeTab === "attendance" && <Attendence />}
    </div>
  );
};
export default Studentprofile;
