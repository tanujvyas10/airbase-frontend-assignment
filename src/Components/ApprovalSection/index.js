import React from "react";
import ApprovedElement from "../ApprovedElement";
import moment from "moment";
export default function ApprovalSection({ approvers }) {
  const approvalList = approvers.map((element, idx) => {
    const { last_notified_time } = element;
    const { first_name, last_name, email, profile_picture } = element.approver;
    return (
      <ApprovedElement
        key={idx}
        imgLink={profile_picture}
        name={`${first_name} ${last_name}`}
        email={email}
        approveDate={moment(last_notified_time).format("ll")}
        isApprove
      />
    );
  });

  return (
    <>
      <h5>Approved</h5>
      {approvalList}
    </>
  );
}
