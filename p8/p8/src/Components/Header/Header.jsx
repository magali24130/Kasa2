import "./Header.scss";
import Logo from "../../Assets/Logo.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="kasa, location d'appartements" />
      </h1>
      <Navbar />
    </header>
  );
}
