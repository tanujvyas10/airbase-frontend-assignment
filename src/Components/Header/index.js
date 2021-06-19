import React from "react";
import { images } from "../../helper";
export default function Header() {
  return (
    <>
      <div className="logo">
        <img src={images.airbase_logo} />
      </div>
      <hr id="airbase-logo-hr" />
      <p>
        <span className="security-message-logo">
          <img width="11" height="auto" src={images.orange_lock} /> Security
          Message
        </span>
        <span className="security-message">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus.
        </span>
      </p>
    </>
  );
}
