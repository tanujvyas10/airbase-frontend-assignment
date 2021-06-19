import React from "react";
import SingleRow from "../SingleRow";
import { images } from "../../helper";
import ConfirmationSection from "../ConfirmationSection";
export default function RequestDescription({ descriptionData }) {
  const {
    description,
    requested_by,
    cost,
    renewal_frequency_in_months,
    expense_account,
    created_date,
    files
  } = descriptionData;

  const { first_name, last_name, profile_picture } = requested_by;

  return (
    <div className="left-part">
      <div className="left-card">
        <table id="customers">
          <SingleRow
            heading={"Requested By"}
            imgLink={profile_picture}
            value={`${first_name} ${last_name}`}
          />
          <SingleRow heading={"Cost"} imgLink={""} value={"$" + cost} />

          <SingleRow
            heading={"Renewal Frequency"}
            imgLink={""}
            value={renewal_frequency_in_months + "months"}
          />

          <SingleRow
            heading={"Expense Account"}
            imgLink={""}
            value={expense_account}
          />

          <SingleRow
            heading={"File"}
            className="file"
            imgLink={images.xlsFileLogo}
            value={"Receipt-GitHub-Nov.xls"}
          />

          <SingleRow heading={"Description"} value={description} />
        </table>
      </div>
      <ConfirmationSection />
    </div>
  );
}
