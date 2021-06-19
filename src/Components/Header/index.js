import React from "react";

export default function Header() {
  return (
    <>
      <div className="logo">
        <img
          src={
            "https://global-uploads.webflow.com/5e0cb3903f3d95ff87a4f74a/5e0cb3903f3d952773a4f778_airbase-logo-rgb-02.svg"
          }
        />
      </div>

      <p>
        <span className="security-message-logo"> Security Message</span>
        <span className="security-message">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus.
        </span>
      </p>
    </>
  );
}
