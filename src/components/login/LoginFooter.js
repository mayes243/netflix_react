import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class Footer extends Component {
  state = {
    langContent: false,
  };
  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };
  render() {
    return (
      <FooterWrapper>
        <span style={{ marginLeft: "10%", color: "#999" }}>
          Questions?{" "}
          <Link to="/" style={{ color: "#fff" }}>
            Call 1-877-742-1335
          </Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">Gift Card Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Privancy Statement</Link>
            </li>
          </ul>
        </div>
        {/* Languages button */}
        <div className="lang-btn" onClick={this.handleToggle}>
          <Icon icon={iosWorld} size={20} />
          English
          <Icon icon={arrowSortedDown} />
        </div>

        {/* toggle Language Content */}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>French</li>
            </ul>
          </div>
        )}
      </FooterWrapper>
    );
  }
}
export default Footer;
// media
const custommedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px",
});
// css
const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;
  color: #999;

  .footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    color: #999;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${custommedia.lessThan("tablet")`
    grid-template-columns:repeat(2,1fr); 
    `}
  }
  ul li {
    list-style: none;
    line-height: 2.5;
  }
  a {
    color: #999;
    font-size: 0.9rem;
  }
  p {
    text-decoration: underline;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 3px;
    border-radius: 20px;
    width: 7rem;
    display: grid;
    margin-left: 10% !important;
    margin-top: 2rem;
    color: #999;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 0rem;
    cursor: pointer;
  }
  // toggle language content

  .lang-toggle {
    margin-left: 10%;
  }
  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    border-radius: 20px;
    &:hover {
      background: #0085ff;
      color: #fff;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
