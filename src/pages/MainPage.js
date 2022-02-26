import React, { Component } from "react";
import Header from "../components/Header";
import TabComponent from "../components/BodyComponent";
import Footer from "../components/Footer";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabComponent />
        <Footer />
      </div>
    );
  }
}
export default MainPage;
