import "./styles.css";
import React from "react";

import { request } from "./request";
import RequestDescription from "./Components/RequestDescription";
import Header from "./Components/Header";
import Title from "./Components/Title";
//import ApprovedElement from "./Components/ApprovedElement";
import ApprovalSection from "./Components/ApprovalSection";
import PendingSection from "./Components/PendingSection";
// import ConfirmationSection from "./Components/ConfirmationSection";
import ConfimationSectionMobile from "./Components/ConfimationSectionMobile";
export default function App() {
  const { approvers } = request;
  return (
    <div className="main">
      <Header />
      <div className="modal">
        <Title />
        <div className="App">
          <div className="left-part">
            <RequestDescription descriptionData={request} />
          </div>
          <div className="right-part">
            <ApprovalSection approvers={approvers} />

            <hr />
            <PendingSection />
            <ConfimationSectionMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
