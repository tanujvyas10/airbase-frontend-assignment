import React from "react";
import { images } from "../../helper";

export default function ApprovedElement({
  imgLink,
  name,
  email,
  approveDate,
  isApprove,
  pendingCount
}) {
  return (
    <>
      <div className="element2">
        <div className="pending_count">
          <span>{pendingCount}</span>
        </div>
        <img
          src={imgLink ? imgLink : "https://www.ledr.com/colours/white.jpg"}
          width="20"
          height="20"
        />

        <div className="details">
          <span className="name">
            {name}
            <span className="email">({email})</span>
          </span>
          <span className="date">Approved {approveDate}</span>
        </div>

        {isApprove ? (
          <div className="fourth">
            {" "}
            <img src={images.approvalIcon} width="20" height="auto" />
          </div>
        ) : null}
      </div>
    </>
  );
}
