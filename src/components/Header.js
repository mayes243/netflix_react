import React, { Component } from "react";
import LOGO from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { Button } from "./Button";
// media query
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="header-container">
        <div className="header-top">
          <Logo src={LOGO} alt="logo" />
          <NavLink to="/login" className="signin-btn">
            Sign In
          </NavLink>
        </div>

        <div className="header-content">
          <Title>See what's next.</Title>
          <SubTitle>watch anywhere.cancel anytime</SubTitle>
          <Link to="/choose-plan">
            <Button primary className="offer-btn">
              try it now <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />{" "}
            </Button>
          </Link>
        </div>
      </HeaderWrapper>
    );
  }
}
export default Header;

// media query
const custommedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});
// logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  ${custommedia.lessThan("tablet")`
left:20%;

`}
`;
// main title
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  margin: 0 0 1.2rem;
  line-height: 1.1em;
  overflow-y: hidden;
  color: #fff;
  ${custommedia.lessThan("tablet")`
        font-size:2.5rem;
        `}
`;
const SubTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 400;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  color: #fff;
  ${custommedia.lessThan("smTablet")`
        font-size:1.4rem;
        margin:0;
        `}
`;
// header container
const HeaderWrapper = styled.div`
.signin-btn{
    right:0;
    margin:1.125rem 3% 0;
    padding:0.437rem 1.0625rem;
    line-height:normal ! important;
    border-radius:0.1875rem;
    font-size:1rem;
    font-weight:400;
    background:var(--main-red);
    position:absolute;
    translate:transfrom(-50%,-50%);
    cursor:pointer;
    z-index:1;
    transition:background 0.2s ease-in;
    &:hover{
        background:var(--main-red-hover);
    }
    }
    // header top
    .header-top{
        position:relative;
        height:10rem;
    }
    // header content
    .header-content{
        width:65%;
        position:relative;
        margin:4.5rem auto 0;
        justify-content-center;
        text-align:center;
        flex-direction:column;
        z-index:1;
        ${custommedia.lessThan("smTablet")`
        display:grid;
        grid-template-rows:repeat(3,60px);
        margin-top:8rem;
        `}
    }

    // icon svg
    .Icon{
        margin-left:0.3rem;
        vertical-align:bottom;
        ${custommedia.lessThan("smTablet")`
        display:none ! important;
        `}
    }

    .offer-btn{
        ${custommedia.lessThan("lgDesktop")`
        margin:0 33%;
        font-size:1.5rem;
        `}
    }
    .offer-btn{
        ${custommedia.lessThan("mdDesktop")`
        margin:0 25%;
        font-size:1.5rem;
        `}
    }
    .offer-btn{
        ${custommedia.lessThan("tablet")`
        margin:0 24%;
        font-size:1.3rem;
        `}
    }
`;
