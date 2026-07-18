import { useState } from "react";
import "./Footer.css";
import Home from "../../Pages/Home";
import Team from "../../Pages/Team";
import Contact from "../../Pages/Contact";
function Footer() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="Wrapper">
      <div className="btn-group">
        <button onClick={() => setActiveSection("home")}>Home</button>
        <button onClick={() => setActiveSection("team")}>Team</button>
        <button onClick={() => setActiveSection("contact")}>Contact</button>
      </div>
      <div>
        {activeSection === "home" && <Home />}
        {activeSection === "team" && <Team />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  );
}
export default Footer;
