import React from "react";
import ApprovedElement from "../ApprovedElement";
export default function ApprovedSection({}) {
  return (
    <>
      <h5>Pending</h5>
      {/* <div className="element2">
   <img
     src={
       "data:image/png;base64,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"
     }
     width="20"
     height="20"
   />
   <img
     src={
       "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
     }
     width="20"
     height="20"
   />

   <div className="details">
     <span className="name">
       tanuj vyas<span>(tanuj@gmail.com)</span>
     </span>
     <span className="date">Approved 19 Jan,2021</span>
   </div>

   <div className="fourth">✅</div>
 </div> */}
      <ApprovedElement
        imgLink={""}
        name={"tanuj"}
        email={"tanuj@gmail.com"}
        approveDate={"19 Jan,2021"}
        isApprove={false}
        pendingCount={"3"}
      />
    </>
  );
}
