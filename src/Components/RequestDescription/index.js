import React from "react";
import SingleElementRow from "../SingleElementRow";
import { images } from "../../helper";
import ConfirmationSection from "../ConfirmationSection";

export default function RequestDescription({ descriptionData }) {
  const {
    description,
    requested_by,
    cost,
    renewal_frequency_in_months,
    expense_account,
  } = descriptionData;

  const { first_name, last_name, profile_picture } = requested_by;

  return (
    <>
      <div className="request-details">
        <table>
          <SingleElementRow
            heading={"Requested By"}
            imgLink={profile_picture}
            value={`${first_name} ${last_name}`}
          />
          <SingleElementRow heading={"Cost"} imgLink={""} value={`$ ${cost}`} />

          <SingleElementRow
            heading={"Renewal Frequency"}
            value={`${renewal_frequency_in_months} months`}
          />

          <SingleElementRow
            heading={"Expense Account"}
            value={expense_account}
          />

          <SingleElementRow
            heading={"File"}
            className="file"
            imgLink={images.xlsFileLogo}
            value={"Receipt-GitHub-Nov.xls"}
          />

          <SingleElementRow heading={"Description"} value={description} />
        </table>
      </div>
      <ConfirmationSection />
    </>
  );
}
