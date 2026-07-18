import "./navbar.css";
import professional from "../../assets/Professional.png";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={professional} alt="Shahzaib" />
                </div>

                <div className="navlinks">
                    <a href="https://www.linkedin.com/in/muhammad-shahzaib-71b04832b/">LinkedIn</a>
                    <a href="https://www.fiverr.com/sellers/muhammad823786/edit">Fiverr</a>
                    <a href="https://www.linkedin.com/in/muhammad-shahzaib-71b04832b/">Facebook</a>
                    <a href="https://www.tiktok.com/@zaiblucky823">TikTok</a>
                    <a href="https://www.youtube.com/@LerningTree">YouTube</a>
                    <a href="https://www.instagram.com/shahzaib823786/">Instagram</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;