import React from "react";

export default function ConfirmationSection({ descriptionData }) {
  return (
    <div className="confirmation-section">
      <p>
        Your company is already paying for Amazon Web Service on a recurring
        basis.<span>(1 instance owned by John Smith).</span>
      </p>
      <div id="buttonsInWebView">
        <button className="approve-btn">Approve</button>
        <button className="deny-btn">Deny</button>
      </div>
    </div>
  );
}
