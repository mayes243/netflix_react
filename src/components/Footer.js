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
        <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions? <Link to="/">Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">Ways to Watch</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
            <li>
              <Link to="/">Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Terms of use</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Cookie preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notices</Link>
            </li>
          </ul>
          {/* Languages button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            English
            <Icon icon={arrowSortedDown} />
          </div>
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
        <span style={{ marginLeft: "15%", fontSize: "0.9rem" }}>
          Netflix Canada
        </span>
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
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
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
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 0rem;
    cursor: pointer;
  }
  // toggle language content

  .lang-toggle {
    margin-left: 15%;
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
