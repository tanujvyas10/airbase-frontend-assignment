import "./styles.css";
import React, { useState, useEffect } from "react";

import { request } from "./request";
import RequestDescription from "./Components/RequestDescription";
import Header from "./Components/Header";
import Title from "./Components/Title";
import ApprovalSection from "./Components/ApprovalSection";
import PendingSection from "./Components/PendingSection";
import ConfimationSectionMobile from "./Components/ConfirmationSectionMobile";
export default function App() {
  const { approvers } = request;
  const [acceptApprovals, setAcceptApprovals] = useState([]);
  const [pendingApprovals, setPendingApprovals] = useState([]);
  useEffect(() => {
    let accepts = [...acceptApprovals];
    let pendings = [...pendingApprovals];

    approvers.forEach((element) => {
      if (element.status === "accepted") accepts.push(element);
      else pendings.push(element);
    });

    setAcceptApprovals(accepts);
    setPendingApprovals(pendings);
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="request-box">
        <Title />
        <div className="request">
          <div className="request-description">
            <RequestDescription descriptionData={request} />
          </div>
          <div className="associate-description">
            <ApprovalSection approvers={acceptApprovals} />

            <hr />
            <PendingSection approvers={pendingApprovals} />
            <ConfimationSectionMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
