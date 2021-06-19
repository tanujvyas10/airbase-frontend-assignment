import DetailElement from "../DetailElement";
import moment from "moment";
export default function PendingSection({ approvers }) {
  const pendingList = approvers.map((element, idx) => {
    const { created_date } = element;
    const { first_name, last_name, email, profile_picture } = element.approver;
    return (
      <DetailElement
        key={idx}
        imgLink={profile_picture}
        name={`${first_name} ${last_name}`}
        email={email}
        date={`Last notified ${moment(created_date).format("ll")}`}
        pendingCount={"3"}
      />
    );
  });
  return (
    <>
      <h5>Pending</h5>
      {pendingList}
    </>
  );
}
