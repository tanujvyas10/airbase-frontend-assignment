import { images } from "../../helper";

export default function DetailElement({
  imgLink,
  name,
  email,
  date,
  isApprove,
  pendingCount,
}) {
  return (
    <>
      <div className="detail-element">
        <div className="pending-count">
          <span>{pendingCount}</span>
        </div>
        <img
          src={imgLink ? imgLink : images.default_image}
          width="22"
          height="22"
        />

        <div className="details">
          <span className="name">
            {name}
            <span className="email">({email})</span>
          </span>
          <span className="date">{date}</span>
        </div>

        {isApprove ? (
          <div className="status-icon">
            {" "}
            <img
              className="approve-icon"
              src={images.approval_icon}
              width="20"
              height="auto"
            />
          </div>
        ) : (
          <div className="status-icon">
            {" "}
            <img
              className="pending-icon"
              src={images.white_img}
              width="20"
              height="20"
            />
          </div>
        )}
      </div>
    </>
  );
}
