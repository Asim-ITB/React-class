/* eslint-disable react/prop-types */
import "./nav.css";
function Nav({ setContent }) {
  return (
    <nav>
      <ul className="navbar">
        <li onClick={() => setContent("Home")}>Home</li>
        <li onClick={() => setContent("About")}>About</li>
        <li onClick={() => setContent("Contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
