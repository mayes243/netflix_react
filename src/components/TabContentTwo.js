import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import imgtv from "../images/tab-tv.png";
import imgtablet from "../images/tab-tablet.png";
import imgmac from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";
import { Link } from "react-router-dom";

const TabContentTwo = () => {
  return (
    <ContentWrapper>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>
            Watch TV shows and movies anytime, anywhere - personalzed for you.
          </span>
          <Link className="btn" to="/choose-plan">
            <Button>try it now</Button>
          </Link>
        </div>
        {/* tab bottom content */}
        <div className="tab-bottom-content">
          {/* image content */}
          <div>
            <img
              src={imgtv}
              alt="tv"
              style={{ width: "18.75rem", paddingTop: "0.625rem" }}
            />
            <h3>Watch on your TV</h3>
            <p>
              Smart,TVs, PlayStation, Xbox, Chromecast, AppleTV, Blu-ray players
              and more.
            </p>
          </div>
          <div>
            <img
              src={imgtablet}
              alt="tv"
              style={{ width: "18.75rem", paddingTop: "0.625rem" }}
            />
            <h3>Watch on your Tablet</h3>
            <p>
              Smart,TVs, PlayStation, Xbox, Chromecast, AppleTV, Blu-ray players
              and more.
            </p>
          </div>
          <div>
            <img
              src={imgmac}
              alt="tv"
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem",
              }}
            />
            <h3>Watch on your Macbook</h3>
            <p>
              Smart,TVs, PlayStation, Xbox, Chromecast, AppleTV, Blu-ray players
              and more.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
export default TabContentTwo;
// media
const custommedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px",
});
//main container
const ContentWrapper = styled.div`
  background: var(--main-deep-dark);
  .tab-content {
    margin: 0 15%;
  }
  span {
    color: #fff;
    grid-column: 1/8;
    ${custommedia.lessThan("tablet")`
    grid-column:1/-1;
    font-size:1.5rem;
    `}
    font-size:1.5rem;
  }
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    padding: 2.5rem 0;
    justify-content: center;
    ${custommedia.lessThan("smDesktop")`
    grid-template-columns:repeat(2,1fr);
    `}
    ${custommedia.lessThan("tablet")`
    grid-template-columns:1fr;
    text-align:center;
    row-gap:1.5rem;
    `}
  }
  .btn {
    grid-column: 10/12;
    margin-top: 0.125rem 1.25rem;
    ${custommedia.lessThan("tablet")`
    grid-column:1/-1;
   margin-left:30%;
   margin-right:30%;
    `}
  }
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${custommedia.lessThan("tablet")`
     grid-template-columns:1fr;
     `}
  }
  img {
    width: 100%;
  }
  h3 {
    color: #fff;
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-gray);
  }
`;
// const ContentWrapper = styled.``
