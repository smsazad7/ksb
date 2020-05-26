import React, { Component } from "react";
import "./navber.css";

import { Link } from "react-router-dom";

export default class Navber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  handleShow = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbars">
        <div className="center-items">
          <div className="headers-one">
            <Link to="/">
              <h1 className="logo">life in great</h1>
            </Link>

            <ul className="links-one">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/"> IMAGES</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
