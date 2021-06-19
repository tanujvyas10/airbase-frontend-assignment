import { images } from "../../helper";
export default function Title() {
  return (
    <div className="title">
      <img
        className="amazon-logo"
        width="20"
        height="30"
        src={images.amazon_logo}
      />
      <div>
        <span className="title-heading">
          Request for Amazon Web Service (#34)
        </span>
      </div>
    </div>
  );
}
