import React from "react";

export default function SingleRowWithTwo() {
  return (
    <tr>
      <td className="left-cell">
        <h3> Requested By </h3>
      </td>

      <td className="right-cell" id="img-text">
        <img
          src={
            "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          }
          width="20"
          height="20"
        />

        <p className="right-cell-desc"> tleasdfasdfas</p>
      </td>
    </tr>
  );
}
