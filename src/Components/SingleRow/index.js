import React from "react";

export default function SingleRow({ heading, imgLink, className, value }) {
  return (
    <tr>
      <td className="left-cell">
        <h3> {heading} </h3>
      </td>

      <td className="right-cell" id="img-text">
        {imgLink ? (
          <img className={className} src={imgLink} width="20" height="20" />
        ) : null}

        <p className="right-cell-desc"> {value}</p>
      </td>
    </tr>
  );
}
