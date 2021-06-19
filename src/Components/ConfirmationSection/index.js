import React from "react";

export default function ConfirmationSection({ descriptionData }) {
  return (
    <div className="buttons">
      <p>
        Your company is already paying for Amazon Web Service on a recurring
        basis.<span> (1 instance owned by John Smith).</span>
      </p>
      <div id="buttonsInMobWeb">
        <button class="approve">Approve</button>
        <button class="reject">Deny</button>
      </div>
    </div>
  );
}
