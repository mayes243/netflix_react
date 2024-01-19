import React, { Component } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import { useSpring, animated } from "react-spring";
import "../css/TabsNav.css";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <div style={{ background: "#222" }}>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab
              className={`${this.state.tabIndex === 0 ? "tab-selected active tab-no-focus" : null}`}
            >
              <TabDoor />
              <p style={{ marginBottom: "1.875rem" }} className="lgScreen">
                <strong>
                  no commitments <br />
                  cancel online at anytime
                </strong>
              </p>

              <span className="mdScreen" style={{ marginTop: "0.4rem" }}>
                Cancel
              </span>
            </Tab>
            <Tab
              className={`${this.state.tabIndex === 1 ? "tab-selected active tab-no-focus" : null}`}
            >
              <TabDevices />
              <p style={{ marginTop: "-5.3175rem" }} className="lgScreen">
                <strong>watch anywhere</strong>
              </p>

              <span className="mdScreen" style={{ marginTop: "-5.3125rem" }}>
                Devices
              </span>
            </Tab>
            <Tab
              className={`${this.state.tabIndex === 2 ? "tab-selected active tab-no-focus" : null}`}
            >
              <TabPrices />
              <p className="lgScreen">
                <strong>pick your price</strong>
              </p>
              <br />
              <span className="mdScreen">Price</span>
            </Tab>
          </TabList>
          {/* tabs content */}
          <AnimatedContent active={this.state.tabIndex === 0}>
            <TabPanel className={`tab-panel ${this.state.tabIndex === 0 ? "tab-active" : ""}`}>
              <TabContentOne />
            </TabPanel>
          </AnimatedContent>
          <AnimatedContent active={this.state.tabIndex === 1}>
            <TabPanel className={`tab-panel ${this.state.tabIndex === 1 ? "tab-active" : ""}`}>
              <TabContentTwo />
            </TabPanel>
          </AnimatedContent>
          <AnimatedContent active={this.state.tabIndex === 2}>
            <TabPanel className={`tab-panel ${this.state.tabIndex === 2 ? "tab-active" : ""}`}>
              <TabContentThree />
            </TabPanel>
          </AnimatedContent>
        </Tabs>
      </div>
    );
  }
}
export default TabComponent;

const AnimatedContent = ({ children, active }) => {
  const props = useSpring({
    opacity: active ? 1 : 0,
    transform: active ? "scale(1)" : "scale(0.8)",
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};
