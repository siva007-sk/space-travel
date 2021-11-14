import { Component } from "react";
import logo from "../assets/shared/logo.svg";
import menuIcon from "../assets/shared/icon-hamburger.svg";

class NavBar extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
  }
  render() {
    return (
      <nav className={`nav-bar ${this.state.showMenu ? "menu" : ""}`}>
        <img src={logo} alt="Logo"></img>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#destination">DESTINATION</a>
          </li>
          <li>
            <a href="#crew">CREW</a>
          </li>
          <li>
            <a href="#technology">TECHNOLOGY</a>
          </li>
        </ul>
        <img
          src={menuIcon}
          alt="menu-icon"
          className="menu-toggle-icon"
          onClick={() => {
            this.setState((prev) => {
              return { ...prev, showMenu: !prev.showMenu };
            });
          }}
        ></img>
      </nav>
    );
  }
}
export default NavBar;
