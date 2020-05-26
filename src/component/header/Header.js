import React, { Component } from "react";
import styled from "styled-components";
import image from "../../image/image.jpg";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <img src={image} alt="img" width="100%" />
      </HeaderWrapper>
    );
  }
}
const HeaderWrapper = styled.div`
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
