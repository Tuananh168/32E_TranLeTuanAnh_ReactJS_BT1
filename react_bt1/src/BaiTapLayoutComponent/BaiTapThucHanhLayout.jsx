import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import HeaderComponent from "./HeaderComponent";
import ItemComponent from "./ItemComponent";
import FooterComponent from "./FooterComponent";
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className="header">
        <HeaderComponent />
        <div className="body">
          <BannerComponent />
          <ItemComponent />
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    );
  }
}
